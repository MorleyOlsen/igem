<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue"

</script>




<template>
    <div>
        <Navbar color="#e5a8b8" />
    </div>

    <PageText poster="https://static.igem.wiki/teams/4614/wiki/description/home/attributions.png" secondcolor="#e1d6da" maincolor="#e5a8b8">
        <div class="row mt-4">
          <h1>Sponsors</h1>
<!-- <h2>Bing AI</h2> -->
<p><strong>Bing AI</strong> Bing AI provided us with some ideas and translations for our modeling part writing, which helped us to better explain our project goals, methods and results. Bing AI also provided us with some useful references and links, which made our modeling work more grounded.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-newb.jpg" width="200"/> </div>
<!-- <h2>MATLAB</h2> -->
<p><strong>MATLAB</strong>. MATLAB assisted us in establishing the metabolic pathway model of silkification, the silicification effect analysis model, and the cellular automaton model of silkification initiation. These models are based on our laboratory data and assumptions, and are simulated and optimized by MATLAB and its simbiology module, which provide theoretical support and prediction for our experimental design and result analysis.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-mat.jpg" width="200"/> </div>
<!-- <h2>Python</h2> -->
<p><strong>Python</strong>. Python assisted in the establishment and visualization of the cellular automaton model of silkification initiation.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-py.jpg" width="200"/> </div>
<!-- <h2>COMSOL</h2> -->
<p><strong>COMSOL</strong>.  COMSOL assisted us in the simulation of material properties, including acoustics, micro-mechanics and heat and humidity transfer simulation. These simulations are based on our laboratory data and parameters, and are modeled and solved by COMSOL’s multiphysics coupling function, which provide quantitative and qualitative basis and guidance for our material performance evaluation.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-com.png" width="200"/> </div>
<!-- <h2>ChatGPT, version GPT-3.5 (from OpenAI)</h2> -->
<p><strong>ChatGPT, version GPT-3.5 (from OpenAI). </strong> We used ChatGPT to ask for writing ideas, and ChatGPT also provided us with text translation.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-gpt.png" width="200"/> </div>
<!-- <h2>SnapGene</h2> -->
<p><strong>SnapGene. </strong> SnapGene provided software support for plasmid design, helping us optimize the sequence and structure of plasmids, and providing visualization and documentation functions for plasmids, making it easy for us to record and share plasmid information.
</p>
  <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/attribution/c-snap.jpg" width="200"/> </div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>Pre-iGEMers</h1>
<p>The Pre-iGEMers are students selected for CAU-China 2024, who are going to learn about iGEM and taking laboratory training during this year. Then they will decide whether they want to stay in the iGEM team next year.</p>
<p>Wang Yinuo, Ma Zhaoqi, and Pan Mingyu are our Pre-iGEMers this year. They not only participated in the brainstorming sessions for our project but also, under the guidance of our experimental and modeling team members, learned and contributed to some wet lab experiments and modeling work.</p>

<p><center><img src='https://static.igem.wiki/teams/4614/wiki/attribution/preigemers.png' width='700' alt='' /></center></p>
<p><center><strong>Pre-iGEMers: From left to right, they are Wang Yinuo, Ma Zhaoqi, and Pan Mingyu</strong></center></p>


<p><center><img src='https://static.igem.wiki/teams/4614/wiki/attribution/wetlabtrain.png' width="700" alt='' /></center></p>
<p><center><strong>Pre-iGEMers doing wet lab work</strong></center></p>

<p><strong>Wang Yinuo said:</strong> </p>
<p>Hello, everyone. I am Pre-iGEMer Wang Yinuo. I want to express my gratitude for the guidance from our seniors. I&#39;ve had a wonderful year with all of you!</p>
<p><strong>Ma Zhaoqi said:</strong> </p>
<p>I&#39;m delighted to participate in the iGEM project as a Pre-iGEMer. Under the guidance of our exceptional team members, I have gained valuable experience. By attending team meetings, I have gained insights into the overall project framework and direction. Through training in experimental techniques, I have learned laboratory operations and the entire workflow, all while experiencing the joy of the process and strengthening my determination.</p>
<p><strong>Pan Mingyu said:</strong> </p>
<p>I am Pan Mingyu. I am extremely fortunate to be a Pre-iGEMer this year. It has been a great journey growing alongside our seniors and witnessing the continuous growth of CAU-China iGEM team. Throughout this year as a pre-iGEMer, I have continuously learned experimental skills and the spirit of competition from our seniors. Besides participating in competitions, I have also joined iGEM&#39;s seniors in teaching activities in rural middle schools, spreading biological knowledge to younger students. iGEM has not only enriched my knowledge but also allowed me to experience the spirit of perseverance, bravery, and innovation in scientific research. May CAU-China iGEM continue to grow stronger!</p>
<h1>Attribution form</h1>
  <iframe
    style='width: 100%'
    id="igem-attribution-form"
    src="https://attributions.igem.org?team=CAU-China&year=2023"
  >
  </iframe>
</div>

  </PageText>
</template>

<style scoped>
.note{
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* .toc h1{
  font-size: 2em;
} */
</style>

<script type="text/javascript">
    window.addEventListener('message', function (e) {
      const {type, data} = JSON.parse(e.data);
      if (type === 'igem-attribution-form') {
        const element = document.getElementById('igem-attribution-form')
        element.style.height = data + 50 +'px'
      }
    });
  </script>