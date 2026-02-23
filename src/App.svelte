<script>
  import { onMount, tick } from "svelte";

  import PataDaEmaGlobe from "./components/PataDaEmaGlobe.svelte";
  import ScrollGlobe from "./components/ScrollGlobe.svelte";
  import EmaGlobe from "./components/EmaGlobe.svelte";
  import Effemeridi from "./components/effemeridi.svelte";
</script>

<ScrollGlobe />

<Effemeridi />

<div class="title-block">A luz das estrelas no projeto arquitetônico</div>

<style>
  .title-block {
    position: fixed;
    bottom: 20px;
    right: 20px;
    max-width: 30%; /* massimo 30% della larghezza viewport */
    height: auto;
    background-color: #02041460; /* sfondo leggermente trasparente */
    color: #9ea7e5; /* testo bianco */
    padding: 12px 16px;
    font-size: 2.2rem;
    font-family: "Gabarito", sans-serif;
    text-transform: uppercase;
    line-height: 1.1;
    z-index: 10; /* sopra la scena 3D */
    text-align: start;
    border-top: #8e8b8b 1px solid;
  }
</style>
