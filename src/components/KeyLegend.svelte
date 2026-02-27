<script>
    // Dimensioni SVG
    const width = 300;
    const height = 120;
    const cx = 30; // punto di partenza dei simboli
    const spacingY = 30; // distanza verticale tra le linee
</script>

<svg {width} {height} xmlns="http://www.w3.org/2000/svg">
    <!-- Arco stellare -->
    <line
        x1={cx}
        y1={spacingY}
        x2={cx + 40}
        y2={spacingY}
        stroke="#aac2d2"
        stroke-width="3"
    />
    <text x={cx + 70} y={spacingY + 5} fill="#9ea7e5" font-size="14"
        >Arco estelar</text
    >

    <!-- Arco solare -->
    <line
        x1={cx}
        y1={spacingY * 2}
        x2={cx + 40}
        y2={spacingY * 2}
        stroke="#dac650"
        stroke-width="3"
    />
    <text x={cx + 70} y={spacingY * 2 + 5} fill="#9ea7e5" font-size="14"
        >Arco solar</text
    >

    <!-- Arco vento -->
    <line
        x1={cx}
        y1={spacingY * 3}
        x2={cx + 40}
        y2={spacingY * 3}
        stroke="#00aaff"
        stroke-width="2"
        stroke-dasharray="5,5"
    />
    <text x={cx + 70} y={spacingY * 3 + 5} fill="#9ea7e5" font-size="14"
        >Arco do vento</text
    ></svg
>

<style>
    svg {
        padding: 10px;
        color: #9ea7e5;
        font-family: "Gabarito", sans-serif;
        font-size: 1rem;
    }
</style>
