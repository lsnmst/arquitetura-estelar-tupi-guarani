<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let scene, camera, renderer;
    let gnomon, sunLight, sunMesh;
    const RADIUS = 25;

    const solstices = [
        {
            name: "Solstizio Estate",
            month: 5,
            day: 21,
            light: null,
            color: 0xffffff,
        },
        {
            name: "Solstizio Inverno",
            month: 11,
            day: 21,
            light: null,
            color: 0xffeeaa,
        },
    ];
    let currentDayIndex = 0;
    let currentHour = 6;

    const latitude = -15.263;
    const longitude = -39.145;

    const seasonalPoints = [
        { name: "NSV", az: Math.PI / 2 - 0.4, color: 0x9ea7e5 },
        { name: "PSV", az: -Math.PI / 2 + 0.4, color: 0x9ea7e5 },
        { name: "NSI", az: Math.PI / 2 + 0.4, color: 0x9ea7e5 },
        { name: "PSI", az: -Math.PI / 2 - 0.4, color: 0x9ea7e5 },
    ];

    function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x020414);

        camera = new THREE.PerspectiveCamera(
            50,
            container.clientWidth / container.clientHeight,
            0.1,
            1000,
        );
        camera.position.set(40, 30, 40);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.2));

        sunLight = new THREE.DirectionalLight(0xffffff, 1);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 1024;
        sunLight.shadow.mapSize.height = 1024;
        sunLight.shadow.camera.left = -50;
        sunLight.shadow.camera.right = 50;
        sunLight.shadow.camera.top = 50;
        sunLight.shadow.camera.bottom = -50;
        sunLight.shadow.camera.near = 0.1;
        sunLight.shadow.camera.far = 200;
        scene.add(sunLight);

        sunMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x020414 }),
        );
        scene.add(sunMesh);

        addGround();
        addGnomon();
        drawGnomonCircle();
        drawHorizonCircle();
        drawCardinalAxes();
        drawCardinalLabels();
        drawSeasonalPoints();

        window.addEventListener("resize", onResize);
    }

    function addGround() {
        const ground = new THREE.Mesh(
            new THREE.PlaneGeometry(200, 200),
            new THREE.MeshStandardMaterial({ color: 0x9ea7e5 }),
        );
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        scene.add(ground);
    }

    function addGnomon() {
        gnomon = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.3, 20),
            new THREE.MeshStandardMaterial({ color: 0x9ea7e5 }),
        );
        gnomon.position.y = 10;
        gnomon.castShadow = true;
        scene.add(gnomon);
    }

    function drawGnomonCircle() {
        const radius = 3;
        const segments = 64;
        const geometry = new THREE.RingGeometry(
            radius - 0.05,
            radius + 0.05,
            segments,
        );
        const material = new THREE.MeshBasicMaterial({
            color: 0x9ea7e5,
            side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.21;
        scene.add(ring);
    }

    function drawHorizonCircle() {
        const geometry = new THREE.RingGeometry(
            RADIUS - 0.2,
            RADIUS + 0.2,
            128,
        );
        const material = new THREE.MeshBasicMaterial({
            color: 0x9ea7e5,
            side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.x = -Math.PI / 2;
        scene.add(ring);
    }

    function drawCardinalAxes() {
        const axes = [
            { name: "N", az: 0 },
            { name: "L", az: Math.PI / 2 },
            { name: "S", az: Math.PI },
            { name: "O", az: -Math.PI / 2 },
        ];

        axes.forEach((a) => {
            const x = RADIUS * Math.sin(a.az);
            const z = RADIUS * Math.cos(a.az);
            const geom = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0.1, 0),
                new THREE.Vector3(x, 0.1, z),
            ]);
            const mat = new THREE.LineBasicMaterial({ color: 0x9ea7e5 });
            scene.add(new THREE.Line(geom, mat));
        });
    }

    function drawCardinalLabels() {
        const axes = [
            { name: "N", az: 0 },
            { name: "L", az: Math.PI / 2 },
            { name: "S", az: Math.PI },
            { name: "O", az: -Math.PI / 2 },
        ];

        axes.forEach((a) => {
            const x = (RADIUS + 2) * Math.sin(a.az);
            const z = (RADIUS + 2) * Math.cos(a.az);
            const label = createLabel(a.name, "#9ea7e5");
            label.position.set(x, 0.2, z);
            scene.add(label);
        });
    }

    function drawSeasonalPoints() {
        seasonalPoints.forEach((p) => {
            const x = RADIUS * Math.sin(p.az);
            const z = RADIUS * Math.cos(p.az);

            const marker = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 16, 16),
                new THREE.MeshStandardMaterial({ color: p.color }),
            );
            marker.position.set(x, 0.2, z);
            scene.add(marker);

            const lineGeom = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0.2, 0),
                new THREE.Vector3(x, 0.2, z),
            ]);
            const lineMat = new THREE.LineBasicMaterial({ color: p.color });
            scene.add(new THREE.Line(lineGeom, lineMat));

            const label = createLabel(p.name, "#9ea7e5");
            label.position.set(x + 0.5, 0.2, z + 0.5);
            scene.add(label);
        });
    }

    function createLabel(text, color) {
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 128;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({
            map: texture,
            depthTest: false,
        });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(4, 2, 1);
        return sprite;
    }

    // --- SHADOW ANIMATION ---
    let sunIndex = 0;
    function animateSun() {
        requestAnimationFrame(animateSun);

        const day = solstices[currentDayIndex];

        const pos = sunPositionSolstice(day.month, day.day, currentHour);

        sunLight.position.set(pos.x, pos.y, pos.z);
        sunLight.target.position.set(0, 0, 0);
        scene.add(sunLight.target);

        currentHour += 0.05;
        if (currentHour > 18) {
            currentHour = 6;
            currentDayIndex = (currentDayIndex + 1) % solstices.length;
        }

        renderer.render(scene, camera);
    }

    function sunPositionSolstice(month, day, hour) {
        const deg2rad = Math.PI / 180;
        const latRad = latitude * deg2rad;

        const decl =
            23.44 * Math.sin((2 * Math.PI * (284 + day)) / 365) * deg2rad;

        const H = ((hour - 12) / 12) * Math.PI;

        const altitude = Math.asin(
            Math.sin(latRad) * Math.sin(decl) +
                Math.cos(latRad) * Math.cos(decl) * Math.cos(H),
        );

        const azimuth = Math.atan2(
            -Math.sin(H),
            Math.tan(decl) * Math.cos(latRad) - Math.sin(latRad) * Math.cos(H),
        );

        const r = 50;
        const x = r * Math.cos(altitude) * Math.sin(azimuth);
        const y = r * Math.sin(altitude);
        const z = r * Math.cos(altitude) * Math.cos(azimuth);

        return { x, y, z };
    }

    onMount(() => {
        initScene();
        animateSun();
    });

    function onResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
</script>

<div bind:this={container} style="width:100%; height:100vh;"></div>
