<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue";

</script>

<template>
    <div>
        <Navbar color="#fef5d8" />
    </div>
    <PageText maincolor="#f7d57e" secondcolor="#fef5d8" class="note" poster="https://static.igem.wiki/teams/4614/wiki/description/home/contribution.png">
    <div class="note">
        <h1>Parts</h1>
<p>During the experiment, we used some existing parts and obtained more data about these parts, which we would be honour to share with future igem teams.</p>

<p><b>
    <a href='http://parts.igem.org/Part:BBa_K1040001'>Part:BBa K1040001 </a>: <em>sulA</em>,the gene encoding one of the protein lead filamentation of <em>E. coli</em>.
</b></p>
<p>The original part lacked information and had no characterization to it. Through experiments, we have obtained conditions and results of SulA expression in <em>E. coli</em>.</p>

<p><b>
    <a href='http://parts.igem.org/Part:BBa_K108005'>Part:BBa K108005 </a>: <em>flgH</em>, the gene encoding one of component protein in the L ring of flagella.
</b></p>
<p>The original part lacked a description of its function, we develop FlgH as a new carrier protein and use its characteristic of being relatively fixed on the cell wall to achieve our special requirements for the spatial location of the display protein.</p>

<p><b>
    <a href='http://parts.igem.org/Part:BBa_M36515'>Part:BBa M36515 </a>: R5, the gene encoding one of protein lead silicification of bacteria.
</b></p>
<p>The original part contained only the fundamentals, based on the literature, we optimized this sequence and supplemented some experimental records of optimized sequences.</p>
<h3><a href='http://parts.igem.org/Part:BBa_K1040001'>Part:BBa K1040001 </a></h3>
<b>
<p>Biology</p>
</b>
<p>SulA is an endogenous cell division inhibitor present in <em>E. coli</em><sup>[1]</sup>. It is transcriptionally regulated by LexA and its expression is rapidly induced upon DNA damage, effectively halting cytoplasmic division. The inhibition of cell division by SulA occurs through direct interaction with the cell division protein FtsZ. FtsZ is a homologue of tubulin that forms a Z-ring at the middle of the cell, where other division proteins associate to facilitate cytoplasmic division. The disruption of FtsZ ring formation by SulA leads to the formation of elongated filaments, allowing the cells to replicate DNA but unable to undergo division<sup>[2]</sup>. In projects, SulA was efficiently induced under the T7 promoter to induce the filamentous phenotype of <em>E. coli</em>.</p>
<p><b>
Improvement
</b></p>
<p>We used this part in filamentation module. We inserted it under the T7 promoter of the pET32 vector and transferred the recombinant plasmid into <em>E. coli</em> (BL21) for induction of SulA production and filamentation at specific time points using IPTG.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/wiki-safety/sh-sula.png" width = 600 /> </div>
<center><b>
<p>Fig.1 Including Figures A and B. Figure A represents the control group, while Figure B shows the results of the SulA-induced filamentation experiment. IPTG was added to a final concentration of 20 mg/ml and chassis had been induced for over 10 hours.</p>
</b></center>
<p>The length of most cells exceed 20 microns, demonstrating the filamentation effect of SulA.</p>
<b>
<p>
<a href='http://parts.igem.org/Part:BBa_K108005' target='_blank' >Part:BBa K108005</a></p>
</b>
<b>
<p>Improvement</p>
</b>
<p>The FlgH protomer in the L ring has an oblique arrow-like shape and consists of a long N-terminal loop (LN), six central β strands (β1–β6), and three α helices (α1–α3)<sup>[3]</sup>.
We are trying to develop FlgH as a new carrier protein and use its characteristic of being relatively fixed on the cell wall to achieve our special requirements for the spatial location of the display protein.
In order to exert the display function, we chose to add the passenger protein to a special middle region of FlgH, and the two were fused through a connecting peptide (<a href='http://parts.igem.org/Part:BBa_K4614106'>BBa_K4614106</a>).
The α1 region of FlgH is exposed on the OM and is a highly variable region<sup>[3]</sup>, which is the most suitable region for the insertion of the passenger protein. After considering reducing or not interfering with the interaction between monomeric FlgH<sup>[3]</sup>and the interaction between FlgH and LPS<sup>[4]</sup>, we chose to insert the passenger protein between T108 and V109.
We verify cross-linking in two ways: by measuring optical density 600 and microscopy. Limited by our time and energy, we did not specifically characterize whether FlgH successfully displays passenger proteins. However, based on the results of our cross-linking characterization experiments, we believe that FlgH has successfully displayed the passenger protein on the surface of the cell (Fig. 3). For details, please refer to <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a>. Also, due to the cross-linking between bacteria, the buoyancy increases, and after standing for a period of time, fewer bacteria settle down, and the remaining rate of bacteria is greater (Fig3). For details, please refer to <a href="http://parts.igem.org/Part:BBa_K4614100">BBa_K4614100</a></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/parts-jl/od.png" width="500" class="centered-image"></div>
<center><b>
<p>Fig.2 Quantitative verification of adherence of bacteria.</p>
</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/parts-jl/jl-2.png" width="500" class="centered-image"></div>
<center><b>
<p>Fig.3 Observation of bacteria cross-linking by laser microscopy (1000×).</p>
</b></center>
<h3><a href='http://parts.igem.org/Part:BBa_M36515'>Part:BBa M36515 </a></h3>
<b>
<p>Improvement</p>
</b>
<p>In this part, the principle of R5 as TEOS hydrolysis and silica aggregation lies in the positive electricity of its Lys catalytic group <sup>[6]</sup>, in order to verify the rationality of this principle, we try to use acid instead of R5 to provide positive electric groups, we use different concentrations of hydrochloric acid and oxalic acid, add different proportions of TEOS, observe and record experimental phenomena.</p>
<b>
<p>1）Hydrochloric acid</p>
</b>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/teos-table.png" width="700"   class="centered-image"></div>
<center><b>
<p>Fig.4 Silicification system of hydrochloric acid</p>
</b></center>
<div align="center"> ​<img src="https://static.igem.wiki/teams/4614/wiki/result/si-3fixed.png" width="400"   class="centered-image"></div>
<center><b>
<p>Fig.5 Silicification results of hydrochloric acid</p>
</b></center>
<p>In the silicification experiment of hydrochloric acid, after mixing according to the above ratio for 16 hours, TEOS is hydrolyzed to form silica gel.</p>
<b>
<p>2) Oxalic acid</p>
</b>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/teos-oxalic.png" width="700"   class="centered-image"></div>
<center><b>
<p>Fig.6 Silicification system of oxalic acid</p>
</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/3-kuai-gui-jiao.jpg" width="280"   class="centered-image"></div>
<center><b>
<p>Fig.7 Silicification results of oxalic acid（after 72h）</p>
</b></center>
<div align="center"> ​<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/lingwai3kuaiguijiao.jpg" width="250"   class="centered-image"></div>
<center><b>
<p>Fig.8 Silicification results of oxalic acid(after 84h)</p>
</b>​</center>
<p>In the oxalic acid-catalyzed silicification experiment, after 72 h of mixing the system, TEOS in group 1 was catalyzed to generate silica gel, and TEOS of 2 and 3 was catalyzed to generate silica gel after 84 hours.</p>
<p>Based on the above results, we justify the principle of R5 silicification to a certain extent.
   <br/></p>
<p>Next, we constructed an expression vector of R5 and its surface display carrier protein IPN fusion protein, and induced expression, and after reviewing the literature, we selected to induce 37 h at IPTG 37°C at a final concentration of 1.0 ug/mL in the logarithmic phase <sup>[5]</sup>, disrupted the bacteria, and the supernatant and precipitation of the cell disruption solution were Western blotting, which verified the expression of the target protein.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/wb.png" width="500"   class="centered-image"></div>
  <br/>
<center><b>
<p>Fig.9 Western blotting development results of bacterial whole protein extraction</p>
</b></center>
<p>After that, we build a model to guide the silicification time to a certain extent according to the silica concentration on the surface of the bacteria <sup>[7]</sup>. According to the results, it can be seen that within 48 iterations, the silicon concentration diffuses rapidly, and with only 30% of the catalytic center, the silicon concentration in the reaction plane can basically reach saturation. In the experiment, we chose the catalytic time of 48 hours, and the actual silicon concentration iteration will definitely be shorter than one hour. This model can explain to a certain extent that when the silicification time is reached, silica has been relatively fully precipitated on the surface of <em>E. coli</em>.
     <br/></p>
<p>Finally, we silicified the mutant strains using the method of silicification of bacteria obtained from the literature, and the control group also performed the same treatment, we collected the bacteria after silicification, observed the bacteria using transmission electron microscopy, and obtained the silicification effect of R5 under the silicification conditions we used.</p>
<p>&nbsp;</p>
<h3> </h3>
<p><b>
References 
</b></p>
<p>[1]Schoemaker, J M et al. “Regulation of cell division in Escherichia coli: SOS induction and cellular location of the sulA protein, a key to lon-associated filamentation and death.” Journal of bacteriology vol. 158,2 (1984): 551-61. doi:10.1128/jb.158.2.551-561.1984</p>
<p>[2]Mukherjee, A et al. “Inhibition of FtsZ polymerization by SulA, an inhibitor of septation in Escherichia coli.” Proceedings of the National Academy of Sciences of the United States of America vol. 95,6 (1998): 2885-90. doi:10.1073/pnas.95.6.2885.</p>
<p>[3] Hatlem, Daniel et al. “Catching a SPY: Using the SpyCatcher-SpyTag and Related Systems for Labeling and Localizing Bacterial Proteins.” International journal of molecular sciences vol. 20,9 (2019): 1-10. doi:10.3390/ijms20092129.</p>
<p>[4] Kozlowski, Mark T et al. “Genetically Programmable Microbial Assembly.” ACS synthetic biology vol. 10,6 (2021): 1351-1359. doi:10.1021/acssynbio.0c00616.</p>
<p>[5]Xue, S.-H. (2017). Research on synthesis of functional inorganic materials based on bacterial surface display technology [Doctoral dissertation, Wuhan University of Technology]</p>
<p>[6]Ping H , Poudel L , Xie H , Fang W , Zou Z , Zhai P , Wagermaier W , Fratzl P , Wang W , Wang H , O&#39;Reilly P , Ching WY , Fu Z . Synthesis of monodisperse rod-shaped silica particles through biotemplating of surface-functionalized bacteria. Nanoscale. 2020 Apr 30;12(16):8732-8741. doi: 10.1039/d0nr00669f. PMID: 32307501.</p>
<p>[7] Lee, L. J. (1989). Modeling and computer simulation of reactive processing. Comprehensive Polymer Science and Supplements, 20, 575-617. doi.org/10.1016/B978-0-08-096701-1.00238-X</p>
<p>&nbsp;</p>
    </div></PageText>
</template>

<style scoped>
.note{
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
a{
    text-decoration: none;
}
</style>