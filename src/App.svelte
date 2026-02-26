<script>
  import { onMount } from "svelte";
  import Papa from "papaparse";

  import ScrollGlobe from "./components/ScrollGlobe.svelte";
  import Effemeridi from "./components/effemeridi.svelte";
  import SolarObservatory from "./components/SolarObservatory.svelte";
  import rawData from "./csv/stars.csv?raw";

  let effemeridi = [];

  let globeSection;
  let globeStart = 0;

  onMount(() => {
    effemeridi = Papa.parse(rawData, {
      header: true,
      skipEmptyLines: true,
      comments: "#",
    }).data;

    globeStart = globeSection.offsetTop;
  });
</script>

<div class="header-chapter mob">
  <p>
    Este projeto imagina explorar como a arquitetura rural tradicional pode
    dialogar com o céu noturno, transformando a observação das estrelas em um
    elemento estrutural e ritual do habitar
  </p>
</div>
<div class="header-chapter">
  <h2>Arquitetura que respira vento e observa constelações</h2>
</div>
<div class="header-chapter">
  <h2>Habitar ao ritmo do céu</h2>
</div>

<div class="chapter ottanta" style="border-bottom: #9ea7e5 1px solid;">
  <p>
    Inspirado nas práticas e pesquisas sobre astronomia cultural do <a
      href="https://observatorioseichu.com.br/"
      target="_blank">Observatório Astronômico Seichú</a
    >, juntamente com a artista e astrônoma indígena Maybí Machacalis, e à
    arquitetura, design e planejamento rural ecológico da
    <a href="https://nayalves.com/" target="_blank">Nay Alves</a>, este trabalho
    relaciona as orientações, os princípios bioclimáticos e as tipologias
    espaciais da casa rural tradicional com as formas como a tradição
    Tupi-Guarani observa e nomeia as constelações, marcando o tempo e as
    estações de acordo com os movimentos do céu. A orientação bioclimática
    tradicional integra-se com a cosmopercepção cultural do céu.
  </p>
  <h3>
    Costurando a estratificação cultural entre a arquitetura colonial e a
    cultura indígena (estelar)
  </h3>
  <p>
    As casas rurais tradicionais da Colônia de Una derivam da cultura material
    colonial e do século XIX, enquanto as referências celestes se inspiram no
    conhecimento astronômico dos povos Tupi-Guarani, que habitavam a faixa
    costeira séculos antes da chegada dos europeus. A combinação no projeto não
    pretende representar uma continuidade histórica direta, mas sim um diálogo
    simbólico entre a arquitetura tradicional e os conhecimentos ancestrais.
  </p>
</div>

<div class="header-chapter" style="border-bottom: none;">
  <h3>Kûarasy Ra' angaba.<br />Marcar o Sol, Orientar a Casa</h3>
  <p>
    O Kûarasy Ra'angaba é um dispositivo de leitura solar: acompanha a variação
    das sombras ao longo do ano, marcando solstícios, equinócios e a passagem
    zenital do Sol. Tecnologia milenar dos povos Tupi-Guarani, hoje reativada em
    <a href="https://observatorioseichu.com.br/oficinas/" target="_blank"
      >oficinas do Observatório Astronômico Seichú</a
    >, constitui uma forma construída de orientação que integra céu, corpo e
    território. Assim como a arquitetura bioclimática utiliza o percurso solar
    para definir aberturas, proteções e ventilações, o observatório solar é um
    instrumento que organiza o espaço a partir do movimento do céu. Este projeto
    prolonga essa lógica para o período noturno, traduzindo os arcos estelares
    das constelações Tupi-Guarani em dispositivos espaciais da casa rural.
  </p>

  <!--   
  <button
    >Agende uma Oficina Kûarasy Ra’angaba – Observatório Solar Indígena. Clique
    aqui</button
  >
 -->
</div>

<SolarObservatory />

<div class="header-chapter">
  <h3>órbitas que desenham a casa</h3>
</div>
<div class="header-chapter">
  <p>
    As constelações Tupi-Guarani não são aqui representações simbólicas, mas
    trajetórias calculadas a partir da ascensão reta e da declinação,
    convertidas em altitude e azimute para a latitude da Colônia de Una, Bahia.
    Entre as 18h e as 6h, cada estrela descreve um arco no céu; esses arcos
    tornam-se diagramas espaciais. O scroll organiza o tempo como estação: março
    revela a Pata da Ema ao sudeste; maio eleva o Jabuti ao nordeste; dezembro
    traz o Homem Velho emergindo do horizonte leste. Cada movimento sugere um
    tipo de abertura (janela alta, varanda profunda, pátio interno, abertura
    zenital), como dispositivos de enquadramento do firmamento. A ventilação
    cruzada, a orientação solar e os vazios internos dialogam com as órbitas
    noturnas, integrando arquitetura tradicional e astronomia cultural.

    <br /><br />
    Os cálculos das órbitas das constelações assumem um horizonte livre: relevos
    ou edifícios com até 5 m de altura devem estar a pelo menos 500 m do observador
    para que o horizonte aparente permaneça coerente e os dados continuem confiáveis
    para a análise astronômica. Portanto, é preferível um terreno aberto, levemente
    elevado em direção ao sudoeste, com livre acesso visual ao nordeste e ao sul.
    Uma localização em uma colina baixa com vista livre para o sul e sudoeste permite
    combinar ventilação natural e observação noturna.

    <br /><br />
    Colônia de Una, Bahia, apesar de não ser um local astronômico com visibilidade
    estelar ideal, oferece condições de céu noturno significativamente melhores do
    que as áreas urbanas para a observação das constelações incluídas no projeto.
    Essas condições se prestam a ser parte integrante do projeto arquitetônico.
  </p>
</div>

<div class="globe-section" bind:this={globeSection}>
  <ScrollGlobe {globeStart} />
</div>

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

<div class="header-chapter">
  <h3>Diagrama sinóptico com as efemérides estelares</h3>
</div>
<div class="header-chapter" style="margin-bottom: 5em;">
  <p>
    Para cada constelação, a ascensão reta e a declinação são convertidas em
    altitude e azimute em relação às coordenadas de Colônia de Una, Bahia, na
    data de suas efemérides. O sistema identifica o horário noturno em que toda
    a constelação ultrapassa o limite mínimo de visibilidade acima do horizonte,
    garantindo a coerência com as condições observáveis reais. O resultado é um
    quadro comparativo que permite verificar a altura relativa das constelações
    (baixa, média, alta); comparar os azimutes de ascensão e posição culminante;
    ler as diferenças sazonais no mesmo sistema espacial; traduzir os vetores
    estelares em orientações arquitetônicas.
  </p>
</div>

<Effemeridi />

<div class="title-block">A luz das estrelas no projeto arquitetônico</div>

<style>
  button {
    background: #9ea7e5;
    color: #020414;
  }
  button:hover {
    background: #020414;
    color: #9ea7e5;
    border-color: #9ea7e5;
  }

  .header-chapter {
    width: 100vw;
    padding: 0 4em;
    color: #9ea7e5;
    font-size: 0.95rem;
    font-family: "Gabarito", sans-serif;
    border-bottom: #9ea7e5 1px solid;
    font-weight: 200;
    line-height: 1.4;
  }
  .header-chapter p {
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
  .header-chapter h2 {
    font-size: 4em;
    text-transform: uppercase;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-fill-color: #ffffff00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #9ea7e5;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }
  .header-chapter h3 {
    font-size: 2.8em;
    text-transform: uppercase;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-fill-color: #ffffff00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #9ea7e5;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }

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
  .chapter h3 {
    font-size: 2.8em;
    text-transform: uppercase;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-fill-color: #ffffff00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #9ea7e5;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
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

  .mini {
    height: 30vh;
  }

  .ottanta {
    height: 80vh;
  }

  @media (max-width: 768px) {
    .header-chapter h2 {
      font-size: 2em;
    }

    .header-chapter h3 {
      font-size: 1.5em;
    }

    .chapter h3 {
      font-size: 1.5em;
    }

    .mini {
      height: 80vh;
    }

    .mob {
      font-size: 0.8em;
    }

    .title-block {
      font-size: 1.1em;
      line-height: 1;
      padding: 10px 0;
      background-color: #020414;
    }

    .ottanta {
      height: unset;
    }
  }
</style>
