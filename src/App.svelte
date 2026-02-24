<script>
  import { onMount } from "svelte";
  import Papa from "papaparse";

  import ScrollGlobe from "./components/ScrollGlobe.svelte";
  import Effemeridi from "./components/effemeridi.svelte";
  import rawData from "./csv/stars.csv?raw";

  let effemeridi = [];

  onMount(() => {
    effemeridi = Papa.parse(rawData, {
      header: true,
      skipEmptyLines: true,
      comments: "#",
    }).data;
  });
</script>

<ScrollGlobe />

<div class="chapter">
  <p>
    As constelações aqui apresentadas correspondem a uma seleção específica
    dentro de um universo cosmológico muito mais amplo, entre povos de matriz
    Tupi-Guarani. Esta escolha não pretende esgotar nem representar
    integralmente tais sistemas de conhecimento, mas sim estabelecer um recorte
    coerente com o contexto geográfico de Colônia de Una, Bahia, e com as
    estratégias arquitetônicas exploradas no projeto. Reconhece-se que sistemas
    cosmológicos indígenas constituem patrimônios culturais vivos, profundamente
    enraizados em territórios, línguas e práticas coletivas, cuja profundidade
    ultrapassa o âmbito desta investigação espacial. A sua transposição para o
    campo do projeto espacial implica inevitavelmente um deslocamento de
    sentido. O projeto busca dialogar com esse saber de forma respeitosa,
    entendendo-o como referência cultural viva. O projeto não reivindica
    autoridade sobre tais saberes, nem pretende fixá-los como repertório formal.
  </p>
</div>

<div class="chapter">
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Constelação</th>
          <th>Estrelas</th>
        </tr>
      </thead>
      <tbody>
        {#each effemeridi as e}
          <tr>
            <td>{e.constellation}</td>
            <td>{e.star}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p>
      <br />Copyright (C) 2025
      <a href="https://observatorioseichu.com.br/" target="_blank"
        >Observatório Astronômico Seichú</a
      >. License: CC BY-NC 4.0 (Attribution-NonCommercial)
    </p>
  </div>
</div>

<Effemeridi />

<div class="title-block">A luz das estrelas no projeto arquitetônico</div>

<style>
  .chapter {
    margin: 5em 0;
    width: 100vw;
    padding: 3em;
    color: #9ea7e5;
    font-size: 0.95rem;
    font-family: "Gabarito", sans-serif;
    font-weight: 200;
    line-height: 1.6;
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
    padding: 0 3em 3em 3em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    color: #9ea7e5;
    font-family: "Gabarito", sans-serif;
    font-size: 0.8em;
    font-weight: 200;
  }

  th,
  td {
    padding: 0.5em 1em;
    border-bottom: 1px solid #8e8b8b50;
    text-align: left;
  }

  th {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .title-block {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 24px;
    background-color: #02041460;
    color: #9ea7e5;
    font-size: 1.4rem;
    font-family: "Gabarito", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 20;
    border-top: 1px solid #8e8b8b50;
  }
</style>
