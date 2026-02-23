<script>
    import { onMount, tick } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
    import { constellations } from "../constellation";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

    let container;
    let tooltip;
    let celestialSphere;
    let hoveredStar = null;
    const starMeshes = [];
    let selectedConstellation = "";

    const seasonColors = {
        Gennaio: 0xff3b3b, // rosso vivo
        Marzo: 0xff8c00, // arancione
        Aprile: 0xffd700, // giallo
        Maggio: 0x32cd32, // verde
        Giugno: 0x00bfff, // azzurro
        Luglio: 0x1e90ff, // blu
        Agosto: 0x4169e1, // blu intenso
        Ottobre: 0x8a2be2, // viola
        Novembre: 0xff1493, // magenta
        Dicembre: 0xdc143c, // cremisi
    };

    const constellationColors = [
        0xff6b6b, // rosso corallo
        0xf7b267, // arancio sabbia
        0xfdfd96, // giallo tenue
        0x77dd77, // verde pastello
        0x84b6f4, // azzurro
        0x6a5acd, // blu violaceo
        0xcbaacb, // lilla
        0xffb7ce, // rosa
        0xa0e7e5, // turchese chiaro
        0xffdac1, // pesca
    ];

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

    function createConstellationBox(group) {
        const box = new THREE.Box3().setFromObject(group);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // --- Box wireframe ---
        const size = new THREE.Vector3();
        box.getSize(size);

        const geometry = new THREE.BoxGeometry(
            size.x * 1.2,
            size.y * 1.2,
            size.z * 1.2,
        );

        const material = new THREE.MeshBasicMaterial({
            color: 0xb77c8b,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(center);
        group.add(mesh);
    }

    function raDecToAltAz(raStr, decStr, lat, lon, date = new Date()) {
        const toRad = (deg) => (deg * Math.PI) / 180;

        const raParts = raStr.split(":").map(Number);
        const ra = (raParts[0] + raParts[1] / 60 + raParts[2] / 3600) * 15;

        const decParts = decStr.split(":").map(Number);
        const dec =
            Math.sign(decParts[0]) *
            (Math.abs(decParts[0]) + decParts[1] / 60 + decParts[2] / 3600);

        const jd = date.getTime() / 86400000 + 2440587.5;
        const d = jd - 2451545.0;
        const gmst = 18.697374558 + 24.06570982441908 * d;
        const gmstDeg = (gmst % 24) * 15;

        let ha = gmstDeg + lon - ra;
        ha = ((ha + 360) % 360) * (Math.PI / 180);

        const decRad = toRad(dec);
        const latRad = toRad(lat);

        const alt = Math.asin(
            Math.sin(decRad) * Math.sin(latRad) +
                Math.cos(decRad) * Math.cos(latRad) * Math.cos(ha),
        );
        const az = Math.atan2(
            -Math.sin(ha),
            Math.tan(decRad) * Math.cos(latRad) -
                Math.sin(latRad) * Math.cos(ha),
        );

        return { alt, az };
    }

    function parseItalianDate(dateStr) {
        const [day, month, year] = dateStr.split("/");
        return new Date(year, month - 1, day, 21, 0, 0);
    }

    function getVisibleTime(ra, dec, lat, lon, date) {
        for (let h = 18; h <= 30; h++) {
            const dt = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                h % 24,
            );
            const { alt } = raDecToAltAz(ra, dec, lat, lon, dt);
            if (alt > 0.35) return dt;
        }
        return date;
    }

    function getConstellationVisibleTime(constellation, lat, lon, date) {
        for (let h = 18; h <= 30; h++) {
            const dt = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                h % 24,
            );
            const allAbove = constellation.stars.every((star) => {
                const { alt } = raDecToAltAz(star.RA, star.Dec, lat, lon, dt);
                return alt > 0.35;
            });
            if (allAbove) return dt;
        }
        return parseItalianDate(constellation.date);
    }

    function orientSkyToStar(starMesh) {
        if (!celestialSphere) return;
        const starDir = starMesh.userData.worldVector.clone();
        const targetDir = new THREE.Vector3(0, 0, 1);
        const quat = new THREE.Quaternion().setFromUnitVectors(
            starDir,
            targetDir,
        );
        celestialSphere.quaternion.premultiply(quat);
    }

    onMount(async () => {
        tooltip = tooltip || document.querySelector(".tooltip");
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x020414);

        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            500,
        );
        // In onMount, dopo aver creato la camera:
        camera.position.set(120, 90, 120);
        camera.lookAt(new THREE.Vector3(0, 5, 0));

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(500, 500),
            new THREE.MeshBasicMaterial({
                color: 0x020414,
                side: THREE.DoubleSide,
            }),
        );
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = 0;
        scene.add(plane);

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
            ctx.font = "Bold 60px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("N", 64, 64);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);

            sprite.scale.set(15, 15, 1);
            sprite.position.set(0, 5, -length - 10); // leggermente oltre l'asse nord

            axesGroup.add(sprite);

            scene.add(axesGroup);
        }
        createCardinalAxes();

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

        const r = 80;
        celestialSphere = new THREE.Mesh(
            new THREE.SphereGeometry(r, 64, 64),
            new THREE.MeshBasicMaterial({
                color: 0x6d6965,
                wireframe: true,
                opacity: 0.1,
                transparent: true,
            }),
        );
        scene.add(celestialSphere);

        scene.add(createAltitudeCircles(r, 5));

        const observerLat = -15.263;
        const observerLon = -39.145;

        constellations.forEach((constellation, index) => {
            const color =
                constellationColors[index % constellationColors.length] ||
                0xffffff;
            const group = new THREE.Group();

            const ritualDate = parseItalianDate(constellation.date);
            const visibleDate = getConstellationVisibleTime(
                constellation,
                observerLat,
                observerLon,
                ritualDate,
            );

            constellation.stars.forEach((star) => {
                const mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(0.5, 8, 8),
                    new THREE.MeshBasicMaterial({ color }),
                );
                const { alt, az } = raDecToAltAz(
                    star.RA,
                    star.Dec,
                    observerLat,
                    observerLon,
                    visibleDate,
                );

                const x = r * Math.cos(alt) * Math.sin(az);
                const y = r * Math.sin(alt);
                const z = r * Math.cos(alt) * Math.cos(az);
                mesh.position.set(x, y, z);

                mesh.userData = {
                    worldVector: new THREE.Vector3(x, y, z).normalize(),
                    constellation: constellation.name,
                    season: constellation.season,
                    notes: constellation.notes,
                    date: constellation.date,
                    starName: star.name,
                    RA: star.RA,
                    Dec: star.Dec,
                    mag: star.mag,
                    visibleDate,
                };

                starMeshes.push(mesh);
                group.add(mesh);
            });
            createConstellationBox(group);
            scene.add(group);
        });

        await tick();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onMouseMove(event) {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(starMeshes);

            if (intersects.length > 0) {
                const star = intersects[0].object;

                if (hoveredStar !== star) {
                    // reset vecchio
                    if (hoveredStar) hoveredStar.scale.set(1, 1, 1);

                    // nuovo highlight
                    hoveredStar = star;
                    hoveredStar.scale.set(1.5, 1.5, 1.5);
                    container.style.cursor = "pointer";
                }
            } else {
                if (hoveredStar) hoveredStar.scale.set(1, 1, 1);
                hoveredStar = null;
                container.style.cursor = "default";
            }
        }

        function onMouseClick(event) {
            if (!tooltip) return;
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(starMeshes);

            const prevAxis = scene.getObjectByName("selectedAxis");
            if (prevAxis) scene.remove(prevAxis);

            if (intersects.length > 0) {
                const data = intersects[0].object.userData;

                tooltip.style.display = "block";
                tooltip.style.left = `${event.clientX + 10}px`;
                tooltip.style.top = `${event.clientY + 10}px`;
                tooltip.innerHTML = `
          <strong>${data.constellation}</strong><br>
          Estrela: ${data.starName}<br>
          Data: ${data.date}<br>
          Hora: ${data.visibleDate.getHours().toString().padStart(2, "0")}:${data.visibleDate.getMinutes().toString().padStart(2, "0")}<br>
          RA: ${data.RA}<br>
          Dec: ${data.Dec}<br>
        `;

                intersects[0].object.scale.set(2, 2, 2);
                orientSkyToStar(intersects[0].object);

                const points = [
                    intersects[0].object.position.clone(),
                    archetype.position.clone(),
                ];
                const geometry = new THREE.BufferGeometry().setFromPoints(
                    points,
                );
                const material = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    linewidth: 1,
                });
                const line = new THREE.Line(geometry, material);
                line.name = "selectedAxis";
                scene.add(line);
            } else {
                tooltip.style.display = "none";
                starMeshes.forEach((s) => s.scale.set(1, 1, 1));
            }
        }

        window.addEventListener("click", onMouseClick);
        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener("resize", () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    });

    $: if (starMeshes.length) {
        starMeshes.forEach((s) => {
            if (
                selectedConstellation === "" ||
                s.userData.constellation === selectedConstellation
            ) {
                s.visible = true;
            } else {
                s.visible = false;
            }
        });
    }
</script>

<div bind:this={container} class="canvas-container">
    <select bind:value={selectedConstellation}>
        <option value="">Todas as constelações</option>
        {#each constellations as c}
            <option value={c.name}>{c.name}</option>
        {/each}
    </select>

    <div bind:this={tooltip} class="tooltip"></div>
</div>

<style>
    .canvas-container {
        width: 100vw;
        height: 95vh;
        overflow: hidden;
        position: relative;
    }
    .tooltip {
        position: absolute;
        background-color: rgba(2, 4, 20, 0.9);
        color: #9ea7e5;
        padding: 6px 10px;
        border-radius: 4px;
        font-family: "Gabarito", sans-serif;
        font-size: 14px;
        pointer-events: none;
        display: none;
    }
    .canvas-container select {
        font-family: "Gabarito", sans-serif;
    }
</style>
