<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue";

</script>

<template>
    <div>
        <Navbar color="#83a6b9" />
    </div>
    <PageText secondcolor="#cadff0" maincolor="#83a6b9" class="note" poster="https://static.igem.wiki/teams/4614/wiki/description/home/design.png">    
    <div class="note">  
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>The goal: to create an entirely new biological material based on <i>E. coli</i>.</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	Our goal is to use <i>E. coli</i> to create a material that is inexpensive, environmentally friendly and has some excellent physical properties. Because <i>E. coli</i> individuals are so small, we try to make them filamentate  to increase their length and cross-link them using the SpyTag-SpyCatcher system. Finally, mimicking the natural silicification process of diatoms, bacterial cells underwent siliconization, ensuring project safety while enhancing mechanical strength. </p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Chioce of chassis: BL21(DE3)</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	<i>E. coli</i> is the most commonly used chassis bacteria in the field of synthetic biology, and relevant tools have been well developed, which has the advantage of easy gene editing. The research on the characteristics and efficient fermentation of <i>E. coli</i> is also more in-depth, which is convenient for large-scale production; In addition, <i>E. coli</i> is a common intestinal microorganism that is safe and harmless in most cases. In conclusion, we believe that <i>E. coli</i> has the potential to become an inexpensive, eco-friendly and excellent biological material.</p>
<p>​	We hope that chassis bacteria can complete the three pathways of filamentation, cross-linking, and siliconization as efficiently as possible, so we use efficient T7 promoters in some pathways. The chromosome of BL21(DE3) is integrated with the DE3 region of phage λ, which can express T7 phage RNA polymerase. Therefore, the BL21(DE3) strain is a good choice for efficient expression of genes cloned from expression vectors containing phage T7 promoters.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/description/junjun2.png" width="600"/> </div>

<center>
<p><b>
Fig. 1 <i>E. coli</i> has many advantages to be a great biological material
</b></p>
</center>

<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Detailed design</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	Our project consists of three pathways: filamentation, cross-linking, and siliconization. filamentation extends the cell, cross-linking forms the structure, and siliconization provides physical strength and guarantees safety.</p>
<h2>Filamentation</h2>
<p>&nbsp;</p>
<div align="center">
<p><img src="https://static.igem.wiki/teams/4614/wiki/description/sulatonglu.png" width = 400 /></p>
</div>

<center>
<p><b>
Fig.2 Genetic circuit for filamentation (<a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a>)
</b></p>
</center>

<p>​	We achieve filamentation by inhibiting bacterial division to lengthen the bacteria. </p>
<p>​	SulA is a small protein induced as part of the SOS response to DNA damage in <i>E. coli</i> . It binds to FtsZ, which is the major cytoskeletal protein involved in bacterial cell division, to block cell division.<sup> [1]</sup></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/description/2ae819c4745a736c41d56249fa2d518.png" width="600"/> </div>

<center>
<p><b>
Fig. 3 SulA binds to FtsZ to cause filamentation</b>  Adapted from article <sup>[2]</sup></p>
</center>

<p>​	PsrfA originated from Bacillus subtilis. The principle is that ComX released during bacterial growth accumulates in the environment, and when the concentration reaches a certain level, the signal transduction system composed of bicomponent protein ComP and ComA will be activated, and then the phosphorylated ComA will activate the PsrfA<sup>[3]</sup> promoter and start the expression of the corresponding gene. This system allows the engineering bacteria to To start filamentating only when its density reaches a certain degree, thus achieving automatic control.</p>
<h2>Cross-linking</h2>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spytag.png" width = 300 /></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/description/gugugugu.png" width = 600 /> </div>

<center>
<p><b>Fig. 4 Genetic circuit for cross-linking (<a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a>,<a href="http://parts.igem.org/Part:BBa_K4614117">BBa_K4614117</a>,<a href="http://parts.igem.org/Part:BBa_K4614107">BBa_K4614107</a>,<a href="http://parts.igem.org/Part:BBa_K4614108">BBa_K4614108</a>)
</b></p>
</center>

<p>​	We attempt to display SpyTag and SpyCatcher on the surface of chassis bacteria respectively, aiming this system to achieve cross-linking between bacteria to provide special structure. </p>
<p>​	The SpyCatcher-SpyTag system was developed by the Howarth laboratory based on the internal isopeptide bond of the CnaB2 domain of FbaB, a fibronectin-binding MSCRAMM and virulence factor of Streptococcus pyogenes<sup>[4]</sup>. The aspartic acid side chain in SpyTag can form isopeptide bonds with the lysine side chain of SpyCatcher.<sup>[5]</sup></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/description/spytagchaer.png" width = 600 /> </div>

<center>
<p><b>Fig. 5 SpyCatcher-SpyTag system<sup>[8]</sup></b>Generation, reaction and uses of SpyTag/SpyCatcher. (a) Cartoon of splitting CnaB2 into SpyCatcher (grey) and SpyTag (red). Residues forming the isopeptide are shown as sticks. (b) Environment of the isopeptide bond between Asp117 (carbons orange) and Lys31 (carbons yellow), facilitated by Glu77 (carbons grey). (c) Discussed applications of SpyTag/SpyCatcher. </p>
</center>

<p>​	To make the cross-linking more regular, some special proteins on the bacterial surface were fused with the SpyCatcher-SpyTag system for expression, so that the SpyCatcher-SpyTag system could be displayed on the bacterial surface.FlgH is the main component of the L ring of <i>E. coli</i> flagella, and a sequence on it is exposed to the outer membrane.<sup>[6]</sup> We expressed it by fusion with SpyTag. Since <i>E. coli</i> is perigamous, SpyTag will randomly display on the surface of <i>E. coli</i>. For the chassis bacteria that demonstrate SpyTag, we will not express the Filamentation pathway, so that these engineering bacteria are like small magnetic balls in magnetic rod toys. Accordingly, SpyCatcher will be fused to another surface protein--- Wza, and these engineered bacteria will express the Filamentation pathway. Wza is an important component of <i>E. coli</i>&#39;s surface channel protein, which concentrates to the bacterial pole along with peptidoglycan as the bacteria grow, a process aided by the Filamentation pathway In this way, the engineered bacteria that express SpyCatcher form small rods in magnetic rod toys - only the two ends have magnetic forces. This property convince us that our engineering bacteria will form a relatively regular structure with large voids.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/description/.gif" width = 500 /> </div>

<center>
<p><b>
Fig. 6 Diagram of cross-linking</b> Bacteria expressing SpyTag (blue) are crosslinked to bacteria expressing SpyCatcher (orange).</p>
</center>

<p>​	We are also trying to introduce quorum sensing systems for automatic control. We use the plux-LuxR-LuxI system, LuxI is a synthase that converts SAM into a small molecule called AHL(acyl-homoserine lactone). LuxR is a constitutively expressed protein that can bind AHL. When bound to AHL it can stimulate transcription from the right hand lux promoter (pLuxR).The system can be easily manipulated to make cross-linking intelligent.</p>
<h2>Silicification</h2>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/si-miaodi.png" width = 400 /> </div>

<center>
<p><b>
Fig. 7 Genetic circuit for silicification (<a href="http://parts.igem.org/Part:BBa_K4614003">BBa_K4614003</a>)
</b></p>
</center>

<p>​	Finally, in order to make our materials mechanically strong by mimicking the natural silicification process of diatoms, we surface-displayed R5 on bacteria and added TEOS to them, so the bacterial cells underwent silicification process from the outside to the inside.</p>
<p>​	R5 is a silaffin-derived protein,  the catalytic effect of its Lys catalytic groups on TEOS hydrolysis and silica aggregation  achieves embedding of <i>E. coli</i> in TEOS silicification system. At this point, the R5 acts as a crystal nucleus, helping the silica particles to accumulate on both the surface and inside of the bacteria<sup>[7]</sup>. During this process, the engineered bacteria will become inactive, avoiding dangerous leakage into the environment.</p>
<p>​	We use INP encoded by Lank to display silaffin. INP is part of the ice nucleoprotein from <em>Pseudomonas syring</em> and considered to be the best carrier for displaying foreign proteins with large molecular weight and complex structure. It is localized on the cell membrane, and the C-terminal is expressed by fusion with R5, thus allowing R5 to be displayed outside the cell.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Implementation</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	As a new kind of biomaterial, silicones have been widely used. At the same time, we also provide some possible specific applications. In terms of sound-absorbing materials, we hope to use bacterial silicones as wall filling materials for the compartments of sick small animals in pet hospitals to create a quiet and comfortable environment for them and relieve their anxiety and pain.</p>
<p>​	We creatively use <em>E. coli</em> as a raw material to create a completely new biological material for the world. Our design provides a surprising way for the production of biomaterials: using microorganisms as materials, small amounts add up to obtain materials with unique microstructure and excellent properties.</p>
<p>​	We combine biological protection strategies with physical protection strategies to ensure biosafety. Appropriate amount of IPTG will be added to the medium to induce silicified pathway background expression, so that  the engineered bacteria will take advantage of the silicates found in nature, silicify themselves and commit suicide in a similar way to diatoms. In addition, we will produce in a relatively closed factory and dehydrate the silicides at 80 degrees Celsius to ensure that the engineered bacteria are completely killed.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>References</h1><div class="container"><div class="horizontal-line"></div></div>
<p>[1] Chen Y, Milam SL, Erickson HP. SulA inhibits assembly of FtsZ by a simple sequestration mechanism. Biochemistry. 2012 Apr 10;51(14):3100-9. doi: 10.1021/bi201669d. Epub 2012 Mar 28. PMID: 22432817; PMCID: PMC3518438.</p>
<p>[2]Huang J, Cao C, Lutkenhaus J. Interaction between FtsZ and inhibitors of cell division. J Bacteriol. 1996 Sep;178(17):5080-5. doi: 10.1128/jb.178.17.5080-5085.1996. PMID: 8752322; PMCID: PMC178301.</p>
<p>[3] Guan, C., W. Cui, J. Cheng, L. Zhou, J. Guo, X. Hu, G. Xiao, and Z. Zhou. &quot;Construction and Development of an Auto-Regulatory Gene Expression System in Bacillus Subtilis.&quot; Microb Cell Fact 14 (Sep 21 2015): 150. </p>
<p>[4] Hatlem, D.; Trunk, T.; Linke, D.; Leo, J.C. Catching a SPY: Using the SpyCatcher-SpyTag and Related Systems for Labeling and Localizing Bacterial Proteins. Int. J. Mol. Sci. 2019, 20, 2129. &lt;&gt;</p>
<p>[5] Zhang M, Zhang Y, Zhao P &amp; Wang H. (2023). Construction of bio-living material &quot;latch&quot; based on double-engineered bacteria and its application in intestinal retention in vivo. Journal of biological engineering (03), 1163-1174. The doi: 10.13345 / j.carol carroll jb. 220810.</p>
<p>[6] Camarena L, Dreyfus G. Living in a Foster Home: The Single Subpolar Flagellum Fla1 of Rhodobacter sphaeroides. Biomolecules. 2020; 10(5):774.</p>
<p>[7]  H. Ping, L. Poudel, H. Xie, W. Fang, Z. Zou, P. Zhai, W. Wagermaier, P. Fratzl, W. Wang, H. Wang, P. O&#39;Reilly, W. Y. Ching and Z. Fu，Synthesis of Monodisperse Rod-Shaped Silica Particles through Biotemplating of  Surface-Functionalized Bacteria，Nanoscale，2020，12(16)：8732-8741</p>
<p>[8] S. C. Reddington and M. Howarth，Secrets of a Covalent Interaction for Biomaterials and Biotechnology: Spytag and  Spycatcher，Curr Opin Chem Biol，2015，29：94-99</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
    </div>
    </PageText>

</template>

<style scoped>
.toc h2{
    padding-left:2em;
    font-size:1.1em;
}
.toc h1{
    font-size:1.2em
}

.note{
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container {
      display: flex;
      justify-content: center; 
      height: auto;
}
   
.horizontal-line {
      width: 100%;
      height: 5px; 
      background-color: #000;
}
</style>
