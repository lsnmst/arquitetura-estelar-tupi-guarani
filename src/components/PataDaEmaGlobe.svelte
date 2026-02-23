<script>
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

    let container;
    const latitude = -15.263;
    const longitude = -39.145;
    const radius = 80;

    let scene, camera, renderer, animationId;

    /* ====== FUNZIONI ASTROMETRICHE ====== */
    function raDecToAltAz(raHours, decDeg, latDeg, lonDeg, date = new Date()) {
        const toRad = (deg) => (deg * Math.PI) / 180;
        const toDeg = (rad) => (rad * 180) / Math.PI;

        const raDeg = raHours * 15;
        const jd = date.getTime() / 86400000 + 2440587.5;
        const d = jd - 2451545.0;
        const gmst = 18.697374558 + 24.06570982441908 * d;
        const gmstDeg = (gmst % 24) * 15;

        let haDeg = gmstDeg + lonDeg - raDeg;
        haDeg = (haDeg + 360) % 360;

        const ha = toRad(haDeg);
        const dec = toRad(decDeg);
        const lat = toRad(latDeg);

        const alt = Math.asin(
            Math.sin(dec) * Math.sin(lat) +
                Math.cos(dec) * Math.cos(lat) * Math.cos(ha),
        );
        const az = Math.atan2(
            -Math.sin(ha),
            Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(ha),
        );

        return { alt: toDeg(alt), az: (toDeg(az) + 360) % 360 };
    }

    function altAzToXYZ(altDeg, azDeg, r) {
        const alt = THREE.MathUtils.degToRad(altDeg);
        const az = THREE.MathUtils.degToRad(azDeg);
        return {
            x: r * Math.cos(alt) * Math.sin(az),
            y: r * Math.sin(alt),
            z: -r * Math.cos(alt) * Math.cos(az),
        };
    }

    /* ====== STELLE PATA DA EMA ====== */
    const stars = [
        { name: "α Cru", ra: 12.4433, dec: -63.0992 }, // α Cru 28/03/2026
        { name: "β Cru", ra: 12.7953, dec: -59.6889 }, // β Cru
        { name: "γ Cru", ra: 12.5195, dec: -57.1151 }, // γ Cru
        { name: "δ Cru", ra: 12.2524, dec: -58.7489 }, // δ Cru
        { name: "ε Cru", ra: 12.37, dec: -60.1 }, // ipotetica ε Cru
    ];

    /* ====== DATE PERIODO IDEALE ====== */
    const dates = [
        // new Date("2026-03-01T18:00:00"),
        new Date("2026-04-01T18:00:00"),
        // new Date("2026-04-30T18:00:00"),
    ];

    function generateOrbit(star, baseDate) {
        const points = [];
        for (let h = 18; h <= 30; h += 0.25) {
            const d = new Date(baseDate);
            d.setHours(h % 24);
            if (h >= 24) d.setDate(d.getDate() + 1);

            const { alt, az } = raDecToAltAz(
                star.ra,
                star.dec,
                latitude,
                longitude,
                d,
            );
            if (alt > 0) {
                const pos = altAzToXYZ(alt, az, radius + 1);
                points.push(new THREE.Vector3(pos.x, pos.y, pos.z));
            }
        }
        return points;
    }

    function createAltitudeCircles(radius, stepDeg = 5, segments = 64) {
        const group = new THREE.Group();
        for (let alt = stepDeg; alt <= 90; alt += stepDeg) {
            const altRad = THREE.MathUtils.degToRad(alt);
            const circleRadius = radius * Math.cos(altRad);
            const y = radius * Math.sin(altRad);

            const points = [];
            for (let i = 0; i <= segments; i++) {
                const az = (i / segments) * Math.PI * 2;
                points.push(
                    new THREE.Vector3(
                        circleRadius * Math.sin(az),
                        y,
                        circleRadius * Math.cos(az),
                    ),
                );
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ color: 0x2a2a2b });
            const line = new THREE.Line(geometry, material);
            group.add(line);

            const canvas = document.createElement("canvas");
            canvas.width = 128;
            canvas.height = 32;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#888888";
            ctx.font = "18px Arial";
            ctx.fillText(`${alt}°`, 0, 18);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMat = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMat);
            sprite.scale.set(10, 2.5, 1);
            sprite.position.set(circleRadius, y, 0);
            group.add(sprite);
        }
        return group;
    }

    function createCardinalAxes(length = 100) {
        const axesGroup = new THREE.Group();

        const createAxis = (dir, color, width = 1) => {
            const material = new THREE.LineBasicMaterial({ color });
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0.1, 0),
                dir.clone().multiplyScalar(length),
            ]);
            axesGroup.add(new THREE.Line(geometry, material));
        };

        // Assi
        createAxis(new THREE.Vector3(0, 0, -1), 0xffffff); // Nord
        createAxis(new THREE.Vector3(1, 0, 0), 0x777777); // Est
        createAxis(new THREE.Vector3(0, 0, 1), 0x777777); // Sud
        createAxis(new THREE.Vector3(-1, 0, 0), 0x777777); // Ovest

        // Label Nord
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.font = "Bold 36px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("N", 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);

        sprite.scale.set(15, 15, 1);
        sprite.position.set(0, 5, -length - 5); // leggermente oltre l'asse nord

        axesGroup.add(sprite);

        scene.add(axesGroup);
    }

    onMount(() => {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        createCardinalAxes();

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(500, 500),
            new THREE.MeshStandardMaterial({
                color: 0x000000,
                side: THREE.DoubleSide,
            }),
        );
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = 0;
        scene.add(plane);

        function createVerticalAxis(length = 100) {
            const group = new THREE.Group();

            // linea zenit
            const material = new THREE.LineBasicMaterial({ color: 0xffffff });
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, length, 0),
            ]);

            const line = new THREE.Line(geometry, material);
            group.add(line);

            // sfera zenit
            const sphere = new THREE.Mesh(
                new THREE.SphereGeometry(0, 0, 0),
                new THREE.MeshBasicMaterial({ color: 0x00ffff }),
            );

            sphere.position.set(0, length, 0);
            group.add(sphere);

            scene.add(group);
        }
        createVerticalAxis(80);

        const archetype = new THREE.Mesh(
            new THREE.BoxGeometry(0, 0, 0),
            new THREE.MeshStandardMaterial({ color: 0xffffff, visible: false }), // invisibile, ma mantiene la logica
        );
        archetype.position.y = 5;
        scene.add(archetype);

        const loader = new GLTFLoader();
        loader.load(
            import.meta.env.BASE_URL + "model/estrelar.glb",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.04, 0.04, 0.04); // regola scala secondo il modello
                model.position.set(-5, -5, 20); // relativo al cubo
                archetype.add(model); // il modello segue il cubo
            },
            undefined,
            (error) => {
                console.error("Errore nel caricamento modello:", error);
            },
        );

        // globo celeste
        const globe = new THREE.Mesh(
            new THREE.SphereGeometry(radius, 64, 64),
            new THREE.MeshBasicMaterial({
                color: 0x6d6965,
                wireframe: true,
                opacity: 0.1,
                transparent: true,
            }),
        );
        scene.add(globe);

        // orbite + stelle
        dates.forEach((date, i) => {
            stars.forEach((star, starIdx) => {
                const points = generateOrbit(star, date);

                // linea dell’orbita
                const geometry = new THREE.BufferGeometry().setFromPoints(
                    points,
                );
                const material = new THREE.LineBasicMaterial({
                    color: 0xff4500,
                    transparent: true,
                    opacity: 0.75,
                });
                scene.add(new THREE.Line(geometry, material));

                // aggiungi sfere a TUTTE le stelle
                points.forEach((p, idx) => {
                    if (idx % 4 === 0) {
                        // perché step = 0.25h, ogni 4 step = 1 ora
                        const sphere = new THREE.Mesh(
                            new THREE.SphereGeometry(0.4, 16, 16),
                            new THREE.MeshBasicMaterial({ color: 0xff4500 }),
                        );
                        sphere.position.copy(p);
                        scene.add(sphere);
                    }
                });

                // aggiungi label solo alla prima stella
                if (starIdx === 0 && points.length > 0) {
                    const startPoint = points[0]; // 18:00
                    const endPoint = points[points.length - 1]; // 6:00

                    [startPoint, endPoint].forEach((p, idx) => {
                        const canvas = document.createElement("canvas");
                        canvas.width = 256;
                        canvas.height = 128;
                        const ctx = canvas.getContext("2d");
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 36px Arial";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText(
                            idx === 0 ? "18:00" : "06:00",
                            canvas.width / 2,
                            canvas.height / 2,
                        );

                        const texture = new THREE.CanvasTexture(canvas);
                        texture.needsUpdate = true;
                        const sprite = new THREE.Sprite(
                            new THREE.SpriteMaterial({
                                map: texture,
                                transparent: true,
                            }),
                        );
                        sprite.scale.set(20, 10, 1);
                        sprite.position.set(p.x, p.y + 5, p.z);
                        scene.add(sprite);
                    });
                }
            });
        });

        // cerchi altitudine
        scene.add(createAltitudeCircles(radius, 5));

        // camera ortografica isometrica
        const aspect = container.clientWidth / container.clientHeight;
        const frustumSize = 200;
        camera = new THREE.OrthographicCamera(
            (-frustumSize * aspect) / 2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            -frustumSize / 2,
            0.1,
            1000,
        );
        camera.position.set(200, 200, 200);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enabled = true;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = false;

        function animate() {
            animationId = requestAnimationFrame(animate);
            scene.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener("resize", () => {
            const aspect = container.clientWidth / container.clientHeight;
            camera.left = (-frustumSize * aspect) / 2;
            camera.right = (frustumSize * aspect) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = -frustumSize / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        onDestroy(() => {
            cancelAnimationFrame(animationId);
            renderer.dispose();
        });
    });
</script>

<div class="container">
    <div bind:this={container} class="globe-container"></div>
</div>

<style>
    .container {
        width: 50rem;
        height: 50rem;
    }
    .globe-container {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
</style>
