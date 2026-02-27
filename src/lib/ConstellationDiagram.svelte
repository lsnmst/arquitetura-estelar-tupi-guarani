<script>
    import { onMount } from "svelte";
    import { generateConstellationSVG } from "./generatesvg";

    export let azMin = 50;
    export let azMax = 310;
    export let windAzMin = 45;
    export let windAzMax = 135;
    export let date = "2026-01-01";

    let container;

    onMount(() => {
        container.innerHTML = generateConstellationSVG({
            azMin,
            azMax,
            date,
            windAzMin,
            windAzMax,
        });
    });
</script>

<div bind:this={container}></div>
