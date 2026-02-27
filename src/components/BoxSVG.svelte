<script>
    import ConstellationDiagram from "../lib/ConstellationDiagram.svelte";
    import KeyLegend from "./KeyLegend.svelte";

    const constellations = {
        "Pata da Ema (Nhandu pysá)": {
            stars: ["α Cru", "β Cru", "γ Cru", "δ Cru"],
            azMin: 60,
            azMax: 300,
            date: "2026-03-28",
            windAzMin: 45,
            windAzMax: 135,
        },
        "Colibri (Mainamy)": {
            stars: ["γ Crv", "α Crv", "β Crv", "δ Crv", "ε Crv"],
            azMin: 50,
            azMax: 310,
            date: "2026-03-31",
            windAzMin: 45,
            windAzMax: 135,
        },
        "Jabuti (Zauxihu Ragapaw)": {
            stars: [
                "α CrB",
                "β CrB",
                "γ CrB",
                "δ CrB",
                "ε CrB",
                "ι CrB",
                "θ CrB",
            ],
            azMin: 50,
            azMax: 310,
            date: "2026-05-18",
            windAzMin: 45,
            windAzMax: 135,
        },
        "Ema (Guirá Nhandú)": {
            stars: [
                "α Cen",
                "β Cen",
                "α Mus",
                "β Cir",
                "β TrA",
                "ε¹ Ara",
                "α Ara",
                "θ Sco",
                "γ Sco",
                "α Sco",
                "δ Sco",
                "ζ Lup",
                "γ Lup",
            ],
            azMin: 60,
            azMax: 320,
            date: "2026-05-28",
            windAzMin: 45,
            windAzMax: 135,
        },
        "Homem Velho (Tuiváe)": {
            stars: [
                "α Ori",
                "γ Ori",
                "β Ori",
                "δ Ori",
                "ε Ori",
                "ζ Ori",
                "κ Ori",
                "π³ Ori",
                "π⁵ Ori",
                "15 Ori",
                "β Eri",
                "α Tau",
                "M45",
            ],
            azMin: 50,
            azMax: 310,
            date: "2026-12-06",
            windAzMin: 45,
            windAzMax: 135,
        },
        "Plêiades (Seichú)": {
            stars: [
                "16 Tau",
                "17 Tau",
                "19 Tau",
                "20 Tau",
                "21 Tau",
                "23 Tau",
                "25 Tau",
            ],
            azMin: 70,
            azMax: 290,
            date: "2026-11-18",
            windAzMin: 45,
            windAzMax: 135,
        },
    };
</script>

<main class="grid-container">
    {#each Object.entries(constellations) as [name, cfg]}
        <div class="constellation-card">
            <p class="constellation-name">{name}</p>
            <ConstellationDiagram
                azMin={cfg.azMin}
                azMax={cfg.azMax}
                date={cfg.date}
                windAzMin={cfg.windAzMin}
                windAzMax={cfg.windAzMax}
            />
        </div>
    {/each}
    <KeyLegend />
</main>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1rem;
    }

    .constellation-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border: #9ea7e5 1px solid;
    }

    .constellation-name {
        color: #9ea7e5;
        font-family: "Gabarito", sans-serif;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        text-align: center;
        text-transform: uppercase;
    }

    main p {
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
    }
</style>
