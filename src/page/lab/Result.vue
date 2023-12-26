<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue";
</script>

<template>
    <div>
        <Navbar color="#94ac9c" />
    </div>
    <PageText secondcolor="#edf6f5" maincolor="#94ac9c" class="note" poster="https://static.igem.wiki/teams/4614/wiki/description/home/result.png">
      
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Filamentation</h1><div class="container"><div class="horizontal-line"></div></div>
<p><b>The endogenous gene <em>sulA</em> in <em>E. coli</em> is subjected to controllable overexpression, resulting in the elongation of <em>Escherichia coli</em> as a building block for bio-materials.</b></p>
<h2>Work we have finished</h2>
<h3><b>Validation of the effect of antibiotics on filamentation.</b></h3>
<p>​	This section aimed to investigate the feasibility of using antibiotic-induced filamentation as a means to assess the effects of β-lactam antibiotics in <em>E. coli</em><sup>[1]</sup>. Additionally, it aimed to evaluate whether employing synthetic biology methods in subsequent stages of the project would be more advantageous.</p>
<p>​	Firstly, we enhanced the sample preparation method to facilitate the visualization of clear results and enable easy statistical analysis.Traditionally, the cultured bacterial suspension is directly spread onto glass slides, air-dried, and fixed for subsequent crystal violet staining. However, such slide preparation often results in high background noise and cluster formation of bacteria, making it difficult to count accurately and analyze them statistically. We discovered that removing the culture medium from the bacterial suspension and washing it with water effectively reduced the background and dispersed the cells. The procedure we employed for slide preparation is as follows:</p>
<p>​	1) Harvest 200-500 μl of the culture. </p>
<p>​	2) After centrifugation at 12,000 rpm for 30 seconds, discard the supernatant and resuspend the pellet with 1 mL ddH<sub>2</sub>O. <br/></p>
<p>​	3) After centrifugation at 12,000 rpm for 30 seconds, discard 900 μl of the supernatant, and resuspend the remaining 100 μl. Then, 10 μl of the mixture was transferred onto a glass slide, spread and fixed by gently heating with an alcohol lamp. </p>
<p>​	4) The slide was then stained with 200 μl crystal violet solution for 5 minutes, washed with ddH<sub>2</sub>O, air-dried, and then observed. </p>
<p>​	In Figure 1, a comparison is presented between the results obtained using the original method (without discarding the culture medium) and the improved one (discarding the culture medium and washing with ddH<sub>2</sub>O). The results clearly demonstrate the effectiveness of the optimized smear preparation method, as it significantly reduces background impurities, achieves appropriate cell density, and ensures even dispersion of the bacterial cells. This improvement in the smear-making process enhances the accuracy and reliability of subsequent analysis, such as counting and statistical evaluations.</p>

<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-improve.png" width = '550'/>
<p><b>Fig. 1 A comparison of the results before and after the method improvement. After the improvement, the background noise has significantly reduced.</b></p>
</div>

<p>​	With the optimized smear preparation method in place, we proceeded to investigate the impact of the β-lactam antibiotic ampicillin on bacterial cell length. <em>E. coli</em> K12 was cultured until the OD<sub>600</sub> reaches 0.6-0.8. Subsequently, ampicillin was added at a final concentration of 12.5 μg/ml, and the culture was incubated overnight at 37℃. The results depicted in Figure 2 were obtained from this experiment.</p>

<div align="center">
<img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-amp.png" width = '500'/>
<p><b>Fig. 2 The effect of antibiotic-induced filamentation.</b> (A) Microscopic images of the control group, cultures without . (B) Microscopic images of cultures treated with 12.5 μg/ml ampicillin. (C, D) Statistical analysis of filamentation lengths.</p>
</div>


<p>​	From the figure, it is evident that there is a notable increase in the proportion of filamentous bacteria and the average length of the cells. However, it is important to note that the antibiotic-induced filamentation did not achieve the desired structural effects in specific material. In order to further understand the mechanism of bacterial filamentation, it may be necessary to delve deeper into the underlying processes and explore the use of synthetic biology approaches for the rational design of filamentation modules. This could involve engineering specific genetic circuits or pathways to control and manipulate the filamentation process and achieve the desired structural effects in a more precise manner. By leveraging synthetic biology tools, such as genetic engineering and synthetic constructs, it may be possible to design tailored filamentation systems that can be applied to our material of interest.</p>
<p> <b>Testing the filamentation ability of the <em>sulA</em> gene.</b></p>
<p>​	Through literature research, it has been discovered that the SulA protein has the ability to induce filamentation in <em>E. coli</em> by with the FtsZ protein, which leads to the inhibition of Z-ring assembly, a crucial step in cell division[2]. Based on this knowledge, we attempted to overexpress the SulA protein in <em>E. coli</em> strain BL21(DE3). </p>
<p>​	We successfully inserted the <em>sulA</em> gene (<a href="http://parts.igem.org/Part:BBa_K4614201">BBa_K4614201</a>) into the prokaryotic expression vector pET-32a(+) using the ClonExpress II one-step cloning kit (Vazyme Biotechnology, China). In Figure 3, you can see the circuit that we have developed.</p>

<div align="center">
<p><img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/sihua-1.png" width = '400'/></p>
<p><b>Fig. 3 Genetic circuit we used to test <em>sulA</em>(<a href='http://parts.igem.org/Part:BBa_K4614204'> BBa_K4614204</a>).</b></p>
</div>

<p>​	Through colony PCR and sequencing verification, we successfully constructed this circuit. Next, we tested the filamentation efficiency of the circuit. Samples were taken at regular intervals under induction with 20 mM IPTG, and smears were prepared for observation. The results are shown in Fig. 4.</p>
<div align="center">
<p><img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/fig2.png" width = '500'/></p>
<p><b>Fig. 4 Testing the filamentation efficiency of the <em>sulA</em> gene.</b> (A) Microscopic image of bacteria before induction at 37°C. (B) Microscopic image of bacteria induced for 1 hour at 37°C. (C) Microscopic image of bacteria induced for 3 hours at 37°C. (D) Length statistics of the microscopic results under the above conditions.</p>
</div>

<p>​	From Fig. 4, it can be observed that with the progression of induction, both the length of and the proportion of filamentous bacteria increased gradually. However, the average length did not meet our expectations, as a significant portion of the bacteria did not undergo filamentation or elongation. Therefore, we attempted to culture the cells for a longer period of time to allow the full manifestation of the induction effect. The following figure shows the results of continuing to culture the above bacterial solution overnight. </p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/fig1.png" width = '500'/>
<p><b>Fig. 5 Microscopic results of overnight induction of filamentation.</b> (A) Microscopic results under 1000x magnification. (B) Microscopic results under 400x magnification. (C) Microscopic results under 100x magnification. (D) Microscopic results under 40x magnification.</p>
</div>

<p>​	According to Fig. 5, we obtained satisfactory results of filamentous bacteria as expected. Due to the intertwining nature of the filamentous bacteria, we didn’t have a good method to quantify them in large numbers. This experiment demonstrated the filamentous capability of the <em>sulA</em> gene.</p>
<h2><b>Work need to be improved</b></h2>
<h3><b>Construction of  the composite part P<em>srfA</em>-<em>sulA</em> (<a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a>).</b></h3>
<p>​	We aimed to achieve the initial goal of the filamentation module, which was to increase bacterial filament length as density increased.  We have discovered a density-responsive promoter, P<em>srfA</em>, that can be utilized in <em>E. coli</em>. Our intention is to insert P<em>srfA</em> upstream of the <em>sulA</em> gene to initiate the expression of the SulA protein. Fig. 1 shows the circuit we developed. </p>
<p>​	After completing the transformation of the recombinant plasmid and spreading it onto agar plates with corresponding antibiotic resistance, we observed the growth of a moss-like texture instead of individual bacterial colonies. At that time, we hypothesized that an abundance of positive colonies might have covered the entire plate, preventing the growth of distinct colonies. To address this, we diluted the bacterial culture to different concentrations before plating, but still did not observe the growth of individual colonies. We suspected that the expression of <em>sulA</em>, induced by P<em>srfA</em>, might have inhibited further bacterial division and thus suppressed the formation of single conlonies. Consequently, we resorted to directly scraping the moss-like growth for smear preparation. The results are displayed in  Fig. 6 , which revealed a significant proportion of filamentous bacteria.</p>

<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-ps.png" width = '400'/>
<p><b>Fig. 6 Microscopic results of recombinant strain <em>E.coli</em> BL21 harboring P<em>srfA</em>-<em>sulA</em> .</b></p>
</div>


<p>​	We did not have enough time for density response validation, but this suggested that the genetic circuit could be capable of inhibiting cell division and could contribute to filamentation. Further experimental verification is still required. </p>
<p>&nbsp;</p>
<h2><b>Work we have not done yet</b></h2>
<h3><b>Quantitative analysis of filamentous bacteria</b></h3>
<p>​	In the future, we will conduct quantitative analysis of the microscopic results of filamentous bacteria to accurately depict the filamentation ratio and length distribution, which will allow for a comprehensive characterization of the filamentation capability of <em>sulA</em> gene .</p>
<h2><b>Conclusion</b></h2>
<p>​	We successfully constructed and verified <em>sulA</em> (<a href="http://parts.igem.org/Part:BBa_K4614201">BBa_K4614201</a>). The filamentation phenotype we observed is very significant and is suitable for application in our bio-materials. However, the construction of the composite part P<em>srfA</em>-<em>sulA</em> (<a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a>) is still in progress. In the future, we hope to obtain more quantitative data and complete the construction of P<em>srfA-sulA</em> to achieve density-responsive bacterial filamentation.</p>
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Cross-linking</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	<b>SpyCatcher can form isopeptide bonds with SpyTag, and we hope to achieve cross-linking between bacteria through this system.</b> </p>
<h2>Work we have finished</h2>
<h3><b>Construction of</b> SpyTag-SpyCatcher system and verification of cross-linking <b>by</b> OD<sub>600</sub> determination</h3>
<p>​	To make the cross-linking more regular, SpyTag is fused with FlgH and SpyCatcher is fused with Wza, so that SpyTag will be displayed at the base of the flagella and SpyCatcher will be displayed at the poles of the bacteria.</p>
<p>​	Using the One Step Cloning II Kit (Vazyme Biotech, China) , we successfully constructed two gene circuits: T7-RBS-<em>flgH</em>-<em>spyatg</em>(<a href='http://parts.igem.org/Part:BBa_K4614102'>BBa_K4614102</a>) and T7-RBS-<em>WzA</em>-<em>spycatcher</em>(<a href='http://parts.igem.org/Part:BBa_K4614105'>BBa_K4614105</a>),  and transferred them into pET-30a(+) after sequencing.</p>

<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spytag.png" width = '400'/>
<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spycatcher.png" width = '400'/>
<p><b>Fig. 1 Genetic circuit we used to test <em>spytag</em> and <em>spycatcher</em>. (<a href='http://parts.igem.org/Part:BBa_K4614002'>BBa_K4614102</a> and <a href='http://parts.igem.org/Part:BBa_K4614105'> BBa_K4614105</a>)</b></p>
</div>
<p>​	The groupings areas follows: the experimental group (SpyTag + SpyCatcher), control group 1 (SpyTag), and control group 2 (SpyCatcher). The combination remains the same as in table 1. We have increased the sampling times to 0 minutes, 30 minutes, 60 minutes, 90 minutes, 120 minutes, 150 minutes, and 180 minutes.  We directly mix the bacterial cultures in cuvettes and let them stand. </p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab1.png" width = '500'/>
</div>
<b><div align="center"><p>Table 1. Combinations of bacterial suspensions of engineered bacteria we used in each group.</p> </div></b>
<div align="center">
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/s-engineering/success-1010.png" width = '500'/>
<br>
<b><p> Fig. 2 The experimental group has the highest remaining at the end</p></b>.
</div>
<p>​	The experimental group maintains a consistently higher remaining value than the other groups after 1.5 hours, which aligns with our expectations.  We confirmed cross-linking can happen, but we want to see more intuitive and cool results, and look forward to seeing where the cross-linking is located.</p>
<h3><b>Laser microscopy</b></h3>
<p>​	We hope to determine whether bacteria are cross-linked by direct observation.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spytag2.png" width = '400'/>
<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/iwpronhm.png" width = '400'/>
<p><b>Fig. 3 Genetic circuit for microscopy.</b><b>(<a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a>, <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a>,<a href="http://parts.igem.org/Part:BBa_K4614110"> BBa_K4614110</a>, <a href='http://parts.igem.org/Part:BBa_K4614111'>BBa_K4614111</a>)</b></p>
</div>
<p>​	We constructed the expression vector shown in the figure and introduced corresponding plasmids into the control group according to the table below. We named them A, B, C and D.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab2.png" width = '500'/>
<p><b>Table 2. Plasmids and genes induced into engineering bacteria.</b></p></div>
<p>​	Mix the two bacterial solutions in equal volumes according to the combination in Table 2 and shake well. Add 10 ul of the mixed solution onto the glass slide, immediately cover it with a coverslip, and observe under a laser microscope.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab3.png" width = '500'/>
<p><b>Table 3.  Combinations of bacterial suspensions of engineered bacteria we used in each group.</b></p></div>
<p>​	We tried many times to find the best way to make samples. We tried to change the production method and use bacteria to gather themselves instead of manual mixing. At the same time, the culture time of bacteria is extended.<br/></p>
<p>​	In the end we found that mixing the two bacterial solutions, waiting for 40 minutes, adding 10 microliters of water and waiting for 5 minutes was the most suitable. When smearing in this way, we could observe obvious cross-linked clumps in the experimental group, while none was observed in the control group.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/cl-8-19-fluorescence-microscopy-40.jpg" width = '550'/>
<p><b>Fig. 4 Fluorescence microscopy (400×).</b> In the experimental group (bacteria A and B), distinct clumps were observed, while in the other control group, the bacteria appeared to be randomly distributed.</p></div>
<p>&nbsp;</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/cl-8-19-fluorescence-microscopy-100.jpg" width ='550'/>
<p><b>Fig. 5 Fluorescence microscopy (1000×)</b>. In the experimental group (bacteria A and B), distinct clumps were observed, while in the other control group, the bacteria appeared to be randomly distributed. More details are shown in the image above.</p></div>
<p>​	We tried to add different volume water to make samples of gradient concentration. As a result, as the dilution multiple increases, the cross-linking group block became smaller.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/fig6.png" width = '550'/>
<p><b>Fig. 6 As the dilution multiple increases, the cross-linking group block becomes smaller</b>. 2x, 3x, and 4x dilution from left to right. The engineered bacteria used in these experiments are bacteria A and bacteria B in Table1.</p></div>
<p>​	After obtaining the best manufacturing sample conditions, we observed the samples through the laser scanning confocal microscope and obtained multiple 3D models of cross-linked structures (Fig. 5). </p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/movie-3ct-1.gif" width = '400'/>
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/movie-3ct-2.gif" width = '400'/>
<p><b>Fig. 7 3D models of cross-linked structures</b></p></div>
<p>​	The display protein we designed is functional. Through direct observation, we were surprised to find that the Wza did migrate to the pole of bacteria after filamentation. As is shown in the white circle in Fig. 8, filamentated bacteria A (red, expressing Wza-SpyCatcher) is cross-linked with bacteria B (green, expressing FlgH-SpyTag) only at its two poles.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/bar-fix.png" width = '600'/>
<p><b>Fig. 8 Wza migrates to the pole of bacteria after filamentation</b>. The left side shows the fluorescence microscope result, and the right side is the model diagram. The red rod represents the bacteria expressing SpyCatcher in filaments (bacteria A), and the green ball represents the bacteria expressing SpyTag (bacteria B).</p></div>
<h2>Work to improve</h2>
<h3>QS system</h3>
<p>​	We have also tried to introduce quorum sensing systems for automatic control.</p>
<p>​	We received the plasmid pUC-<em>LuxR-pLuxi</em>-sfGFP as a donation from ShanghaiTech_China. We have transformed this plasmid into <em>E. coli</em> DH5α. By adding AHL inducer to gradient concentrations, we observed differences in fluorescence intensity expression. </p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/fig8.png" width = '500'/>
<p><b>Fig. 9 The experiment of trial 3OC6HSL induction and fluorescence measurement in <em>E.coli</em> DH5α.</b></p></div>
<p>​	To build a fully self-regulating QS system, we constructed the pJUMP46-2A-<em>LuxR</em>-<em>pLux</em>-sfGFP circuit and  transformed it into <em>E.coli</em> BL21(DE3) so that we could evaluate whether the Lux system works in the new chassis bacteria based on fluorescence intensity. At the same time, we constructed another quorum-sensing regulatory pathway, pJUMP46-2A-<em>LuxI</em>. Importing this pathway into the chassis bacteria allows them to produce AHL inducer molecules on their own.</p>
<p>​	However, before we had the opportunity to mix the two batches of bacteria that carried each of these two pathways, pLux promoter leakage occurred. BL21(DE3) strains carrying pJUMP46-2A-<em>LuxR-pLuxi</em>-sfGFP expressed green fluorescent protein in LB solid medium without adding any exogenous inducers. </p>
<p>​	We hypothesized it was the copy number of the pJUMP46-2A plasmid which is significantly lower than that of the pUC plasmid that led to reduced LuxR expression. This interference with <em>E. coli</em>&#39;s native quorum sensing system resulted in leakage. Therefore, we planned to replace the LuxR promoter with a strong T7 promoter. Considering that the <em>LuxI</em> pathway may also face issues with insufficient expression, we planned to replace the <em>LuxI</em> promoter with the T7 promoter as well. But we didn&#39;t have enough time to finish the experiment.</p>
<h2>Work we have not done yet</h2>
<h3>Introduction of QS system into SpyCatcher pathway</h3>
<p>​	Since we have not been able to build a fully self-regulating QS system, we didn&#39;t introduce this system into the S-channel.</p>
<h3>Measurement of crosslinking strength and degree</h3>
<p>​	Due to lack of time, we could not conduct more quantitative experiments of crosslinking. In the future, we will use optical forceps, flow cytometry and other instruments for further quantitative experiments.</p>
<h2>Conclusion</h2>
<p>​	We have successfully built the systems and verified that single bacterial particles can cross-link with each other. Additionally, it has been demonstrated that Wza protein accumulates towards the two poles as the bacteria grow, and the SpyCatcher fused to it will hence be localized to the two poles of the bacteria, which shows that the cross-linking is feasible to form a relatively regular structure.</p>
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Silicification</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	<b>By surface-displaying R5 and adding TEOS, we want bacterial cells to undergo silicification from the outside to the inside, ensuring project safety as well as enhancing mechanical strength.</b></p>
<h2><b>Work we have finished</b></h2>
<h3>Construction of the silicification related circuit.</h3>
<p>​	R5 is an important functional protein in biosurface silicification, and we exhibited R5 by INP protein to dispaly it on the surface of bacteria, which causes silica to be deposited on the surface of bacteria to form a silicon shell in bacterial form in the silicification system of TEOS. Using the ClonExpress II one-step cloning kit (Vazyme Biotechnology, China), we successfully constructed a gene circuit T7-RBS-<em>Lnak</em>-R5 (<a href="http://parts.igem.org/Part:BBa-K4614003">BBa-K4614003</a>).</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/description/woyaokule.png" width = '400'/>
<p><b>Fig. 1 Genetic circuit we used to test <em>R5</em>.（<a href='http://parts.igem.org/Part:BBa-K4614003'> BBa-K4614003</a>）</b></p>
</div>
<p>​	After the mutant construction is completed, we validated the expression of the target protein INP (encoded by <em>Lnak</em>)-R5 with Western blotting.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/wb.png" width = '450'/>
<p><b>Fig. 2 Result of Western Blotting.</b>The size of the target protein INP (encoded by L<em>nak</em>)-R5 is approximately 36 KD.</p>
</div>
<h3>Functional verification of the principle of R5 silicification</h3>
<p>​	While constructing the pathway, we used acid instead of the positive electric catalytic group of R5 to catalyze the formation of silica gel from TEOS to verify the rationality of this catalytic principle, and then studied the performance of the silica gel in water retention and rehydration.</p>
<p>​	We prepared the system according to the table below to test whether hydrochloric acid can cause silicification.</p>
<div align="center">
<img src="https://static.igem.wiki/teams/4614/wiki/result/table/1.png" width = '800'/>
<p><b>Table 1. The system to test whether hydrochloric acid can cause silicification.	</b></p>
<p>​	After 16 h, TEOS has been induced to form silica gel. 
</p></div>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/si-3fixed.png" width = '500'/>
<p><b>Fig. 3 Hydrochloric acid catalyzes the formation of silica gel. </b>All 6 groups formed silica gel after 16 h.</p>
</div>
<p>​	Besides, we prepared the system according to the table below to test whether oxalic acid lysis can cause silicification.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/table/2.png" width = '500'/></div>
<center><b><p>Table 2. The system to test whether oxalic acid can cause siliconization.</p></b></center>		
<p>
​After 72 h, the TEOS in sample 1 had been induced to form silica gel, and the rest samples formed a small amount of white colloidal substance. After about 84 h, TEOS in sample 2 and 3 were induced to form silica gel.</p>

<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/oa1.jpg" width = '300'/>
<p><b>Fig. 4 Oxalic acid catalyzes the formation of silica gel</b>.<br> (After 72 h, TEOS of sample 1 has been induced to form silica gel, other samples formed a small amount of white gelatinous substance.)</p>
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/oa2.jpg" width = '300'/>
<p><b>Fig. 5 Oxalic acid catalyzes the formation of silica gel </b>（ After about 84 hours,  TEOS of 2 and 3 has been induced to form silica gel.）</p>
</div>


<p>​According to PI&#39;s suggestion, we tried to detect the rehydration ability of these silica gel. We weighed 0.15 g of silica gel of different silica concentrations in each EP tube, added 1 mL of deionized water each, and observed these 20 days later to find that silica gel with low concentration of silica became soft but still not polymerized, and that silica gel with high concentration of silica was hard in texture without significant changes. The silica gel concentration is shown in the table below:</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/table/3.png" width = '700'/><br>
<p><b>Table 3. The silica gel concentration.</b></p>
</div>

<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/si-1.jpg" width = '500'/><br>
<p>
<b>Fig. 6 Rehydration of silica gel</b>. The polymerization in the six groups of silica gel did not occur completely after rehydration.</p>
</div>
<p>​In addition, we also tested the water retention capacity of silica gel. We placed the silica gel caps with different silica concentrations catalyzed by oxalic acid in a ventilated environment to observe their water loss. The silica gel concentration is shown in the table below:</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/table/2.png" width = '500'/>
<p>
<b>Table 2. The system to test whether oxalic acid can cause siliconization.</b></p>		
</div>
<p>​	We monitored the change in its quality over time and found that it lost water quickly in the early stage, and slowly in the later stage. And after losing all of its water about 15 days later, silica gel turned into powder.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/si-2.png" width = '500'/>
<p><b>Fig. 7 The water loss curve of silica gel.</b> They lost water quickly in the early stage, and slowly in the later stage, and lost all of its water after about 15 days.</p>
</div>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/powder.jpg" width = '350'/>
<p><b>Fig. 8 Water loss of silica gel.</b>  After losing all water, silica gel turned into powder. </p>
</div>
<h3><b>Transmission electron microscopy</b></h3>
<p>​	We silicified the mutant strain and the strain that carried pET-30a (+) vector and photographed samples with electron microscopy.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/20231011184536.png" width = '600'/><br>
<p><b>Fig. 9 Transmission electron microscope image.</b>  <em>E.coli</em>+TEOS: BL21(De3) harboring the empty plasmid and be siliconized; R5-<em>E.coli</em>+TEOS:  BL21 (De3) harboring pET-30a (+)-INP-R5 and siliconized.</p>
</div>
<p>​	According to transmission electron microscopy observations, the experimental group bacteria cells with normal morphology, were filled with silicon, and had intact and smooth cell walls. The control group bacteria cells had less intracellular material, incomplete cell walls, and varying degrees of deformation. To some extent, this indicates that bacterial silicification can help maintain the cell shape and provide a certain rigidity.</p>
<p>&nbsp;</p>
<h2>Work to improve</h2>
<h3>Numerous attempts were made to verify the silicification ability of R5 by contrast colorimetry.</h3>
<p>​	After induction by appropriate concentration of IPTG, the OD<sub>600</sub> is basically the same, silicification is carried out in the TEOS system, and sampling is performed at regular intervals. Centrifuge and clean the silicified bacterial liquid 2-3 times, collect bacteria, and detect the silica concentration on the surface of the bacteriarefer to the Determination of silica (dissolved) - Molybdosilicate method (HZHJSZ00147) . 1 mL experimental and control groups with different silicification times were respectively transferred to centrifuge tubes for system preparation. The experiment set up two groups in parallel, and the silicification effect was judged by the measurement of the observed color and the determination of OD<sub>410</sub>.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/si/si-method.png" width = '600'/><p>
<b>Fig. 10 Molybdosilicate method test results. </b>In colorimetric experiments, the darker yellow of the system indicates a higher concentration of silicon.</p>
</div>
<p>From the results, we can see that the OD<sub>410</sub> values of the experimental and control groups are completely randomly distributed in multiple parallel experiments. After testing, there is no problem with the system. Therefore, we suspected that there was residual TEOS on the surface of the organism that had not been cleaned up. After all washed three times, they were tested again and all samples did not change color.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/si/si-method-clean3.png" width = '550'/>
<p>
<b>Fig. 11 After increasing the time of washes, silicify for 48 h. </b>  In colorimetric experiments, the darker yellow of the system indicates a higher concentration of silicon.</p>
</div>
<p>
​	But at the same time, we also wondered if the Molybdosilicate method chosen could only detect soluble silicon, so it could not detect silicon precipitation on the surface of the bacteria. And if this was the case, then washing too clean would also lead to no phenomenon. </p>
<p>​	Therefore, we are currently unable to quantify silica deposited on the surface of bacteria, and we may explore new methods that can be used for silicification quantification in the future.</p>
<h2><b>Work we have not done yet</b></h2>
<h3>Detection of the degree of silicification of bacteria</h3>
<p>​	We have not completed the detection of the degree of silicification of bacteria, and in the future we may try to detect the degree of silicification by measuring the silica concentration on the surface of bacteria and the thickness of the silicon shell. And we will adjust the silicification conditions according to the modeled data to achieve better silicification effect.</p>
<h3>Determination of silicon shell strength</h3>
<p>​	In the future, we will determine the material properties of silicified bacteria, including silicon shell strength.</p>
<h2><b>Conclusion</b></h2>
<p>​	We successfully constructed the <b><u>T7-RBS-Lnak-R5 pathway</u></b>, and verified that R5 anchoring on bacterial cell membranes can realize silica deposition on bacterial surfaces in TEOS systems, increasing bacterial rigidity. In the future, we hope to quantify the silicification effect and conduct material science research on silicified <em>E. coli</em>.</p>
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Integration of Filamentation &amp; Cross-linking module</h1><div class="container"><div class="horizontal-line"></div></div>
<p><b>Based on the cross-linking group of engineered bacteria A, B, C and D, the specific information is shown in Table 1, we conducted the antibiotic filamentation experiment and tried to construct a new gene circuit to realize the cross-linking and silk binding at the molecular level.</b></p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab2.png" width = '550'/><br>
<p>
<b>Table 1. Plasmids and genes induced into engineering bacteria.</b></p></div>
<h2>Work we have finshed</h2>
<h3>Cross-linked engineering bacteria antibiotic filamentation experiment</h3>
<p>​Based on literature review, we set up the following experimental groups to use ampicillin to promote cell filamentation and simulate the possible cross-linking situation of filamentation bacteria after the expression of <em>sulA</em> gene to verify our conclusion:</p>
<p>Single colonies were selected to make seed liquid (need to be cultured for 16h), and then refrigerated at 4℃. If necessary, add seed solution at 1:100 and culture for 3h (LB for medium, add spectacular and kanamycin).</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/resu1.png" width = '800'/>
<p><b>Table2. The process and group setup of cross-linked engineering bacteria antibiotic filamentation experiment</b></p></div>
<p>Group them according to the table below:</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/resul2.png" width = '800'/>
<p><b>Table. 3 Make group</b></p></div>
<p>Take 3ul of each bacterial solution, mix it on a slide, stir it slightly, let it stand for 40min, add 12ul deionized water, let it stand for 10min, cover the slide, observe and record under a fluorescence microscope</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab3.png" width = '500'/>
<p><b>Table 4. Combinations of bacterial suspensions of engineered bacteria we used in each group .</b></p></div>
<p>Laser microscope observation results are shown in Fig 1.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/nb5.png" width = '500'/>
<p><b>Fig. 1 The filamentated SpyCather could still be cross-linked to SpyTag under 400 × fluorescence microscope.</b> It is obvious that the degree of red and green fluorescence overlap in the experimental group (SpyTag+SpyCatcher) is greater than that in the other three control groups. </p>
</div>
<p>In microscopic observations, we found that a lot of green fluorescence binds to the poles of the red coryneform, which means that Wza can indeed position SpyCatcher at the poles after bacterial filaments. Even more surprising, we observed that some bacteria crosslinked to form a special linear, square and lotus structure, which means that when our engineered bacteria express both crosslinking and filamentation modules at the same time, it is very likely to form a micro-structure with special properties.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/line-fix.png" width = '600'/>
<p><b>Fig. 2 The engineered bacteria expressing SpyTag (bacteria B) and SpyCatcher (bacteria A), respectively, cross-link to form a special structure - linear</b></p>
</div>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/square-fix.png" width = '600'/>
<p><b>Fig. 3 The engineered bacteria expressing SpyTag (bacteria B) and SpyCatcher (bacteria A), respectively, cross-link to form a special structure - close to square shape</b></p>
</div>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/lotus-fix.png" width = '600'/>
<p><b>Fig. 4 The engineered bacteria expressing SpyTag (bacteria B) and SpyCatcher (bacteria A), respectively, cross-link to form a special structure - lotus shape</b></p>
</div>
<p>We were extremely excited to get these results less than 24 hours before the Wiki freeze. These results demonstrate that there is a high probability that the materials formed by our engineered bacteria will have special microstructure and therefore special properties.</p>
<h2>What we have not done yet</h2>
<p>​	We aim to integrate the filamentation module and the crosslinking module to investigate the structure and properties of the resulting biomaterial. Figure 5 presents the pathway diagram we expected to construct. However, we have not yet built it.</p>
<div align="center">
<img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/sh-jl.png" width="600"/>
<p>
<b>Fig. 5 The genetic circuit of integration of filamentation and cross-linking.</b></p>
</div>
<p>
​	The reason for our failure is possibly that the homology arms of the inserted genes we designed have a high degree of similarity. After constructing the recombinant plasmid using Gibson Assembly, we found that upon sequencing verification, none of the recombinant plasmids contained the <em>sulA</em> insertion, but only the <em>WzA</em>-SpyCatcher. Despite finding the reason for our failure, we did not have enough time left to redesign the primers and complete the construction.</p>
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Integration of silicification &amp; cross-linking module</h1><div class="container"><div class="horizontal-line"></div></div>
<h2>Work we have finshed</h2>
<h3>Validation of the possibility of three-module merger</h3>
<p>​	Using the ClonExpress II one-step cloning kit (Vazyme Biotechnology, China), we successfully constructed a gene circuit T7-<em>WzA</em>-<em>spycather</em>-T7-L<em>nak</em>-R5 (<a href="http://parts.igem.org/Part:BBa_K4614300">BBa_K4614300</a>) and T7-<em>flgH</em>-<em>spytag</em>-<em>Lnak</em>-R5(<a href="http://parts.igem.org/Part:BBa_K4614301">BBa_K4614301</a>).</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/result/cather-merge.png" width="600"/>
    <img src="https://static.igem.wiki/teams/4614/wiki/result/tag-merge.png" width="600"/>
<p><b>Fig. 1The genetic circuit of the integration of Silicification &amp; Cross-linking module. (<a href='http://parts.igem.org/Part:BBa_K4614300'>BBa_K4614300</a>, <a href='http://parts.igem.org/Part:BBa_K4614301'>BBa_K4614301</a>) </b></p>
</div>
<p>​	We co-transduced vector pET-30a (+)-T7-<em>WzA</em>-<em>spycather</em>-T7-IPN-R5 and vector pJUMP46-2A-<em>PsrfA</em>-<em>sulA</em> to <em>E. coli</em> BL21(DE3) as experimental group and <em>E. coli</em> BL21(De3) transferred only by vector pJUMP46-2A-<em>PsrfA-sulA</em> as a positive control and transferred by vector pET-30a(+) , <em>E. coli</em> BL21 (DE3) as a negative control. The same silicification pro is carried out. Smears are then produced using crystal violet staining for microscopic examination.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/merge.png" width="600"/>
<p><b>Fig. 2 Optical microscope image.</b> a: experimental group; b: negative control; c: positive control.</p>
</div>
<p>​	Through microscopic examination, we can see that the merger of the three modules had a certain effect on the expression of th  <em>sulA</em> gene induced by density-dependent promoter, making it unable to perform the expected functioanl role.</p>
<h3>Merging experiment of silicification and crosslinking module</h3>
<p>​	Add the inoculated mother liquor to 30 mL liquid medium containing kanamycin-resistant at a ratio of 1:50. Inoculated recombinants carry pET-30a (+), pET-30a (+)-T7-<em>flgH</em>-<em>spytag</em>-L<em>nak</em>-R5, and pET-30a(+)-T7-<em>WzA</em>-<em>spycather</em>-T7-L<em>nak</em>-R5 plasmids. We first named the mixture of the constructed pET-30a (+)-T7-<em>flgH</em>-<em>spytag</em>-L<em>nak</em>-R5, pET-30a(+)-T7-<em>WzA</em>-<em>spycather</em>-T7-L<em>nak</em>-R5 mutant strains as &quot;My-Si-lium V1&quot;.</p>
<p>​	After two hours, the OD<sub>600</sub> of the bacterial solutio  is about 0.6, then 0.001 g/mL of IPTG 30 uL was added to the bacterial solution. After three hours, We collected the bacteria by centrifugation at 6,000 × g for 6 min and wash 3 times with deionized water, and resuspended the bacteria with 5 mL of deionized water. Then, we adjusted the concentration of the three bacterial solutions to the same level.</p>
<p>​	The siliconization system is formulated according to the table below:</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/result/table/5.png" width="800"/>
</div>
<p>​	Add 4 mL TEOS to both systems, incubate at 200 rpm with shaking at 37 °C for 48 h.</p>
<p>​	Both groups formed silica gel, but the formation rate of group 2 was faster than group 1, and the bacteria of group 2 were suspended in the system, and group 1 had a large amount of precipitation at the bottom of the tube.</p>
<div align="center"> 
<img src="https://static.igem.wiki/teams/4614/wiki/si-parts/notebook/hebing.png" width="400"/>
<p><b>Fig 1. Effect of oxalic acid on cross-linking structure.</b>  Group 1 was <em>E.coli</em> bacteria transferred by pET-30a (+) plasmid, and Group 2 was E.colil mixed bacteria transferred by pET-30a (+)-<em>spytag</em>-L<em>nak</em>-R5 plasmid and <em>E.coli</em> transferred by pET-30a (+)-<em>WzA</em>-<em>spycather</em>-L<em>nak</em>-R5 plasmid.</p>
</div>
<p>We suspected that our &quot;My-Si-lium V1&quot; may not precipitate due to cross-linking that suspends the bacteria in silica gel.</p>
<h2>What we have not done yet</h2>
<h3>The combination of three modules</h3>
<p>​	According to the previous experiments, our three modules have the potential to complete the mergence, but due to lack of time, we failed to integrate the three modules together.</p>
 <br><br><div class="container"><div class="horizontal-line"></div></div><h1>Failures &amp; Difficulties</h1><div class="container"><div class="horizontal-line"></div></div>
<p>​	In the process of our experimental design, the biggest problem was the low copy number of the plasmid pJUMP46-2A. This made it difficult for us to ensure that the sample concentration obtained by the small plasmid could meet the company&#39;s sequencing standards, and we spent a lot of unnecessary time.</p>
<p>​	Problems have also arisen with the design of the digested plasmids. The endonuclease stored in our laboratory comes from many companies, so we have to pay more attention to analyze optimum conditions  of the enzyme from different companies. </p>
<p>​	During the experiment, we encountered many difficulties in construction and detection. Further, our experiment was short of funds. In this case, many kits could not be purchased in time. Therefore, we summarized a relatively simple identification process after recombinant plasmid transformation: colony PCR → Plasmid Extraction → Sanger sequencing (test pass or one-way sequencing). We omitted the step of enzyme digestion verification, which consumed a large amount of enzyme and could not avoid the step of Sanger sequencing. The companies that cooperate with us in sequencing include Sangon and Tsingke. In addition, in the case of lack of funds, we also reduced the amount of nucleic acid dye as much as possible. Each time we used agarose gel, we used 20 ml 1× TAE buffer, add 2 μL nucleic acid dye. Nucleic acid dyes still have good dyeing ability at this dosage, and can significantly reduce the dosage.</p>
<p>&nbsp;</p></PageText>
</template>

<style scoped>
.note{
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.toc h2{
    padding-left:2em;
    font-size:1.1em;
}
.toc h1{
    font-size:1.2em
}
a{
text-decoration:none
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
