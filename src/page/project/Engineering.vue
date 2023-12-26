<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue";
</script>

<template>
    <div>
        <Navbar color="#83a6b9" />
    </div>
<PageText secondcolor="#cadff0" maincolor="#83a6b9" class="note" poster="https://static.igem.wiki/teams/4614/wiki/description/home/engineering.png">

<br><br>
<div class="container"><div class="horizontal-line"></div></div>
<h1><a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a>: Filamentation module</h1>
<div class="container"><div class="horizontal-line"></div></div>
<p><b>
The composite part composed of P<em>srfA</em> and <em>sulA</em> has been engineered to facilitate gradual filamentation of the chassis bacterium with increasing cell density, thereby preventing excessive inhibition of division caused by overexpression of <em>sulA</em> during the initial stages. The function of <em>sulA</em> is to induce filamentation in <em>E. coli</em>. We first constructed P<sub>T7</sub>-<em>sulA</em> and then attempted to quantitatively measure the length of bacterial cells to assess its filamentation ability. Ultimately, after implantation, we obtained the expected results.Figure 1 illustrates the components included in the composite part.
</b></p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/sihua-1.png" width="400"/>
</div><p>
<center>
<b>
    Fig.1 Genetic circuit (<a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a>) we used to construct the filamentation module of our project.
</b></center></p>

<h2>1<sup>st</sup> iteration</h2>

<p><b>
AIM:
</b>
 The objective of this experiment is to investigate the extent of filamentation induced by exogenous addition of β-lactam antibiotics in <em>E. coli</em> <sup>[1]</sup>. Prior to the completion of <a href="http://parts.igem.org/Part:BBa_K4614203">BBa_K4614203</a> construction, we aim to explore the effects of ampicillin addition in the growth medium on inducing a certain degree of filamentation in <em>E. coli</em>. The experiment aims to assess whether this degree of filamentation meets the requirements for the final biomaterial and provide methodological support for subsequent experiments.</p>
<p><b>
DESIGN:
</b>
 We would like to induce bacteria with antibiotics for a period of time and observe their filamentation effect.</p>
<p><b>
BUILD:
</b>
 <em>E. coli</em> K12 culture was inoculated at 3% inoculum size into 15 ml of antibiotic-free Luria-Bertani (LB) medium and cultured until reaching an optical density (OD) at 600 nm of 0.6–0.8. Following this, ampicillin was added to a final concentration of 12.5 μg/ml, and the culture was incubated overnight. Subsequently, samples were taken and prepared for microscopy by staining with crystal violet, followed by observation under a microscope.</p>
<p><b>
TEST:
</b>
Initially, we encountered difficulties in obtaining clear results with crystal violet staining, as the background often contained impurities and the bacterial was prone to clumping, affecting counting and measurement. Subsequently, we optimized the slide preparation method as follows: </p>
<p>1) Harvested 200-500 μl of the bacterial solution. </p>
<p>2) After centrifugation at 12,000 rpm for 30 seconds, the supernatant was discarded, and 1 ml of ddH<sub>2</sub>O was added followed by thorough shaking. </p>
<p>3) After centrifugation at 12,000 rpm for 30 seconds, 900 μl of the supernatant was discarded, and the remaining 100 μl was vigorously mixed. Then, 10 μl of the mixture was transferred onto a glass slide, spread and fixed by gently heating with an alcohol lamp. </p>
<p>4) The slide was then stained with 200 μl of crystal violet solution for 5 minutes, washed with ddH<sub>2</sub>O, air-dried, and then observed. </p>
<p>Figure 2 compares the results obtained using the original method (without discarding the culture medium) and the improved method (discarding the culture medium and washing with ddH<sub>2</sub>O). From the results, we can observe that the optimized slide-making method significantly reduces background impurities, achieves appropriate cell density, and ensures even dispersion. </p>
<div align="center">
<img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-improve.png" width="600"/></div>
<center><b>
<p>Fig.2 A comparison of the results before and after the method improvement.</p>
</b></center>
<p>Once an appropriate slide-making method was obtained, the filamentation effect of ampicillin was tested next, as depicted in Figure 3. Microscopic images were captured to visualize the cellular morphology and filamentation phenotype. The length of bacterial filaments induced by ampicillin was approximately twice as long as that of the control group.</p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-amp.png" width="600"/>
</div>
<p><center><b>
Fig.3 The effect of antibiotic-induced filamentation.
</b>
(A) Microscopic images of the control group. (B) Microscopic images of the group treated with 12.5 μg/ml ampicillin. (C, D) Statistical analysis of filamentation lengths.
</center></p>
<p><b>
LEARN:
</b>
The new slide-making method we developed has aided us in obtaining clear and easily measurable results. Through this process, we have learned the importance of continuously improving our experimental procedures and being willing to try new approaches. However, the antibiotic-induced filamentation could not achieve the desired structural effects in our material. Therefore, we needed to delve deeper into the mechanism of bacterial filamentation and employ rational design of filamentation modules using synthetic biology approaches.</p>

<h2>2<sup>nd</sup> iteration</h2>

<p><b>
AIM 2.0:
</b>
 After confirming that antibiotic-induced filamentation could not be applied to our project, we were now attempting to explore new methods for filamentation.</p>
<p><b>
DESIGN 2.0:
</b>
 Through literature research, it was discovered that the SulA protein can induce filamentation in <em>E. coli</em>. The mechanism of action involves binding to the FtsZ protein, inhibiting the assembly of the cell division ring, known as the Z-ring<sup>[2]</sup>. As a result, we attempted to overexpress the SulA protein in <em>E. coli</em> BL21(DE3). Figure 4 shows the circuit we developed.</p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/sihua-1.png" width="400"/>
</div>
<p><center><b>
Fig.4 Genetic circuit we used to test <em>sulA</em>.
</b></center></p>
<p><b>
BUILD 2.0:
</b>
 Using PCR technology, we successfully obtained the <em>sulA</em> gene fragment from <em>E. coli</em> K12. To insert the <em>sulA</em> gene into the multiple cloning sites of the pET-32a(+) vector, we utilized the One Step Cloning Kit II from Vazyme Biotech. The expression vector was transformed into <em>E. coli</em> BL21(DE3) by the heat shock method. The constructed genetic circuit was successfully developed, and its accuracy was confirmed through the implementation of colony PCR and sequencing techniques.</p>
<p><b>
TEST 2.0:
</b>
 Through induction experiments using different concentrations of IPTG, we observed that overnight induction with a final concentration of 20 μM IPTG resulted in highly desirable filamentation effects. In Figure 5 (B), the linear bacterial filaments represent the filamented <em>E. coli</em>, and we can observe filament lengths of up to 100 μm. This length is already sufficient to meet the requirements of our project.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wiki-sh/sh-iptg.png" width="500"/>
</div>
<center><p>
<b>
Fig.5 The microscopic results after overnight induction with 20 μM IPTG for <em>E. coli</em> BL21 (DE3) carrying the pET-32a (+)-<em>sulA</em>plasmid.
</b>
(A) Microscopic images of the control group. (B) Microscopic images of the <em>E. coli</em> BL21 (DE3) carrying the pET-32a (+)-<em>sulA</em> plasmid treated with 20 mM IPTG at 37 ℃ overnight. (C) The representative image of a single filamentous bacterium.</p>
 </center>
<p><b>
LEARN 2.0:
</b>
The role of the <em>sulA</em> gene in the filamentation effect of <em>E. coli</em> is highly significant. Therefore, we have completed the validation of this gene component. Our ultimate goal is to elongate bacterial cells using the <em>sulA</em> gene as the bacterial cell density increases, in order to provide building blocks for our bio-based materials.</p>
<p>Not only that, we have more improvement ideas and implementations for our project. Please refer to the  <a href='https://2023.igem.wiki/cau-china/result'> result</a> for more details.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1><a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> and <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a>: Cross-linking module</h1><div class="container"><div class="horizontal-line"></div></div>
<p><b>
The function of <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> and <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a> is to enable engineering bacteria to achieve cross-linking function. The engineering process is mainly about how we improve the methods for verifying the success of SpyTag-SpyCatcher system construction.
</b></p>

<h2>1<sup>st</sup> iteration</h2>

<p><b>
AIM:
</b> SpyCatcher can form isopeptide bonds with SpyTag, and we hope to achieve cross-linking between bacteria through this system. In order to make the cross-linked structure conform to our design, we want to display SpyCatcher to special locations of the cell, such as near the Z ring or at the poles. We hope to achieve this through specific transport proteins.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spytag.png" width="400"/>
    <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spycatcher.png" width="400"/></div>
<p><center>
<b>
Fig.6 Genetic circuits <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> and <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a> for cross-linking.
</b>
</center></p>
<p><b>
DESIGN:
</b>
 We screened some proteins with localization ability, such as YneA, which is localized in the Z ring, Pal, which make up the Z ring, FlgH, which make up the L ring of the flagellar basal body, and Wza, a member of the outer membrane auxiliary (OMA) protein family. We considered the location of these proteins, the mechanism and feasibility of positioning. However, we found that the SulA used by filamentation <a href="http://parts.igem.org/Part:BBa_K4614201">BBa_K4614201</a> would destroy the Z ring so we finally chose to develop FlgH and Wza as our carrier protein, so that SpyTag will be displayed at the base of the flagella and SpyCatcher will be displayed at the poles of the bacteria. For detailed design, please refer to <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> and <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a>. In short, we blend the SpyTag into the specific position in the middle of the FlgH protein, and integrate the SpyCatcher to the C terminus of the Wza protein. </p>
<p><b>
BUILD:
</b>
We obtained the designed Spytag and Spycatcher sequences through synthesis, and obtained the DNA fragments of FlgH upstream and downstream through PCR, which is also for the complete DNA fragment of Wza. Then we used the One Step Cloning II Kit (Vazyme Biotech, China) to insert the sequence into vector pET-30a(+). The genetic circuit was successfully constructed, and its accuracy was confirmed through the implementation of colony PCR and sequencing techniques.</p>
<p><b>
TEST:
</b>
The groupings areas follows: the experimental group (SpyTag + SpyCatcher), control group 1 (SpyTag), and control group 2 (SpyCatcher). We used bacterial suspensions of engineered bacteria expressing SpyTag and SpyCatcher, respectively. We prepared to mix these two bacterial solutions in equal volumes according to the combination in table 1. The procedure was carried out in a 2 ml centrifuge tube, and samples were taken on the clean bench at 0, 10, and 60 minutes. Using a pipette, we transferred the bacterial suspension from the centrifuge tube into a cuvette and measured the OD at 600nm for each group.</p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab1.png" width="450"/>
</div>
<p><center>
<b>
Table 1. Combinations of bacterial suspensions of engineered bacteria we used in each group.
</b>
</center></p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/s-engineering/fail-1010.png" width="600"/>
</div>
<p><center>
<b>
Fig.7 The data for this result did not have any significance, indicating that there were no differences between groups.
</b>
</center></p>
<p><b>
LEARN:
</b>
 With the prolongation of the incubation time, comparing the experimental results, there was no significant difference in remaining between the experimental group and the control groups (Fig. 7). We realized that this issue occurred because our sampling from the centrifuge tube disrupted the initial settling process. In conclusion, in order to obtain more reliable verification results, we need to change the validation method.</p>

<h2>2<sup>nd</sup> iteration</h2>

<p><b>
DESIGN 2.0:
</b>
After consulting the literature, we decided to mix the bacterial solutions in the cuvettes for each group and directly measure them, omitting the step of transferring the bacterial solution using a pipette<sup>[4]</sup>. This means that bacterial sedimentation will take place in the cuvettes.<br/></p>
<p><b>
Build 2.0:
</b>
 We still applied the genetic circuits <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> and <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a> built in the first iteration. The genetic circuit was successfully constructed, and its accuracy was confirmed through the implementation of colony PCR and sequencing techniques.</p>
<p><b>
TEST 2.0: 
</b>
The grouping method remains unchanged: experimental group (SpyCatcher + SpyTag) and control group 1 (SpyTag) and control group 2 (SpyCatcher). The combination remains the same as in table 1. We have increased the sampling times to 0 minutes, 30 minutes, 60 minutes, 90 minutes, 120 minutes, 150 minutes, and 180 minutes. This time, we directly mix the bacterial cultures in cuvettes and let them stand. </p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/s-engineering/success-1010.png" width="600"/>
</div>
<p><center>
<b>
Fig.8 The experimental group has the highest remaining at the end
</b>
</center></p>
<p><b>
LEARN 2.0:
</b>
The experimental group maintains a consistently higher remaining value than the other groups after 1.5 hours, which aligns with our expectations. The improvement in our method appears to be effective (Fig. 8). Therefore, we consider this iteration to be successful. We confirmed cross-linking can happen, but we want to see more intuitive and cool results, and look forward to seeing where the cross-linking is located.</p>
<h2>3<sup>rd</sup> iteration</h2>
<p><b>
AIM 3.0:
</b>
 We hope to determine whether bacteria are cross-linked by direct observation. We also want to find a method that can conduct statistics and analyze the cross-linking situation through photos.</p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/iwpronhm.png" width="400"/>
 <img src="https://static.igem.wiki/teams/4614/wiki/wangyinuo/spytag2.png" width="400"/></div>
<center><b>
<p>Fig.9 Cross-linking pathway using for microscopy(genetic circuits <a href="http://parts.igem.org/Part:BBa_K4614105">BBa_K4614105</a>, <a href="http://parts.igem.org/Part:BBa_K4614111">BBa_K4614111</a>, <a href="http://parts.igem.org/Part:BBa_K4614102">BBa_K4614102</a> <a href="http://parts.igem.org/Part:BBa_K4614110">BBa_K4614110</a>)</p>
</b></center>
<p><b>
DESIGN 3.0:
</b>
 We divided bacteria into four categories according to the plasmids they contained and named them according to table 2. We also prepared to mix the two bacterial solutions in equal volumes according to the combination in table 3.</p>
<p>&nbsp;</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab2.png" width="450"/>
</div>
<p><center>
<b>
Table 2. Plasmids and genes induced into engineering bacteria.
</b>
</center></p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab3.png" width="450"/>
</div>
<p><center>
<b>
Table 3. Combinations of bacterial suspensions of engineered bacteria we used in each group.
</b>
</center></p>
<p><b>
Build 3.0:
</b>
 We built the genetic circuit using One Step Cloning Kit II (Vazyme Biotech, China) to <a href="http://parts.igem.org/Part:BBa_K4614110">BBa_K4614110</a> and <a href="http://parts.igem.org/Part:BBa_K4614111">BBa_K4614111</a>, which is the cross-linking pathway using for microscopy. We successfully constructed the above sequences and verified them by colony PCR and sequencing.</p>
<p><b>
TEST 3.0:
</b>
 We tried two ways to make smears. Before making samples, we adjusted the OD at 600 nm values of the bacteria solution to the same.</p>
<p>1<sup>st</sup> method: Mix the two bacterial solutions in equal volumes according to the combination in table 2 and shake well. Add 10 μl of the mixed solution onto the glass slide, immediately cover it with a coverslip,and observe under a laser microscope.</p>
<p>2<sup>nd</sup> method: Still according to the combination in table 3, take 5 μl of each bacterial solution and add it to the same position on the slide. After letting it stand for a certain period of time, add ddH<sub>2</sub>O, cover it with a coverslip, and observe it under a laser microscope. The production methods tested in this iteration are listed in table 4.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/sqh/tab4.png" width="600"/>
</div>
<center><p>
&lt;<b>
Table 4. Production methods.
</b>
In the end we found that the production method 4 in 2<sup>nd</sup> method was the most suitable. When produced in this way, obvious cross-linked clumps can be observed in the experimental group, while none can be observed in the control group (Fig.10, 11).</p>
 </center>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/cl-8-19-fluorescence-microscopy-40.jpg" width="400"/>
</div>
<center><p>
<b>
Fig.10 Fluorescence microscopy (400×).
</b>
In the experimental group (bacteria A and B), distinct clumps were observed, while in the other control group, the bacteria appeared to be randomly distributed.</p>
 </center>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/cl-8-19-fluorescence-microscopy-100.jpg" width="400"/>
</div>
<p><center>
<b>
Fig.11 Fluorescence microscopy (1000×).
</b>
In the experimental group (bacteria A and B), distinct clumps were observed, while in the other control group, the bacteria appeared to be randomly distributed. More details are shown in the image above.
We tried to add different volume water when adding water to create different dilution samples. As a result, as the dilution multiple increases, the cross-linking group block becomes smaller (Fig.12).
</center></p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/fig6.png" width="600"/>
</div>
<p><center>
<b>
Fig.12 As the dilution multiple increases, the cross -linking group block becomes smaller.
</b>
 2x, 3x, and 4x dilution from left to right, The engineered bacteria used in these experiments are bacteria A and bacteria B in Table1.
</center></p>
<p>After obtaining the best manufacturing sample conditions, we observed the samples through the laser scanning confocal microscope and obtained multiple 3D models of cross-linked structures (Fig.13).</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/movie-3ct-1.gif" width="300"/><img src="https://static.igem.wiki/teams/4614/wiki/engineering/jiaolian/movie-3ct-2.gif" width="300"/></div>
<center>
<b>
Fig.13 3D models of cross-linked structures.
</b>
</center>
<p><b>
LEARN 3.0:
</b>
 The display protein we designed definitely work. Through direct observation, we were surprised to find that the Wza did migrate to the pole of bacteria after filamentation, As shown in the white circle in Fig.14, filamented bacteria A (red, expressing Wza-SpyCatcher) is cross-linked with bacteria B (green, expressing FlgH-SpyTag) only at its two poles. We have obtained the best way to make samples and explore the influencing factor of the formation of the cross-linking clumps. We speculate that the cross-linked structure cannot withstand the shaking operation, causing the clumps to be shaken apart. Additionally, longer incubation times are required to accumulate fluorescent protein, making it less susceptible to rapid quenching upon observation.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/result/bar-fix.png" width="600"/>
</div>
<center>
<p><b>
Fig.14 Wza migrates to the pole of bacteria after filamentation.
</b>
The left side is the fluorescence microscope results, and the right side is the model diagram. The red part represents the bacteria expressing SpyCatcher in filaments (bacteria A), and the green ball represents the bacteria expressing SpyTag (bacteria B).
</p></center>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1><a href="http://parts.igem.org/Part:BBa_K4614003">BBa_K4614003</a>：Silicification detection</h1><div class="container"><div class="horizontal-line"></div></div>
<p><b>
Basic part INP-R5, encoding the inserted fusion protein of INP and R5. The engineering process is mainly about verifying the function of silicification.
</b></p>
<h2>1<sup>st</sup> iteration</h2>
<p><b>
AIM:
</b>
 R5 is an important functional protein in silicification. We exhibit R5 on the surface of cells through INP, which causes silica to be deposited on the surface of bacteria. Theoretically, this changes the permeability of the cell membrane and allows TEOS to enter the cell, eventually leading to complete filling of the bacteria with silicon.</p>
<p><b>
DESIGN:
</b>
We respectively gene of inserted fusion protein of INP（encoded by <em>Lnak</em>）and R5 and their composition fragments into the downstream of T7 Promoter of pET-30a (+) plasmid, hoping to verify the silicification by R5. Use Si-Mo SpectroPhotometry to measure the silica concentration on the surface of the bacteria.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/description/woyaokule.png" width="400"/>
</div>
<p><center>
<b>
Fig.15 Diagram of the silicification pathway (<a href="http://parts.igem.org/Part:BBa_K4614003">BBa_K4614003</a>).
</b>
</center></p>
<p><b>
BUILD:
</b>
 We send the sequence of <em>Lnak</em> and <em>R5</em> fusion to the company for synthesis, used One Step Cloning Kit II (Vazyme Biotech, China) to insert <em>Lnak</em> and <em>R5</em> fusion into pET-30a(+). The expression vector was transformed into BL21 (DE3). The transformed single colony was subjected to colony PCR, and the positive bacterial plasmid was sent to the company for sequencing to obtain an expression vector with a completely correct sequence.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/s-engineering/si-7-31-jp.png" width="400"/>
</div>
<p><center>
<b>
Fig.16 Transformation and colony PCR.
</b>
</center> </p>
<p><b>
TEST:
</b>
 We used Si-Mo SpectroPhotometry to measure the silica concentration on the surface of the bacteria. The experiment set up two groups in parallel, and the silicification effect was judged by the measurement of the observed color and the determination of OD at 410nm.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/si/si-method.png" width="400"/>
</div>  <br/>

    <center><p>
<b>
Fig.17 Molybdosilicate method test results
</b>
 In colorimetric experiments, the darker yellow of the system indicates a higher concentration of silicon.</p>
</center>   <br/>
<p>From the results, we can see that the OD values of the experimental and control groups are completely randomly distributed in multiple parallel experiments. </p>
<p><b>
LEARN:
</b>
 we suspect that there is residual TEOS on the surface of the organism that has not been cleaned. In order to obtain more reliable validation results, we need to improve the detection method. </p>
<h2>2<sup>nd</sup> iteration</h2>
<p><b>
DESIGN 2.0:
</b>
 Considering that the results of the previous round may be affected by residual TEOS, we excluded the impact of TEOS on the determination by increasing the number of washings. Simultaneously detect the protein to confirm successful expression.</p>
<p><b>
BUILD 2.0:
</b>
 We continued pET-30a(+) with <em>Lnak</em> and <em>R5</em> fusion sequences inserted.And before Si-Mo SpectroPhotometry, we washed the bacteria three times.</p>
<p><b>
TEST 2.0:
</b>
After washed three times, they were tested again and all samples did not change color.</p>
<div align="center"> <br/>
    <img src="https://static.igem.wiki/teams/4614/wiki/engineering/si/si-method-clean3.png" width="400"/>
</div>

<center><p>
<b>
Fig.18 After increasing the number of washes, silicify for 48 h.</b>
In colorimetric experiments, the darker yellow of the system indicates a higher concentration of silicon.</p>
</center> <br/>
<p>To ensure protein expression, we conducted Western Blot experiments to verify the expression of the inserted protein.</p>
<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/wb.png" width="400"/>
</div> 
<p><center>
<b>
Fig.19 Result of Western Blot.
</b>
</center><br/></p>
<p><b>
LEARN 2.0:
</b>
 We have successfully verified the expression of the target protein, but cannot confirm whether the expressed protein can function under the silicification conditions. At the same time, we recognized that the method may not be able to determine soluble silicon. In order to obtain more reliable results, we need new methods for silica detection on bacterial surfaces.</p>
<h2>3<sup>rd</sup> iteration</h2>
<p><b>
DESIGN 3.0: 
</b>
We decided to use transmission electron microscopy to observe the structure of cells to characterize the silicification effect.</p>
<p><b>
BUILD 3.0:
</b>
We continued to use the strain which inserted pET-30a (+) with Lnak and R5 fusion sequences  as mutants.Then we silicified the mutant strain and the strain that carried the pET-30a (+) empty plasmid, and observed them through electron microscopy to obtain images.</p>
<p><b>
TEST 3.0：
</b></p>

<div align="center">
    <img src="https://static.igem.wiki/teams/4614/wiki/si-parts/dianjing.png" width="400"/>
</div>

<center><p> 
<b>
Fig.20 Transmission electron microscope image.
</b>
<em>E.coli</em>+TEOS: BL21(DE3) introduced into the empty plasmid and  be siliconized; R5-<em>E.coli</em>+TEOS:  BL21 (DE3) of pET-30a (+)-INP-R5  and be siliconized.</p>
 </center>
<p>Observing the morphology of the bacteria, we found that the experimental group bacteria cells had normal morphology, were filled with silicon, and had intact and smooth cell walls. The control group bacteria cells had less intracellular material, incomplete cell walls, and varying degrees of deformation. </p>
<p><b>
LEARN 3.0:
</b>
 To a certain extent, it indicates that bacterial silicification can maintain the cell shape and provide a certain rigidity. So we thought we succeeded in this iteration and got the engineered bacteria we needed for our goal.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Reference</h1><div class="container"><div class="horizontal-line"></div></div>
<p>[1]Windels, Etthel M et al. “Enrichment of persisters enabled by a ß-lactam-induced filamentation method reveals their stochastic single-cell awakening.” Communications biology vol. 2 426. 29 Nov. 2019.</p>
<p>[2]Mukherjee, A et al. “Inhibition of FtsZ polymerization by SulA, an inhibitor of septation in Escherichia coli.” Proceedings of the National Academy of Sciences of the United States of America vol. 95,6 (1998): 2885-90.</p>
<p>[3]Guan, Chengran et al. “Broad-host-range application of the srfA promoter from Bacillus subtilis in Escherichia coli.” <em>Journal of microbiological methods</em> vol. 168 (2020): 105798. </p>
<p>[4] Zhang M, Zhang Y, Zhao P, Wang H. [Construction of &quot;lock-key&quot; biological living material based on double engineered bacteria and its application on intestinal retention in vivo]. Sheng Wu Gong Cheng Xue Bao. 2023 Mar 25;39(3):1163-1174. Chinese. </p>
    
    </PageText>

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

a{
  text-decoration:none
}
</style>
