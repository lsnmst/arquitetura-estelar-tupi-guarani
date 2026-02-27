<script>
    import { onMount } from "svelte";
    import Papa from "papaparse";
    import { generateStarBackgroundSVG } from "../lib/BackgroundSVG.js";

    let svgContent = "";
    let width = 0;
    let height = 0;

    let starsData = [];
    let raOffset = 0;

    function animate() {
        raOffset += 0.02;

        svgContent = generateStarBackgroundSVG(
            starsData,
            width,
            height,
            raOffset,
        );

        requestAnimationFrame(animate);
    }

    onMount(async () => {
        width = window.innerWidth;
        height = window.innerHeight;

        console.log("WIDTH:", width);
        console.log("HEIGHT:", height);

        const res = await fetch("./csv/effemeridi.csv");
        const text = await res.text();

        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim(),
            complete: (results) => {
                console.log("Loaded rows raw:", results.data.length);

                console.log("FIRST ROW FULL OBJECT:");
                console.log(results.data[0]);

                console.log("KEYS:");
                console.log(Object.keys(results.data[0]));

                const normalized = results.data.map((row) => {
                    const cleanRow = {};

                    Object.keys(row).forEach((key) => {
                        cleanRow[key.trim()] = row[key];
                    });

                    return cleanRow;
                });

                const validStars = normalized.filter(
                    (r) => r.RA_hms?.trim() && r.Dec_dms?.trim(),
                );

                starsData = validStars;
                animate();

                console.log("Valid stars:", validStars.length);

                svgContent = generateStarBackgroundSVG(
                    validStars,
                    width,
                    height,
                );
            },
        });
    });
</script>

<div>
    {@html svgContent}
</div>
