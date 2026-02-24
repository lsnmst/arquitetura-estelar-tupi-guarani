<script>
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    // import FinestraSVG from './finestra.svg?component';

    export let globeStart = 0;

    let container;
    const latitude = -15.263;
    const longitude = -39.145;
    const radius = 80;

    let scene, camera, renderer, animationId;

    const sections = [
        {
            id: "pata",
            title: "Pata da Ema (Nhandu pysá)",
            month: "Março-Abril",
            arch: "Entre março e abril, a constelação torna-se visível ao entardecer, surgindo progressivamente no quadrante Sudeste. Até cerca das 21h30–22h00 pode ser enquadrada por meio de janela vertical alta orientada a Sul ou Sudeste, permitindo acompanhar sua ascensão. Entre 22h00 e 1h00 atinge maior elevação, podendo ser observada através de pátio interno ou varanda aberta voltada a Sul, favorecendo um enquadramento mais amplo do céu austral.",
            drawing: [1, 4, 5],
        },
        {
            id: "colibri",
            title: "Colibrì (Mainamy)",
            month: "Março-Abril",
            arch: "Nos meses de março e abril, a constelação surge no quadrante Leste–Sudeste ao anoitecer, tornando-se visível entre 19h00 e 21h30. Entre 22h00 e 0h00 aproxima-se do meridiano Sul, atingindo maior altura no céu e permitindo enquadramento através de varanda ou abertura orientada a Sul. Após 1h00 desloca-se progressivamente para Oeste–Sudoeste, iniciando sua descida em direção ao horizonte.",
            drawing: [1, 2, 4],
        },
        {
            id: "jabuti",
            title: "Jabuti (Zauxihu Ragapaw)",
            month: "Maio",
            arch: "Em maio, a constelação surge no quadrante Nordeste ao anoitecer, tornando-se mais elevada entre 21h00 e 0h00. Pode ser enquadrada por janela vertical orientada a Nordeste ou por pátio interno que permita maior ângulo de visão zenital. Entre 0h00 e 3h00 desloca-se para Noroeste, sendo possível observá-la através de aberturas superiores ou varandas abertas voltadas a Norte.",
            drawing: [1, 4, 5],
        },
        {
            id: "ema",
            title: "Ema (Guirá Nhandú)",
            month: "Maio-Junho",
            arch: "Entre maio e junho, a constelação torna-se visível ao anoitecer no quadrante Sudeste, alcançando maior presença entre 20h00 e 23h30. Recomenda-se varanda profunda ou abertura vertical orientada a Sudeste, permitindo acompanhar sua extensão no céu austral. Quando próxima ao horizonte, entre 19h00 e 20h00, pode ser enquadrada por janela horizontal baixa voltada a Sudeste ou Sul, desde que o relevo local não ultrapasse a linha visual inferior. Entre 23h30 e 2h00 atinge posição mais elevada, sendo mais adequada a observação através de pátio interno amplo.",
            drawing: [1, 4, 5, 3, 6],
        },
        {
            id: "homenvelho",
            title: "Homem Velho (Tuiváe)",
            month: "Dezembro",
            arch: "Durante o mês de dezembro, a constelação surge no quadrante Leste entre 19h00 e 20h00, podendo ser enquadrada por janela horizontal baixa orientada a Leste, valorizando sua emergência no horizonte, desde que não haja obstrução topográfica significativa. Entre 21h00 e 2h00 atinge maior elevação, sendo mais adequada a janela vertical alta, pórtico ou pátio interno. A partir das 4h00, já em deslocamento para Oeste, volta a permitir enquadramento por abertura baixa voltada a Oeste.",
            drawing: [1, 2, 3, 6],
        },
        {
            id: "pleiade",
            title: "Plêiades (Seichú)",
            month: "Novembro",
            arch: "Em novembro, a constelação surge no quadrante Leste a partir das 19h30–20h00, tornando-se mais elevada entre 22h00 e 1h00. Pode ser enquadrada por janela vertical alta orientada a Leste ou por abertura zenital controlada, valorizando sua configuração compacta. Após 2h00 desloca-se para Oeste, sendo observável por pátio interno ou aberturas voltadas a Noroeste.",
            drawing: [1, 4, 5],
        },
    ];

    let activeIndex = 0;
    const constellationGroups = {};

    // Tween per animare l'entrata del box
    const infoX = tweened(100, { duration: 500, easing: cubicOut });

    /* ================= ASTROMETRIA ================= */
    function raDecToAltAz(raHours, decDeg, latDeg, lonDeg, date) {
        const toRad = (d) => (d * Math.PI) / 180;
        const toDeg = (r) => (r * 180) / Math.PI;

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

    /* ================= COSTRUZIONE COSTELLAZIONE ================= */
    function buildConstellation(id, stars, color, date) {
        const group = new THREE.Group();
        group.visible = false;

        stars.forEach((star, starIdx) => {
            const points = generateOrbit(star, date);

            // linea dell’orbita
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.8,
            });
            group.add(new THREE.Line(geometry, material));

            // sfere ogni ora
            points.forEach((p, idx) => {
                if (idx % 4 === 0) {
                    const sphere = new THREE.Mesh(
                        new THREE.SphereGeometry(0.4, 16, 16),
                        new THREE.MeshBasicMaterial({ color }),
                    );
                    sphere.position.copy(p);
                    group.add(sphere);
                }
            });

            // label orari solo prima stella
            if (starIdx === 0 && points.length > 0) {
                const startPoint = points[0];
                const endPoint = points[points.length - 1];

                [startPoint, endPoint].forEach((p, idx) => {
                    const canvas = document.createElement("canvas");
                    canvas.width = 256;
                    canvas.height = 128;
                    const ctx = canvas.getContext("2d");
                    ctx.fillStyle = "#9ea7e5";
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
                    group.add(sprite);
                });
            }
        });

        scene.add(group);
        constellationGroups[id] = group;
    }

    /* ================= SCROLL ================= */
    function updateConstellation() {
        Object.values(constellationGroups).forEach((g) => (g.visible = false));
        const key = sections[activeIndex]?.id;
        if (key) constellationGroups[key].visible = true;

        // anima il box dall'alto a destra
        infoX.set(-100); // parte fuori schermo a destra
        setTimeout(() => infoX.set(0), 50);
    }

    function handleScroll() {
        const sectionHeight = window.innerHeight;
        const relativeScroll = window.scrollY - globeStart;

        if (relativeScroll < 0) return;

        let index = Math.floor(relativeScroll / sectionHeight);

        index = Math.max(0, Math.min(sections.length - 1, index));

        if (index !== activeIndex) {
            activeIndex = index;
            updateConstellation();
        }
    }

    /* ================= MOUNT ================= */
    onMount(() => {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x020414);

        createCardinalAxes();

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
                console.error("Error", error);
            },
        );

        camera = new THREE.PerspectiveCamera(
            50,
            container.clientWidth / container.clientHeight,
            0.1,
            1000,
        );
        camera.position.set(200, 200, 200);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.6));

        const globe = new THREE.Mesh(
            new THREE.SphereGeometry(radius, 64, 64),
            new THREE.MeshBasicMaterial({
                color: 0x61581a,
                wireframe: true,
                transparent: true,
                opacity: 0.1,
            }),
        );
        scene.add(globe);

        scene.add(createAltitudeCircles(radius, 5));

        /* ====== COSTELLAZIONI ====== */
        buildConstellation(
            "pata",
            [
                { name: "α Cru", ra: 12.4433, dec: -63.0992 },
                { name: "β Cru", ra: 12.7953, dec: -59.6889 },
                { name: "γ Cru", ra: 12.5195, dec: -57.1151 },
                { name: "δ Cru", ra: 12.2524, dec: -58.7489 },
                { name: "ε Cru", ra: 12.37, dec: -60.1 },
            ],
            0x9ea7e5,
            new Date("2026-04-01T18:00:00"),
        );

        buildConstellation(
            "colibri",
            [
                { name: "γ Crv", ra: 12.2634, dec: -17.5419 },
                { name: "α Crv", ra: 12.1402, dec: -24.7289 },
                { name: "β Crv", ra: 12.5731, dec: -23.3968 },
                { name: "δ Crv", ra: 12.4977, dec: -16.5154 },
                { name: "ε Crv", ra: 12.1687, dec: -22.6198 },
            ],
            0x9ea7e5,
            new Date("2026-03-25T18:00:00"),
        );

        buildConstellation(
            "jabuti",
            [
                { name: "α CrB", ra: 15.5781, dec: 26.7147 },
                { name: "β CrB", ra: 15.4638, dec: 29.1057 },
                { name: "γ CrB", ra: 15.7124, dec: 26.2955 },
                { name: "δ CrB", ra: 15.8266, dec: 26.0684 },
                { name: "ε CrB", ra: 15.9598, dec: 26.8779 },
                { name: "ι CrB", ra: 15.9468, dec: 29.6159 },
                { name: "θ CrB", ra: 16.024, dec: 31.6031 },
            ],
            0x9ea7e5,
            new Date("2026-05-15T18:00:00"),
        );

        buildConstellation(
            "ema",
            [
                { name: "α Cen", ra: 14.6601, dec: -60.8339 },
                { name: "β Cen", ra: 14.0637, dec: -60.373 },
                { name: "α Mus", ra: 12.6197, dec: -69.1356 },
                { name: "β Cir", ra: 15.2919, dec: -58.8012 },
                { name: "β TrA", ra: 16.0056, dec: -63.7755 },
                { name: "ε¹ Ara", ra: 16.977, dec: -60.6739 },
                { name: "α Ara", ra: 17.5307, dec: -49.8761 },
                { name: "θ Sco", ra: 17.6219, dec: -43.0054 },
                { name: "γ Sco", ra: 17.7081, dec: -37.1038 },
                { name: "α Sco", ra: 16.4901, dec: -26.432 },
                { name: "δ Sco", ra: 16.0055, dec: -22.6217 },
                { name: "ζ Lup", ra: 15.2048, dec: -52.0991 },
                { name: "γ Lup", ra: 15.5857, dec: -41.1667 },
            ],
            0x9ea7e5,
            new Date("2026-06-01T18:00:00"),
        );

        buildConstellation(
            "homenvelho",
            [
                { name: "α Ori", ra: 5.9195, dec: 7.4071 }, // Betelgeuse
                { name: "γ Ori", ra: 5.4189, dec: 6.3497 },
                { name: "β Ori", ra: 5.2423, dec: -8.2016 }, // Rigel
                { name: "δ Ori", ra: 5.5334, dec: -0.2991 },
                { name: "ε Ori", ra: 5.6036, dec: -1.2019 },
                { name: "ζ Ori", ra: 5.6793, dec: -1.9426 },
                { name: "κ Ori", ra: 5.7959, dec: -9.6696 },
                { name: "π³ Ori", ra: 4.8307, dec: 6.9613 },
                { name: "π⁵ Ori", ra: 4.9042, dec: 2.4407 },
                { name: "15 Ori", ra: 5.1321, dec: -9.6696 },
                { name: "β Eri", ra: 5.1308, dec: -5.0864 }, // Cursa
                { name: "α Tau", ra: 4.5987, dec: 16.5093 }, // Aldebaran
                { name: "M45", ra: 3.7923, dec: 24.1051 }, // Pleiadi
            ],
            0x9ea7e5,
            new Date("2026-12-15T18:00:00"),
        );

        buildConstellation(
            "pleiade",
            [
                { name: "16 Tau", ra: 3.7405, dec: 24.1133 },
                { name: "17 Tau", ra: 3.7433, dec: 24.1051 },
                { name: "19 Tau", ra: 3.7535, dec: 24.4673 },
                { name: "20 Tau", ra: 3.7638, dec: 24.3678 },
                { name: "21 Tau", ra: 3.7721, dec: 24.1352 },
                { name: "23 Tau", ra: 3.7794, dec: 23.9483 },
                { name: "25 Tau", ra: 3.7904, dec: 24.1051 },
            ],
            0x9ea7e5,
            new Date("2026-11-15T18:00:00"),
        );

        updateConstellation(); // importante: mostra subito la prima costellazione

        function animate() {
            animationId = requestAnimationFrame(animate);
            scene.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        onDestroy(() => {
            cancelAnimationFrame(animationId);
            renderer.dispose();
            window.removeEventListener("scroll", handleScroll);
        });
    });
</script>

<div class="layout">
    <div bind:this={container} class="globe"></div>

    <div class="info" style="--sections:{sections.length}">
        <div class="info-content">
            <p>
                <!--  Colônia de Una, Bahia ✤ Lat {latitude.toFixed(3)}°, Lon {longitude.toFixed(
                    3,
                )}° -->
                Colônia de Una, Bahia ✤ Escala de Bortle: 3-5
            </p>
            <h2>{sections[activeIndex]?.title}</h2>
            <p style="">
                Aparição e melhor época de observação: {sections[activeIndex]
                    ?.month}
            </p>
            <div
                style="height:20px;border-bottom: #9ea7e5 1px solid;padding-bottom:10px;width:50%;text-align: center;margin:auto"
            ></div>
            <p style="font-size: 0.9em;padding:30px">
                {sections[activeIndex]?.arch}
            </p>

            <div class="drawing-container">
                {#each sections[activeIndex]?.drawing ?? [] as img}
                    <img
                        src={`${import.meta.env.BASE_URL}img/${img}.png`}
                        alt={`drawing-${img}`}
                        class="drawing-image"
                    />
                {/each}
            </div>
        </div>

        {#each sections as _}
            <div class="scroll-section"></div>
        {/each}
    </div>
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: 60% 40%;
    }
    .globe {
        height: 100vh;
        position: sticky;
        top: 0;
    }

    .info {
        position: relative;
    }

    .info-content {
        font-family: "Gabarito", sans-serif;
        position: sticky;
        top: 10%;
        margin-left: auto;
        padding: 1.1rem;
        color: #9ea7e5;
        background: #020414;
        border-radius: 1rem;
        z-index: 10;
    }

    .info-content h2 {
        font-size: 1.8em;
        font-weight: 500;
        text-transform: uppercase;
        margin-block-start: 0.4rem;
        margin-block-end: 0.4rem;
    }

    .info-content h3 {
        font-size: 1.1em;
        font-weight: 500;
        margin-block-start: 0.2rem;
        margin-block-end: 0.2rem;
    }

    .info-content p {
        margin-block-start: 0.2rem;
        margin-block-end: 0.2rem;
    }

    .scroll-section {
        height: 100vh;
    }

    .drawing-container {
        margin-top: 1.5rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .drawing-image {
        width: auto;
        height: 150px;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .drawing-image:hover {
        transform: scale(1.05);
    }

    .svg-container {
        margin-top: 1rem;
        width: 150px; /* regola la larghezza come serve */
        height: auto;
    }

    body {
        margin: 0;
        background: #020414;
    }

    @media (max-width: 768px) {
        .layout {
            display: grid;
            grid-template-columns: 50% 50%;
        }

        .info-content {
            font-size: 0.8em;
            top: 1%;
        }

        .info-content p {
            padding: 2px !important;
        }

        .drawing-container {
            display: none;
        }
    }
</style>
