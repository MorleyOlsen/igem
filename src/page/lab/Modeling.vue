<script setup>
import Navbar from "../../components/Navbar.vue"
import PageText from "../../components/PageText.vue"

</script>

<template  >
    <div>
        <Navbar color="#367871" />
    </div>

    <PageText secondcolor="#d6f9f4" maincolor="#367871" class="note" poster="https://static.igem.wiki/teams/4614/wiki/description/home/modeling.png">
    
        <p>In order to understand the mechanism of each step in the project, make appropriate predictions for the complex system, and provide feedback and suggestions for the wet experiment, we established a series of mathematical models, including the cellular automaton simulation of quorum sensing , the kinetic model of filamentation pathway,induction of silicfication production, the efficiency prediction of R5 peptide expression and catalysis of silicification, the simulation of silica formation on bacterial surface, and two prediction models of acoustic properties, micromechanical properties, and thermal-humidity transfer model of the material.</p>
<p>All these models can be divided into two groups, one group verifies the feasibility of the design pathway from the modeling perspective, including the first four models, and the other group, including the last four models, predicts the properties of the material.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/tutu.png" width="800"/> </div>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Modeling of filamentation</h1><div class="container"><div class="horizontal-line"></div></div>
<h2>Induction of filamentation：Cellular Automata Simulation</h2>
<h3>Overview</h3>
<p>Cellular automation is a type of discrete dynamic model. It is discrete in terms of time, space, and states. This model is not determined by strictly defined physical equations or functions but consists of a series of rules constructed for the model. The concept was first introduced in the 1940s by Stanisław Ulam and John von Neumann to simulate the self-replicating capabilities of living systems. This type of model can be used to study many phenomena and finds wide applications in sociology, ecology, and computer science.</p>
<p>The basic units in the model are called cells. Cells can have multiple discrete states, and their states change over time depending on the states of the cell and its neighbors. As a result, cellular automata have a significant advantage in simulating dynamic system changes, helping people understand and gain deep insights into the mechanisms of dynamic system variations.</p>
<h3>Method and Model</h3>
<p>During bacterial growth, when a certain density of bacteria is present in the surrounding environment, the density of bacteria itself also increases. Upon the introduction of the <em>sulA</em> gene, bacteria have a certain probability of undergoing filamentation. After filamentation, bacteria take up more nutrients, which to some extent inhibits the growth of surrounding bacteria. For the cultivation of filamentous bacteria, it is crucial to understand when filamentation occurs and the extent of filamentation. Therefore, we use cellular automata to simulate the growth process of filamentous bacteria.</p>
<p>We make the following simplifications:</p>
<ul>
<li>We assume that filamentous bacteria do not affect density response (i.e., we do not consider any changes in bacterial activity after filamentation).</li>
<li>We assume that the time scales for all state transitions are consistent.</li>
<li>We assume that high density does not lead to bacterial competition resulting in death.</li>
<li>We assume that filamentation cannot be induced under low-density conditions.</li>

</ul>
<p>The settings for each cell are as follows:</p>
<p>Each small grid has 7 states:</p>
<ol start='' >
<li>No bacteria (A)</li>
<li>Low density (B1)</li>
<li>Medium density (B2)</li>
<li>High density (B3)</li>
<li>High density with short filamentation (C1) (i.e., filamentation but with a short length of filament dominating)</li>
<li>High density with medium filamentation (C2)</li>
<li>High density with long filamentation (C3)</li>

</ol>
<p>To simplify our model, we make the following assumptions:</p>
<ol start='' >
<li>When A is surrounded by B1, B2, or B3, there is a certain probability of transitioning to B1, with the probability order being B3 &gt; B2 &gt; B1.</li>
<li>When B1 is surrounded by B1, B2, or B3, there is a certain probability of transitioning to B2, with the probability order being B3 &gt; B2 &gt; B1.</li>
<li>When B2 is surrounded by B2 or B3, there is a certain probability of transitioning to B3, with the probability order being B3 &gt; B2.</li>
<li>When B3 is surrounded by B4, there is a certain probability of transitioning to C1.</li>
<li>When C1 is surrounded by C1, there is a certain probability of transitioning to C2.</li>
<li>When C2 is surrounded by C2, there is a certain probability of transitioning to C3.</li>
<li>When C3 is surrounded by a certain density of B1, B2, B3, C1, C2, or C3, there is a certain probability of transitioning to A.</li>

</ol>
<h3>Results</h3>
<p>The E. coli BL21(DE3) culture was initiated by inoculating it with a 3% inoculum size into 15 ml of antibiotic-free Luria-Bertani (LB) medium. The culture was then grown until it reached an optical density (OD) at 600 nm of 0.6-0.8. After that, IPTG was added to a final concentration of 20 mM, and the culture was further incubated. Subsequently, samples were collected and prepared for microscopy analysis by staining them with crystal violet, followed by microscopic observation.We collected samples of the culture at 0 hours, 1 hour, 2 hours, and 4 hours for further analysis. The comparison between the observed results and the modeling results is as follows.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/d-cellular-automaton.gif" width="500"/> </div>
<center><b>Fig. 1 Cellular automaton</b></center>
<p>&nbsp;</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/e-contrast.jpg" width="600"/> </div>
<p><center><b>Fig. 2 Cellular automaton modeling compared with actual bacterial growth conditions
</b></center></p>
<h3>Reference</h3>
<p>[1]Wen, Y., Liu, X., Li, Y., Li, J., Xia, C., Zhou, G., Zhang, W., Zhao, W., Chen, X., &amp; Wang, P. G. (2009). Remodeling bacterial polysaccharides by metabolic pathway engineering. Proceedings of the National Academy of Sciences, 106(12), 4601-46061</p>
<p>&nbsp;</p>
<h2>Metabolic pathway of filamentation：Dynamic Model</h2>
<h3>Overview</h3>
<p>Due to the filamentation process being based on the inhibition of bacterial division, we hope to establish a coordinated pathway for cell division to simulate the biochemical process of bacterial filamentation. The coordination within biological systems often relies on a considerable degree of complexity. Modeling protein interaction networks mathematically can assist us in gaining a better understanding of the regulation of the cell cycle. Furthermore, establishing this model can lead to accurate predictions and guide future experiments.</p>
<h3>Method and Model</h3>
<p>The dual-state switch based on CtrA is a core component of the model. It is activated by the GcrA protein and inhibited by cell division. <em>ctrA</em> is regulated by two promoters, namely <em>ctrA</em> P1 and <em>ctrA</em> P2. In early cells, the <em>ctrA</em> P1 promoter is activated by the GcrA protein and is inhibited by high concentrations of CtrA. Subsequently, the <em>ctrA</em> P2 promoter is activated by high concentrations of CtrA. Additionally, the phosphorylated form of the DivK protein can significantly accelerate the degradation rate of CtrA.</p>
<p>The Z-ring assembles at the midcell plane in preparation for cell division. After cell division, the Z-ring is degraded. The Fts protein is an important component of the Z-ring, and its expression is regulated by CtrA. For instance, <em>ftsQ</em> is only activated by CtrA expression in late pre-division cells. When Fts protein accumulates to a certain level, it initiates the assembly of the Z-ring. When Z-ring assembly is complete, it cooperates with phosphorylated DivK to promote the degradation of CtrA.</p>
<p>SulA has an inhibitory effect on Escherichia coli FtsZ assembly. SulA is a small protein induced in Escherichia coli during the DNA damage SOS response. SulA binds to FtsZ and prevents cell division until DNA is repaired, at which point SulA is degraded by proteolysis.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/a-1.png" width="600"/> </div>
<center><b>Fig. 3 Metabolic pathway of filamentation</b></center>
<center>
<figure><table>
<thead>
<tr><th style='text-align:center;' >Symbol</th><th style='text-align:center;' >Meaning</th></tr></thead>
<tbody><tr><td style='text-align:center;' >k<sub>s,CtrA-P1</sub></td><td style='text-align:center;' >Rate constant for the synthesis of CtrA-P1 due to the activation of the CtrA-P1 promoter</td></tr><tr><td style='text-align:center;' >k<sub>s,CtrA-P2</sub></td><td style='text-align:center;' >Rate constant for the synthesis of CtrA-P2 due to the activation of the CtrA-P2 promoter</td></tr><tr><td style='text-align:center;' >k<sub>d,CtrA1</sub></td><td style='text-align:center;' >Rate constant for the degradation of CtrA1</td></tr><tr><td style='text-align:center;' >k<sub>d,CtrA2</sub></td><td style='text-align:center;' >Rate constant for the degradation of CtrA2</td></tr><tr><td style='text-align:center;' >k<sub>s,GcrA</sub></td><td style='text-align:center;' >Rate constant for the synthesis of GcrA</td></tr><tr><td style='text-align:center;' >k<sub>d,GcrA</sub></td><td style='text-align:center;' >Rate constant for the degradation of GcrA</td></tr><tr><td style='text-align:center;' >k<sub>s,DnaA</sub></td><td style='text-align:center;' >Rate constant for the synthesis of DnaA</td></tr><tr><td style='text-align:center;' >k<sub>d,DnaA</sub></td><td style='text-align:center;' >Rate constant for the degradation of DnaA</td></tr><tr><td style='text-align:center;' >k<sub>s,Fts</sub></td><td style='text-align:center;' >Rate constant for the synthesis of Fts</td></tr><tr><td style='text-align:center;' >k<sub>d,Fts</sub></td><td style='text-align:center;' >Rate constant for the degradation of Fts</td></tr><tr><td style='text-align:center;' >k<sub>zring,open</sub></td><td style='text-align:center;' >Rate constant for the opening of Z-ring</td></tr><tr><td style='text-align:center;' >k<sub>zring,closed1</sub></td><td style='text-align:center;' >Rate constant for the closure of Z-ring (state 1)</td></tr><tr><td style='text-align:center;' >k<sub>zring,closed2</sub></td><td style='text-align:center;' >Rate constant for the closure of Z-ring (state 2)</td></tr><tr><td style='text-align:center;' >k<sub>s,DivK</sub></td><td style='text-align:center;' >Rate constant for the synthesis of DivK</td></tr><tr><td style='text-align:center;' >k<sub>d,DivK</sub></td><td style='text-align:center;' >Rate constant for the degradation of DivK</td></tr><tr><td style='text-align:center;' >k<sub>d,DivK-P</sub></td><td style='text-align:center;' >Rate constant for the degradation of DivK-P</td></tr><tr><td style='text-align:center;' >k<sub>trans,DivK</sub></td><td style='text-align:center;' >Rate constant for the transformation of DivK to DivK-P</td></tr><tr><td style='text-align:center;' >k<sub>trans,DivK-P</sub></td><td style='text-align:center;' >Rate constant for the transformation of DivK-P to DivK</td></tr><tr><td style='text-align:center;' >k<sub>s,I</sub></td><td style='text-align:center;' >Rate constant for the synthesis of I</td></tr><tr><td style='text-align:center;' >k<sub>d,I</sub></td><td style='text-align:center;' >Rate constant for the degradation of I</td></tr><tr><td style='text-align:center;' >k<sub>s,CcrM</sub></td><td style='text-align:center;' >Rate constant for the synthesis of CcrM</td></tr><tr><td style='text-align:center;' >k<sub>d,CcrM</sub></td><td style='text-align:center;' >Rate constant for the degradation of CcrM</td></tr><tr><td style='text-align:center;' >k<sub>m,cori</sub></td><td style='text-align:center;' >Rate constant for the synthesis of Cori</td></tr><tr><td style='text-align:center;' >k<sub>m,ctrA</sub></td><td style='text-align:center;' >Rate constant for the synthesis of CtrA</td></tr><tr><td style='text-align:center;' >k<sub>m,ccrM</sub></td><td style='text-align:center;' >Rate constant for the synthesis of CcrM</td></tr><tr><td style='text-align:center;' >k<sub>m,fts</sub></td><td style='text-align:center;' >Rate constant for the synthesis of Fts</td></tr><tr><td style='text-align:center;' >J<sub>i</sub></td><td style='text-align:center;' >Inactivation</td></tr><tr><td style='text-align:center;' >J<sub>CtrA-CtrA</sub></td><td style='text-align:center;' >Binding constant of CtrA-CtrA</td></tr><tr><td style='text-align:center;' >J<sub>DnaA-GcrA</sub></td><td style='text-align:center;' >Binding constant of DnaA-GcrA</td></tr><tr><td style='text-align:center;' >J<sub>Zring-Fts</sub></td><td style='text-align:center;' >Binding constant of Zring-Fts</td></tr><tr><td style='text-align:center;' >J<sub>m</sub></td><td style='text-align:center;' >Modulation</td></tr><tr><td style='text-align:center;' >J<sub>fts</sub></td><td style='text-align:center;' >Modulation of Fts</td></tr><tr><td style='text-align:center;' >J<sub>a</sub></td><td style='text-align:center;' >Activation</td></tr><tr><td style='text-align:center;' >J<sub>CtrA-CtrA</sub></td><td style='text-align:center;' >Activation of CtrA-CtrA</td></tr><tr><td style='text-align:center;' >J<sub>DnaA-CtrA</sub></td><td style='text-align:center;' >Activation of DnaA-CtrA</td></tr><tr><td style='text-align:center;' >J<sub>m,cori</sub></td><td style='text-align:center;' >Modulation of cori</td></tr><tr><td style='text-align:center;' >J<sub>d</sub></td><td style='text-align:center;' >Degradation</td></tr><tr><td style='text-align:center;' >J<sub>CtrA-DivK-P</sub></td><td style='text-align:center;' >Degradation of CtrA-DivK-P</td></tr><tr><td style='text-align:center;' >J<sub>m,ctrA</sub></td><td style='text-align:center;' >Modulation of CtrA</td></tr><tr><td style='text-align:center;' >J<sub>i,GcrA-CtrA</sub></td><td style='text-align:center;' >Inactivation of GcrA-CtrA</td></tr><tr><td style='text-align:center;' >J<sub>a,closed</sub></td><td style='text-align:center;' >Activation of closed</td></tr><tr><td style='text-align:center;' >J<sub>m,ccrM</sub></td><td style='text-align:center;' >Modulation of ccrM</td></tr></tbody>
</table></figure>
</center>
<p>Based on the model established in &quot;A Quantitative Study of the Division Cycle of Caulobacter crescentus Stalked Cells,&quot; we have made the following simplifications:</p>
<ul>
<li>We do not consider the spatial location of each protein within the cell.</li>
<li>We only consider the changes that occur in the proteins over the course of one cell cycle.</li>

</ul>
<p>These simplifications lead to the following pathway:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/1-1.png" width="600"/> </div>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/1-2.png" width="600"/> </div>
<h3>Results</h3>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/b-without-sula-70min.jpg" width="600"/> </div>
<p><center><b>Fig. 4 The expression levels of various proteins in the absence of SulA</b></center></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/a-with-sula-70min.jpg" width="600"/> </div>
<p><center><b>Fig. 5 The expression levels of various proteins in the presence of SulA</b></center></p>
<p>It can be observed that upon the introduction of the SulA gene, the Fts protein content can be rapidly reduced to very low levels, which is advantageous for inhibiting the assembly of the Z-ring, thereby facilitating bacterial elongation.</p>
<h3>Sensitivity Analysis</h3>
<p>Sensitivity analysis is a method for studying and analyzing the sensitivity of a system (or model) to changes in system parameters or external conditions, examining how changes in these factors affect the system&#39;s state or output. Sensitivity analysis helps determine which parameters have a significant impact on the system or model.</p>
<p>For the sake of analysis, the following simplifications have been made:</p>
<ul>
<li>The spatial location of each protein within the cell is not considered.</li>
<li>Only the changes that occur in the proteins over the course of one cell cycle are taken into account.</li>
<li>The probability of gene methylation (which can inhibit gene expression) is not considered.</li>
<li>The process by which CtrA activates <em>ccrM</em> and <em>ccrM</em> converts semi-methylated genes into fully methylated states is not considered. (Some genes may have decreased expression levels in the semi-methylated state but increased expression levels in the fully methylated state.)</li>

</ul>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/c-sen-analyze.jpg" width="600"/> </div>
<p><center><b>Fig. 6 Sensitivity Analysis</b></center></p>
<p>Sensitivity analysis identifies parameters that have a high sensitivity and significant impact on the model. In this case, the parameters with high sensitivity are k<sub>s,CtrA-P2</sub>, k<sub>d,CtrA1</sub>, k<sub>d,CtrA2</sub>, k<sub>s,Fts</sub>, k<sub>trans,DivK</sub>, and k<sub>trans,DivK-P</sub>.</p>
<p>Analyzing these parameters in the context of their biological significance, we can draw the following conclusions:</p>
<ol start='' >
<li><strong>High Synthesis and Dissociation Constants for CtrA:</strong> The high synthesis and dissociation constants for CtrA suggest that the concentration of CtrA is highly dependent on these parameters. This indicates that when designing pathways, it&#39;s essential to ensure that these parameters are not manipulated in a way that disrupts the normal expression of CtrA. Maintaining the appropriate level of CtrA is crucial for the proper functioning of the pathway.</li>
<li><strong>DivK Phosphorylation:</strong> DivK phosphorylation and the presence of DivK-P have a significant impact on CtrA degradation. High concentrations of DivK-P promote the degradation of CtrA. When designing the pathway, it may be beneficial to optimize components at this position, such as increasing the expression of DivK-P. This can lead to a decrease in Fts expression, ultimately inhibiting bacterial division and facilitating the filamentation process.</li>

</ol>
<p>In summary, these sensitivity analysis results provide valuable insights for pathway design, emphasizing the importance of carefully managing CtrA levels and considering the role of DivK phosphorylation in achieving the desired outcomes related to bacterial filamentation.</p>
<h3>Reference</h3>
<p>[1]Humphrey, S., MacVicar, T., Stevenson, A., Roberts, M., Humphrey, T. J., &amp; Jepson, M. A. (2011). SulA‐induced filamentation in Salmonella enterica serovar Typhimurium: effects on SPI‐1 expression and epithelial infection. Journal of Applied Microbiology, 111(1), 185-1962</p>
<h2>Attribution</h2>
<p>The modeling of the filamentation part is divided into two parts: one is the cellular automaton simulation of the group response promoter initiating the filamentation, and the other is the metabolic pathway dynamic model of the filamentation. Through the first part of the modeling, we can predict the growth pattern of bacteria, and control the filamentation ratio in the bacterial population according to the culture situation of silkifying bacteria in the experimental group, thereby optimizing the display of experimental results. Through the second part of the modeling, we can predict the temporal changes in the expression levels of various proteins during the filamentation process, and analyze which genetic components have a greater impact on the network. This lays the foundation for future experimental design.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Modeling of silicification prediction</h1><div class="container"><div class="horizontal-line"></div></div>
<h2>Overview</h2>
<p>The R5 peptide is displayed on the cell membrane and can catalyze the hydrolysis of TEOS and form a silica shell on the surface of E. coli. Through the transcription efficiency of the T7 promoter and the translation efficiency of the R5 peptide, the expression efficiency of the R5 peptide can be calculated. The Hill equation fitted to literature data can help us understand the relationship between R5 peptide concentration and reaction rate under reaction conditions. Based on these data and by analogy with the nucleation reaction, we conducted a preliminary mathematical modeling of the silicification of the cell membrane surface, which provided a reference for the silicification time in the experiment and predicted the optimization effect of the R5 peptide.</p>
<h2>Expression and catalytic efficiency of the R5 peptide</h2>
<h3>Method and Model：Dynamic Model</h3>
<p>Transcription: Referring to NYCU-2021 data, the transcription efficiency of the T7 promoter is 41.8 pg <sup>[1]</sup>RNA/min/ug DNA substrate. The molecular weight of dsDNA = (Number of nucleotides Similarly, its single-stranded mRNA transcript is 325146 (g/mol).</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/2-1.png" width="600"/> </div>
<p>Translation: The translation rate of E. coli is about 15AA/s, the size of INP-R5 is 338 AA, and the converted translation rate is 159.6 mol INP-R5/h.</p>
<p>Because the plasmid copy number stored in the chassis bacteria selected for the silica module is low, the initial number of DNA templates in the system is set to 5 molecules. In addition, according to the IPTG induction time in the experiment, the simulation time was set to 3 hours.</p>
<p>​ To facilitate modeling and prediction, we assume the following parameters：</p>
<center>
<figure><table>
<thead>
<tr><th>parameter</th><th>Description</th><th>Value</th><th>units</th></tr></thead>
<tbody><tr><td>K<sub>1</sub></td><td>Transcription rate</td><td>4.491*10<sup>-3</sup></td><td>h<sup>-1</sup></td></tr><tr><td>D<sub>1</sub></td><td>mRNA degradation rate</td><td>8.5</td><td>h<sup>-1</sup></td></tr><tr><td>K<sub>2</sub></td><td>Translation rate</td><td>159.6</td><td>h<sup>-1</sup></td></tr><tr><td>D<sub>2</sub></td><td>Protein degradation rate</td><td>19</td><td>h<sup>-1</sup></td></tr><tr><td>K<sub>3</sub></td><td>membrane localization rate</td><td>0.15</td><td>h<sup>-1</sup></td></tr><tr><td>D<sub>3</sub></td><td>Protein degradation rate during localization</td><td>0.05</td><td>h<sup>-1</sup></td></tr><tr><td>c<sub>0</sub></td><td>the initial number of DNA templates</td><td>5</td><td>molecule</td></tr></tbody>
</table></figure>
</center>
<p>The equations involved in the reaction are as follows:
<center><div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/2-2.png" width="600"/> </div></center></p>
<p>R5-catalyzed siliconization reaction appeared to be strongly cooperative and was well fit to the Hill equation.Based on data in the literature<sup>[2]</sup>sup>, we also fitted the Hill equation for this catalytic reaction.</p>
<h3>Results</h3>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/g-inp-r5.png" width="600"/> </div>
<p><center><b>Fig . 7 Expression and localization levels of INP-R5</b></center></p>
<p>​It can be seen from the results that three hours after INTP induction, the number of moles of INP-R5 localized on the membrane reached a high level, and the localization on the bacterial surface could reach a relatively large density.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/h-r5-sio2-hill.jpg" width="600"/> </div>
<p><center><b>Fig. 8 Hill equation for R5-catalyzed silicide reaction</b></center></p>
<p>According to the fitting results, it is easy to get the fitting parameter: A = 19.3193，n = 4.1898，K = 1.3006. The Hill equation obtained by fitting is:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/2-3.png" width="600"/> </div>
<p>&nbsp;</p>
<p>(<strong>A</strong>: the maximum response value.；<strong>n</strong>: the Hill coefficient.；<strong>K</strong>: referred to as K<sup>d</sup> ——dissociation constant)</p>
<p>Based on the expression model of silicon peptide, it can be predicted that the silicon peptide can have a good catalytic effect at this expression level.</p>
<h3>Reference</h3>
<p>[1] Team:NYCU-Taipei/Model - 2021.igem.org</p>
<p>[2] L. Senior , M. P. Crump , C . Williams , P. J. Booth , S. Mann , A. W. Perriman and P. Curnow , <em>J. Mater. Chem. B</em>, 2015, <strong>3</strong> , 2607 —2614.</p>
<p>&nbsp;</p>
<h2>Simulation of Silica Generation on Bacterial Surfaces：L-H Model</h2>
<h3>Method and Model</h3>
<p>In early silica formation, cationic peptides and small-molecule amines are thought to promote local silicic acid aggregation via electrostatic interactions and hydrogen bonding. This encourages silicic acid dissociation into Si(OH)<sup>3−</sup> ions, facilitating initial condensation reactions that form branched polysilicic acids.</p>
<p>The Langmuir-Hinshelwood adsorption model describes the adsorption of gas molecules on the surface of a catalyst and the subsequent reactions that occur on the surface. It is very similar to the R5-catalyzed precipitation of silicon dioxide. Although it is generally applied to gas-solid interfaces and cannot be directly used for simulating siliconization models, in both cases, molecules need to overcome higher activation energy to reach the catalytic sites, leading to a decrease in reaction rate as the distance between reactants and the catalyst surface increases. </p>
<p>In addition, during the crystallization process, substances usually gather around a specific point or core to form new crystal nuclei, and the participation of high concentrations of molecules can promote the formation of new crystal nuclei.</p>
<p>​ Based on these, we designed the rules for R5 as the catalytic core to affect the surrounding environment:</p>
<ul>
<li>The simulation is performed on a three-dimensional grid, where each grid point in the X-Y plane represents a location on the bacterial surface. Silica growth occurs at these points.</li>
<li>R5 is randomly distributed on the grid as a center and serves as a nucleation point for silica growth. Each center point has the highest growth rate and will affect the surrounding silica precipitation rate.</li>
<li>In each iteration of the time period, the R5 core will bring additional growth rate to nearby points, and this growth rate will increase with the distance from R5.</li>
<li>The R5 rate is approximately 30% of the total sites on the surface.</li>
<li>If the silica content at a certain distance outside R5 is high enough, new crystal nuclei will be generated.</li>
<li>Near any point, silica will diffuse to a certain extent from high concentration to low concentration.</li>

</ul>
<h3>Results</h3>
<p><strong>1）Prediction of siliconization time</strong></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/i-si1.gif" width="600"/> </div>
<center><b>Fig. 9 Simulation of bacterial cell surface silicide catalyzed by R5</b></center>
<p>According to the results, it can be seen that within 48 iterations, the silicon concentration diffuses rapidly, and with only 30% of the catalytic center, the silicon concentration in the reaction plane can basically reach saturation. In the experiment, we chose the catalytic time of 48 hours, and the actual silicon concentration iteration will definitely be shorter than one hour. This model can explain to a certain extent that when the silicification time is reached, silica has been relatively fully precipitated on the surface of E. coli.</p>
<p>After obtaining more experimental data, further improvements can be made to the model, providing guidance recommendations on the duration of silicification when facing different degrees of silicification requirements</p>
<p><strong>2）5R5 can improve catalytic efficiency</strong></p>
<p>&nbsp;</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/l-si.gif" width="600"/> </div>
<p><center><b>Fig. 10 Modified siliconization simulation based on catalytic efficiency of 5R5</b></center></p>
<p>In further improvements to the silicide module, we plan to optimize the sequence of the R5 peptide and use 5-R5 repeats instead. The catalytic ability of R5 mainly relies on the electrical properties of the surface of its constituent amino acids, so repeated sequences can improve its catalytic reaction efficiency to a certain extent. In the model, this manifests itself as an acceleration of the silicon growth rate in the catalytic center.
According to simulation results, when the rate is doubled, the number of iterations required to achieve the same catalytic effect is reduced from 48 to 20. It can be seen that it is a very feasible idea to improve the catalytic efficiency of the system by increasing the catalytic ability of R5 peptide.</p>
<h3>Reference</h3>
<p>[1] Hagemeyer, A., &amp; Volpe Jr., A. (2005). Catalysts: Materials. In G. L. Trigg (Ed.), Encyclopedia of Condensed Matter Physics (pp. 158-165). Elsevier. </p>
<p>[2] Lee, L. J. (1989). Modeling and computer simulation of reactive processing. Comprehensive Polymer Science and Supplements, 20, 575-617. </p>
<p>[3] Qi Lei, Jimin Guo, Fanhui Kong, Jiangfan Cao, Lu Wang, Wei Zhu, and C. Jeffrey Brinker (2021). Self-Assembly of Hierarchical Porous Metal–Organic Frameworks with Tunable Morphologies and Compositions for CO2 Capture and Conversion. Journal of the American Chemical Society, 143(17), 6305-6322.</p>
<p>[4] Xue, S.-H. (2017). Research on synthesis of functional inorganic materials based on bacterial surface display technology [Doctoral dissertation, Wuhan University of Technology</p>
<h2>Attribution</h2>
<p>In the silicification part, our main task is to predict the degree of silicification on the surface of Escherichia coli, to prove that the silicification time in the experiment can achieve good results, and to prove that changing the silicopeptide to 5R5 can significantly improve the silicification efficiency. The modeling work provides feasibility verification and improvement direction for the experiment.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Modeling of material property prediction</h1><div class="container"><div class="horizontal-line"></div></div>
<h2>Acoustics</h2>
<h3>Overview</h3>
<p>Porous materials are solid materials that have a large number of pores, which can use the air or other fluids in the pores to absorb sound waves, thereby reducing noise. The sound absorption performance of porous materials is related to their porosity, porosity ratio and pore size. Porosity is the ratio of the volume of pores in the material to the total volume of the material, porosity ratio is the ratio of the surface area of pores in the material to the total surface area of the material, and pore size is the diameter or width of the pores. Generally speaking, the larger the porosity, the higher the porosity ratio, and the smaller the pore size, the better the sound absorption effect of the material.</p>
<p>Low-frequency sound absorption (sound frequency less than 1000Hz) is a difficult problem in the field of acoustics, which is of great significance for improving the noise problems in the fields of architecture, transportation, industry and so on. Low-frequency sound waves have long wavelengths and strong penetration, so they need thick or heavy materials to effectively absorb them. However, these materials often occupy a large space or increase a lot of burden, which is not conducive to practical application. Therefore, finding a light and efficient low-frequency sound absorption material is an urgent need.</p>
<p>We obtained a porous material by stretching and cross-linking, silicifying bacterial cellulose, which has great potential in low-frequency sound absorption because it has micrometer-sized pores, high porosity ratio and adjustable gradient pore size. We used acoustic-related models and COMSOL software to simulate the sound absorption effect of the material. This shows that our material is an efficient low-frequency sound absorption material, which is expected to play a role in practical applications.</p>
<p>&nbsp;</p>
<h3>Preliminary simulation of sound absorption effect: DBM-MODEL</h3>
<p>The Delany-Bazley-Miki model is an empirical model used to describe the sound wave propagation characteristics of porous materials, which is a modification and improvement of the Delany-Bazley model. The Delany-Bazley model was proposed by Delany and Bazley in 1970, which is used to describe the acoustic characteristics of fibrous materials. It assumes that porous materials can be regarded as equivalent fluids with complex density and complex sound speed. The Delany-Bazley model only requires two parameters: flow resistance and porosity, and it gives the expressions of complex wave number and complex characteristic impedance of porous materials.</p>
<p>The Delany-Bazley-Miki model was proposed by Miki in 1990, who added a correction factor to the Delany-Bazley model to consider the viscous loss and thermal loss in porous materials. The Delany-Bazley-Miki model requires three parameters: flow resistance, porosity and correction factor, and it also gives the expressions of complex wave number and complex characteristic impedance of porous materials. The formulas of the Delany-Bazley-Miki model are as follows:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-1.png" width="600"/> </div>
<p>&nbsp;</p>
<p>where, <b>k</b> is the complex wave number of porous materials, <b>Z</b> is the complex characteristic impedance of porous materials, <b>ω</b> is the angular frequency of sound waves, <b>c<sub>0</sub></b> is the sound speed of saturated fluid, <b>ρ<sub>0</sub></b> is the density of saturated fluid, <b>f</b> is the frequency of sound waves, <b>σ</b> is the flow resistance of porous materials, <b>φ</b> is the porosity of porous materials, <b>α<sub>0</sub></b> is the correction factor of porous materials.</p>
<p>The method of calculating the sound absorption coefficient based on this model is to use the complex wave number and complex characteristic impedance to calculate the sound impedance of the porous material surface, and then calculate the sound absorption coefficient according to the reflection coefficient between the sound impedance and the incident sound wave. The formula of the sound absorption coefficient is as follows:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-2.png" width="600"/> </div>
<p>where, <b>&alpha;</b> is the sound absorption coefficient, <b>R</b> is the reflection coefficient, given by the following formula:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-3.png" width="600"/> </div>
<p>where, Z<sup>s</sup> is the sound impedance of the porous material surface, given by the following formula:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-4.png" width="600"/> </div>
<p>where, <b>d</b> is the thickness of porous materials, <b>Z<sub>0</sub></b> is the characteristic impedance of saturated fluid.
Pride empirical formula for flow resistanceThe pore flow resistance is the resistance to the air flow in porous materials, which is an important parameter of the acoustic characteristics of porous materials. The pore flow resistance is related to the porosity, pore structure, pore size, air viscosity and other factors of porous materials. Generally speaking, the larger the porosity, the smaller the pore flow resistance; the smaller the pore size, the larger the pore flow resistance. The theoretical methods are mainly divided into two types: empirical formula method and microscopic model method. The empirical formula method is to fit an empirical formula based on the geometric parameters and physical parameters of porous materials, which is used to estimate the pore flow resistance. Here we use the modified Pride empirical formula to solve the pore flow resistance, which is an empirical formula that can be used to describe the pore flow resistance of porous materials. It is based on the porosity, average pore diameter and air viscosity of porous materials to fit an approximate formula, which is suitable for porous materials with regular pore structure.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-5.png" width="550"/> </div>
<p>where, <b>&eta;</b> is the air viscosity, <b>&phi;</b> is the porosity, <b>d</b> is the average pore diameter.</p>
<p>&nbsp;</p>
<p>The assumptions of this model are as follows:</p>
<ul>
<li>Porous materials are composed of rigid skeleton and saturated fluid;</li>

</ul>
<ul>
<li>Porous materials have a uniform and isotropic structure;</li>
<li>The air flow in porous materials belongs to the low Reynolds number range;</li>
<li>The heat exchange in porous materials belongs to the thermal equilibrium range;</li>
<li>The sound wave frequency in porous materials does not exceed 10 kHz.</li>

</ul>
<p>The parameter of this model are as follows:</p>
<center>
<figure><table>
<thead>
<tr><th>Symbol</th><th>Expression</th><th>Description</th></tr></thead>
<tbody><tr><td>fmax</td><td>1600[Hz]</td><td>Maximum calculation frequency</td></tr><tr><td>Ha</td><td>40[cm]</td><td>Height of the air domain</td></tr><tr><td>Hp</td><td>2[cm]</td><td>Thickness of the sound absorbing material</td></tr><tr><td>Hpml</td><td>20[cm]</td><td>Height of the PML</td></tr><tr><td>sigma</td><td>56552[Pa*s/m^2]</td><td>Flow resistivity</td></tr><tr><td>W</td><td>20[cm]</td><td>Width</td></tr><tr><td>alpha</td><td>1-abs(R)^2</td><td>Sound absorption coefficient</td></tr><tr><td>R</td><td>aveop1(up(acpr.p_s/acpr.p_b))</td><td>Reflection coefficient</td></tr></tbody>
</table></figure>
</center>
<h4>Solution</h4>
<p>In COMSOL, the process of simulating sound waves and solving sound absorption coefficients using the Delany-Bazley-Miki model is roughly as follows:</p>
<ul>
<li>Build geometry: First, draw a rectangular region on a two-dimensional plane, as a perfectly matched layer (PML), which is used to absorb the sound waves at the boundary and avoid reflection. Then, draw another rectangular region inside the PML, as the air domain, which is used to propagate sound waves. Finally, draw a rectangular region on one side of the air domain, as the sound absorbing material, which is used to absorb sound wave energy. The size and position of each region can be adjusted according to the actual situation.</li>
<li>Define physical field: In COMSOL, select the pressure acoustics (frequency domain) interface in the acoustics module, which is used to describe the propagation of sound waves in fluids and porous materials. Then, apply the perfectly matched layer boundary condition on the PML region, which is used to simulate the boundary at infinity. Apply the background field boundary condition on the air domain, which is used to specify the frequency, amplitude, phase and direction of the incident sound wave. Apply the impedance boundary condition on the sound absorbing material, which is used to specify the surface impedance of the sound absorbing material. Apply the continuity boundary condition on the interface between the air domain and the sound absorbing material, which is used to ensure the continuity of pressure and normal velocity.</li>
<li>Define material properties: In COMSOL, select the built-in air (standard atmosphere) material, and assign it to the air domain. Then, create a new material in the material library, and assign it to the sound absorbing material. In the properties of this material, select the equivalent fluid model, and select the Delany-Bazley-Miki model. Then, enter the parameters such as porosity, flow resistance and correction factor of the sound absorbing material.</li>
<li>Meshing: In COMSOL, select the finite element method mesh generator, and choose the appropriate mesh size and type according to the complexity and accuracy requirements of the geometry. Generally speaking, the mesh should be fine enough to capture the wavelength changes of sound waves and avoid numerical errors. At the same time, the mesh should not be too dense, so as not to increase the calculation time and memory consumption.</li>
<li>Solve: In COMSOL, select the frequency domain solver, and enter the frequency range and step size of interest. Then, run the solver and wait for the calculation results.</li>
<li>Post-processing: In COMSOL, different post-processing tools can be used to analyze and visualize the calculation results. Use the curve graph tool to draw the curve of the sound absorption coefficient versus frequency, use the color map tool to show the sound pressure distribution in different regions.</li>

</ul>
<h4>Results</h4>
<p>From the sound pressure distribution map, we can see that the sound pressure attenuates after passing through the material; and the solution result of the sound absorption coefficient shows the potential of the material for sound absorption, but limited by the model only using the flow resistance as a variable, without considering the pore size distribution and other factors of the material, we think that the sound absorption performance of the material can be further explored.</p>
<div align="center"> <img src='https://static.igem.wiki/teams/4614/wiki/model/1-sound-pressure-distribution-map.png' target='_blank'  width="600"></div>
<p><center><b>
Fig. 11 Sound pressure distribution map
</b></center></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/2-sound-absorption-coefficient-distribution-at-different-frequencies.png" width="600"/> </div>
<p><center><b>Fig. 12 Sound absorption coefficient distribution at different frequencies</b></center></p>
<h3>Iterative scheme: JCAL-3 parameter MODEL</h3>
<p>The Delany-Bazley-Miki model is an empirical semi-analytical model, which assumes that porous materials are homogeneous, isotropic, infinite, and only considers the viscous loss and thermal loss of the pore fluid. After using a simple exploration, we found that the material has great potential in low-frequency sound absorption, and we think that the Delany-Bazley-Miki model is too simplified, and our material has some structural heterogeneity or nonlinearity, so we iterated our model to further explore the sound absorption performance of the material.</p>
<p>The JCAL model is an analytical model based on the microstructure, which considers the coupling effect of the pore fluid and the porous matrix. At the same time, we placed the material in a Helmholtz resonator and an impedance tube, using the resonance of the air cavity to further exploit the sound absorption performance of the material.</p>
<p>&nbsp;</p>
<p>The JCAL model is an empirical model used to describe the sound wave propagation in porous materials, which was proposed by Johnson, Champoux, Allard and Lafarge et al. in 1991. The model assumes that porous materials are equivalent fluid-solid composite systems composed of rigid skeleton and saturated fluid, which can be described by frequency-dependent effective fluid density and effective fluid bulk modulus¹². The formulas of the model are as follows:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-6.png" width="500"/> </div>
<p>where, <b>&rho;<sub>eq</sub></b> and <b>K<sub>eq</sub></b> are the effective fluid density and effective fluid bulk modulus, respectively, <b>&rho;<sub>0</sub></b> and <b>K<sub>0</sub></b> are the density and bulk modulus of the saturated fluid, respectively, <b>&omega;</b> is the angular frequency of the sound wave, <b>&sigma;</b> and <b>&sigma;&#39;</b> are the viscous flow resistance and thermal flow resistance of the porous material, respectively, <b>&phi;</b> is the porosity of the porous material, <b>&alpha;<sub>&infin;</sub></b> is the tortuosity of the porous material, <b>&mu;</b> is the dynamic viscosity of the fluid, <b>&Lambda;</b> and <b>&Lambda;&#39;</b> are the viscous characteristic length and thermal characteristic length of the porous material, respectively, <b>N<sub>Pr</sub></b> is the Prandtl number.</p>
<p>The model requires 6 non-acoustic parameters to predict the acoustic characteristics of porous materials, but in practical applications, these parameters are often difficult to measure or estimate. Therefore, Lafarge et al. proposed a three-parameter model based on the JCAL model in 1997, which only requires three parameters: porosity, viscous flow resistance and thermal flow resistance. The model simplifies the square root terms in the JCAL model by introducing two correction factors, and assumes that the viscous characteristic length and thermal characteristic length are proportional to the viscous flow resistance and thermal flow resistance, respectively. The formulas of the model are as follows:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-7.png" width="500"/> </div>
<p>where, <b>A<sub>v</sub></b> and <b>B<sub>v</sub></b> are the viscous correction factors, given by the following formulas:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-8.png" width="400"/> </div>
<p>Similarly, <b>A<sub>t</sub></b> and <b>B<sub>t</sub></b> are the thermal correction factors, given by the following formulas:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-9.png" width="400"/> </div>
<p>The method of calculating the sound absorption coefficient based on this model is the same as the JCAL model, that is, using the equivalent fluid parameters to calculate the sound impedance of the porous material surface, and then calculating the sound absorption coefficient according to the reflection coefficient between the sound impedance and the incident sound wave. The formula of the sound absorption coefficient is as follows:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-10.png" width="400"/> </div>
<p>where, <b>&alpha;</b> is the sound absorption coefficient, <b>R</b> is the reflection coefficient, given by the following formula:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-11.png" width="400"/> </div>
<p>where, Z<sup>s</sup> is the sound impedance of the porous material surface, given by the following formula:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-12.png" width="400"/> </div>
<p>where, Z<sup>c</sup> is the equivalent fluid characteristic impedance, given by the following formula:
</p>
    <div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-13.png" width="400"/> </div>
<p>where,<b>c<sub>eq</sub></b>is the equivalent fluid sound speed, given by the following formula:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-14.png" width="450"/> </div>
<p><strong>d</strong> is the thickness of porous materials,<b>Z<sub>0</sub></b>is the characteristic impedance of saturated fluid.</p>
<p>&nbsp;</p>
<p>The assumptions of this model are as follows:</p>
<ul>
<li>Porous materials are composed of rigid skeleton and saturated fluid;</li>

</ul>
<ul>
<li>Porous materials have a uniform and isotropic structure;</li>
<li>The air flow in porous materials belongs to the low Reynolds number range;</li>
<li>The heat exchange in porous materials belongs to the thermal equilibrium range;</li>
<li>The sound wave frequency in porous materials does not exceed 10 kHz</li>

</ul>
<p>The parameter of this model are as follows:</p>
<figure><table>
<thead>
<tr><th>Symbol</th><th>Expression</th><th>Description</th></tr></thead>
<tbody><tr><td>rw</td><td>25[mm]</td><td>Waveguide radius</td></tr><tr><td>lw</td><td>1000[mm]</td><td>Waveguide length</td></tr><tr><td>rn</td><td>3.5[mm]</td><td>Neck radius</td></tr><tr><td>ln</td><td>5[mm]</td><td>Neck length</td></tr><tr><td>rc</td><td>25[mm]</td><td>Cavity radius</td></tr><tr><td>lc</td><td>40[mm]</td><td>Cavity length</td></tr><tr><td>lcp</td><td>21[mm]</td><td>Porous layer thickness</td></tr><tr><td>mu</td><td>eta(T[1/K])[Pa*s]</td><td>Dynamic viscosity</td></tr><tr><td>gamma</td><td>1.4</td><td>Specific heat ratio</td></tr><tr><td>Cp</td><td>Cp(T[1/K])[J/(kg*K)]</td><td>Constant pressure heat capacity</td></tr><tr><td>rho</td><td>rho(pA[1/Pa],T[1/K])[kg/m^3]</td><td>Density</td></tr><tr><td>k_iso ; kii = k_iso, kij = 0</td><td>k(T[1/K])[W/(m*K)]</td><td>Thermal conductivity</td></tr><tr><td>c</td><td>cs(T[1/K])[m/s]</td><td>Sound speed</td></tr><tr><td>epsilon</td><td>0.95</td><td>Porosity</td></tr><tr><td>s_m</td><td>0.00004[m]</td><td>Average pore size</td></tr><tr><td>sigma_s</td><td>0.52</td><td>Standard deviation of pore size distribution</td></tr></tbody>
</table></figure>
<h4>Solution</h4>
<p>A Helmholtz resonator is a device that can produce sound wave resonance at a specific frequency, consisting of a closed cavity and a narrow tube connected to the outside. Sound absorbing material is a material that can absorb sound wave energy, usually composed of porous or fibrous structures. In comsol, the combined effect of the Helmholtz resonator and the sound absorbing material can be simulated, and their reflection and transmission of sound waves can be tested in the impedance tube. The principle and steps of the simulation are as follows:</p>
<p>In the impedance tube, sound waves are incident from one port, pass through the Helmholtz resonator and the sound absorbing material, and exit from another port. According to the pressure and velocity of the incident and exit sound waves, the reflection coefficient and transmission coefficient can be calculated, and then the reflection loss, transmission loss, and sound absorption coefficient can be obtained. Reflection loss indicates the proportion of energy that sound waves are reflected back by the Helmholtz resonator and the sound absorbing material, transmission loss indicates the proportion of energy that remains after sound waves pass through the Helmholtz resonator and the sound absorbing material, and sound absorption coefficient indicates the proportion of energy that sound waves are absorbed by the Helmholtz resonator and the sound absorbing material.</p>
<p>The following are solving steps:</p>
<ul>
<li>In comsol, select the Pressure Acoustics (Frequency Domain) interface in the Acoustics Module, which is used to describe the propagation of sound waves in fluids and porous materials.</li>
<li>Draw a cylindrical region in three-dimensional space as the impedance tube. Draw a spherical region on one side of the impedance tube as the cavity of the Helmholtz resonator. Draw a cylindrical region between the cavity and the impedance tube as the narrow tube of the Helmholtz resonator. Draw a cylindrical region on the other side of the impedance tube as the sound absorbing material. The size and position of each region can be adjusted according to the actual situation.</li>
<li>Apply the Acoustic Port boundary condition at both ends of the impedance tube, which is used to specify the frequency, amplitude, phase, and direction of the incident sound wave. Apply the Continuity boundary condition on the interface between the Helmholtz resonator and the sound absorbing material, which is used to ensure the continuity of pressure and normal velocity.</li>
<li>In comsol, select the built-in Air (Standard Atmosphere) material and assign it to the impedance tube, cavity, and narrow tube. Then, create a new material in the material library and assign it to the sound absorbing material. In the properties of the material, select the Porous Media Acoustics model and choose the Delany-Bazley-Miki model or another suitable model. Then, enter the porosity, flow resistance, correction factor, and other parameters of the sound absorbing material.</li>
<li>In comsol, select the finite element method mesh generator and choose the appropriate mesh size and type according to the complexity and accuracy requirements of the geometry. Generally speaking, the mesh should be fine enough to capture the wavelength variation of sound waves and avoid numerical errors. At the same time, the mesh should not be too dense to avoid increasing the calculation time and memory consumption.</li>
<li>In comsol, select the frequency domain solver and enter the frequency range and step size of interest. Then, run the solver and wait for the calculation results.</li>
<li>In comsol, different post-processing tools can be used to analyze and visualize the calculation results. For example, the curve graph tool can be used to draw the reflection loss, transmission loss, and sound absorption coefficient curves as functions of frequency; the color map tool can be used to show the sound pressure distribution in different regions; the arrow graph tool can be used to show the velocity vector field in different regions, etc.</li>

</ul>
<h4>Results</h4>
<p>The 3-parameter model of JCAL shows the sound absorption effect of the material more accurately than the Delany-Bazley-Miki model, indicating that the material has a high sound absorption coefficient in the low frequency range of 400-600 Hz, proving the excellent potential of the material for low frequency sound absorption.</p>
<p>&nbsp;</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/3-sound-pressure-distribution-in-impedance-tube.png" width="600"/> </div>
<center><b>Fig. 13 Sound pressure distribution in impedance tub</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/4-sound-intensity-distribution-in-impedance-tube.png" width="600"/> </div>
<center><b>Fig. 14 Sound intensity distribution in impedance tube</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/5-sound-absorption-coefficient-at-different-frequencies-jcal-3parameter.png" width="600"/> </div>
<center><b>Fig. 15 Sound absorption coefficient at different frequencies(JCAL-3parameters Model)</b></center>
<h3>Reference</h3>
<p>[1]Miki, Y. (1990). Acoustical properties of porous materials - Modifications of Delany-Bazley models. Journal of the Acoustical Society of Japan (E), 11(1), 19-241</p>
<p>[2]Komatsu, T. (2008). Improvement of the Delany-Bazley and Miki models for fibrous sound-absorbing materials. Acoustical Science and Technology, 29(2), 121-129</p>
<p>[3]Johnson, D. L., Champoux, Y., Allard, J. F., &amp; Lafarge, D. (1996). The dynamic compressibility of air in porous structures at audible frequencies. The Journal of the Acoustical Society of America, 100(1), 331-342</p>
<p>[4]COMSOL. (2020). Tutorial model of a Helmholtz resonator with a porous layer [PDF file]. COMSOL</p>
<p>&nbsp;</p>
<h2>Micromechanics</h2>
<h3>Overview</h3>
<p>In order to further explore more applications of our bio-based new material, we attempted to use the silica fibers obtained from bacterial filamentation and silicification as the skeleton, and fill the gap with compacted straw material, as a new type of composite material. Compacted straw is a biomass material made from agricultural waste, which has the characteristics of low cost, renewable, environmental friendly, heat insulation, etc. This composite material aims to balance the economy and performance, and understand the application potential of the new material as a building material by exploring the mechanical properties of this composite material. We used the micromechanics model of COMSOL to simulate the stress distribution of the composite material. The micromechanics model is a cell-based method that calculates the homogenized properties of the composite material by analyzing a representative volume element (RVE) with periodic boundary conditions, and verifies it with the rule of mixtures (ROM).</p>
<p>&nbsp;</p>
<h3>Method and Model</h3>
<p>We analyzed the simplified micromechanics model of the basic unit with periodic boundary conditions. The basic unit is a representative volume element (RVE) that can form the complete structure of the composite material by repeating itself. In this model, the basic unit is made of a single silica fiber placed in the center of the straw matrix. The fiber volume fraction is variable, and the stress distribution and homogenized elasticity of the composite material are calculated according to the respective properties of the fiber and the matrix, and the results are compared with the values obtained according to the rule of mixtures (ROM).</p>
<p>RVE analysis is a method based on micromechanics, which calculates the homogenized properties of the composite material by analyzing a representative volume element (RVE) with periodic boundary conditions. RVE is a method for simulating the microstructure and physical phenomena of composite materials, which assumes that the composite material is composed of a cell with periodic boundary conditions arranged repeatedly. In this way, only the response of one cell needs to be analyzed to obtain the macroscopic properties of the composite material, such as elastic modulus, stress, etc. The mathematical formulas and explanations of RVE analysis are as follows:</p>
<p><ul>
  <li>Assume that the composite material is composed of two phases, fiber and matrix, with volume fractions of <b>v<sub>f</sub></b> and <b>v<sub>m</sub></b>, respectively, satisfying <b>v<sub>f</sub> + v<sub>m</sub> = 1</b>.</li>
  <li>Assume that the material properties of the fiber and matrix are <b>E<sub>f</sub></b>, <b>G<sub>f</sub></b>, <b>&nu;<sub>f</sub></b>, and <b>E<sub>m</sub></b>, <b>G<sub>m</sub></b>, <b>&nu;<sub>m</sub></b>, respectively, representing Young&#39;s modulus, shear modulus and Poisson&#39;s ratio.</li>
  <li>Assume that the homogenized properties of the composite material are <b>E<sub>c</sub></b>, <b>G<sub>c</sub></b>, <b>&nu;<sub>c</sub></b>, respectively, representing Young&#39;s modulus, shear modulus and Poisson&#39;s ratio.</li>
  <li>Assume that the geometric shape of the cell is a cube composed of a cylindrical fiber placed in the center of the matrix, as shown in Figure. The radius of the fiber is <b>r<sub>f</sub></b>, and the side length of the cell is <b>l</b>, satisfying <b>v<sub>f</sub> = &pi; r<sub>f</sub><sup>2</sup> / l<sup>2</sup></b>.</li>
</ul></p>
<p>&nbsp;</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/6-basic-unit.png" width="400"/> </div>
<p><center><b>Fig. 16 Basic unit</b></center></p>
<p><ul> <li>Assume that the boundary conditions of the cell are periodic, that is, the displacement and stress on the corresponding faces are equal, so that the response of the cell is consistent with the macroscopic response of the composite material.</li> <li>Set the load of the cell as the macroscopic strain <b>&epsilon;</b>, that is, apply the corresponding displacement on the six faces of the cell, so as to simulate the behavior of the composite material under different loading conditions.</li> <li>Through finite element analysis, the stress distribution <b>&sigma;</b> of the cell can be calculated, and by integrating the stress of the cell, the homogenized stress <b>&amp;bar;&sigma;</b> of the composite material can be obtained, that is,</li> </ul></p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/4-1.png" width="400"/> </div>
<p>where <b>V</b> is the volume of the cell, that is, <b>V = l<sup>3</sup></b>.</p>
<ul>
<li>By using the stress-strain relationship, the homogenized elastic modulus <b>E<sub>c</sub></b>, shear modulus <b>G<sub>c</sub></b>, and Poisson&#39;s ratio <b>&nu;<sub>c</sub></b> of the composite material can be obtained, that is,</li>

</ul>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/4-2.png" width="200"/> </div>
<p>where <b>&amp;bar;σ<sub>ij</sub></b> and <b>ε<sub>ij</sub></b> respectively represent the components of the homogenized stress and macroscopic strain, and the subscripts 1, 2, 3 respectively represent the x, y, z directions of the cell.</p>
<p>&nbsp;</p>
<p>The following are the parameter definitions and solution process of comsol:</p>
<center>
<figure><table>
<thead>
<tr><th>Parameter</th><th>Value</th><th>Description</th></tr></thead>
<tbody><tr><td>para</td><td>0</td><td>Nondimensional parameter</td></tr><tr><td>l</td><td>0.1[m]</td><td>Unit cell length</td></tr><tr><td>V</td><td>l^3</td><td>Unit cell volume</td></tr><tr><td>v_f</td><td>0.1</td><td>Fiber volume fraction</td></tr><tr><td>v_m</td><td>1-v_f</td><td>Straw volume of fraction</td></tr><tr><td>V_f</td><td>v_f*V</td><td>Fiber volume</td></tr><tr><td>r_f</td><td>sqrt(V_f/(pi*l))</td><td>Fiber radius</td></tr><tr><td>E1_f</td><td>200[GPa]</td><td>Fiber Young’s modulus, 11 direction</td></tr><tr><td>E2_f</td><td>10[GPa]</td><td>Fiber Young’s modulus, 22 direction</td></tr><tr><td>G12_f</td><td>10[GPa]</td><td>Fiber shear modulus, 12 direction</td></tr><tr><td>G23_f</td><td>5[GPa]</td><td>Fiber shear modulus, 23 direction</td></tr><tr><td>nu12_f</td><td>0.2*para</td><td>Fiber Poisson’s ratio, 12 direction</td></tr><tr><td>nu23_f</td><td>0.07*para</td><td>Fiber Poisson’s ratio, 23 direction</td></tr><tr><td>E_m</td><td>1[GPa]</td><td>Straw Young’s modulus</td></tr><tr><td>nu_m</td><td>0.32*para</td><td>Straw Poisson’s ratio</td></tr><tr><td>G_m</td><td>E_m/2</td><td>Straw shear modulus</td></tr><tr><td>rho_f</td><td>1500[kg/m^3]</td><td>Fiber density</td></tr><tr><td>rho_m</td><td>500[kg/m^3]</td><td>Straw density</td></tr><tr><td>nu12</td><td>nu12_f<em>v_f+nu_m</em>v_m</td><td>Lamina Poisson’s ratio</td></tr><tr><td>E1</td><td>E1_f<em>v_f+E_m</em>v_m</td><td>Lamina Young’s modulus 11, from rule of mixture</td></tr><tr><td>E2</td><td>E2_f<em>E_m/(v_f</em>E_m+v_m*E2_f)</td><td>Lamina Young’s modulus 22, from rule of mixture</td></tr><tr><td>G12</td><td>G12_f<em>G_m/(v_f</em>G_m+v_m*G12_f)</td><td>Lamina shear modulus 12, from rule of mixture</td></tr></tbody>
</table></figure>
</center>
<p>&nbsp;</p>
<ul>
<li>Define the geometry: This paper uses a cube composed of a cylindrical silica fiber placed in the center of the straw matrix as the geometry of the cell. The side length of the cell is 0.1 m, and the radius of the fiber is <b>r<sub>f</sub></b>, satisfying <b>v<sub>f</sub> = πr<sub>f</sub><sup>2</sup> / l<sup>2</sup></b>, where <b>v<sub>f</sub></b> is the volume fraction of the fiber, and <b>l</b> is the side length of the cell. In this paper, <b>v<sub>f</sub></b> is set as a parameter, which can be changed in the subsequent analysis to study its effect on the performance of the composite material.</li>
<li>Define the material properties: Refer to the relevant literature to obtain the material properties of the silica fiber and the straw building material, as shown in the table below. These material properties include elastic modulus, shear modulus, Poisson&#39;s ratio, density, and thermal expansion coefficient, etc. In this paper, the Poisson&#39;s ratio of the fiber and the resin are multiplied by a dimensionless parameter para, which is used to control the value of the Poisson&#39;s ratio. When para is 0, the Poisson&#39;s ratio is 0, indicating that the material is incompressible. When para is 1, the Poisson&#39;s ratio is the value given in the table, indicating that the material is compressible.</li>


</ul><center>
<figure><table>
<thead>
<tr><th>Silicon fiber material properties.</th><th>Value</th></tr></thead>
<tbody><tr><td>{E1f, E2f, E3f}</td><td>{200, 10, 10} GPa</td></tr><tr><td>{G12f, G23f, G13f}</td><td>{10, 5, 5} GPa</td></tr><tr><td>{υ12f, υ23f, υ13f}</td><td>{0.17, 0.17, 0.17}</td></tr><tr><td>ρf</td><td>1500 kg/m3</td></tr></tbody>
</table></figure>
<figure><table>
<thead>
<tr><th>Compacted straw building material properties.</th><th>Value</th></tr></thead>
<tbody><tr><td>Em</td><td>1 GPa</td></tr><tr><td>υm</td><td>0.32</td></tr><tr><td>ρm</td><td>500 kg/m3</td></tr></tbody>
</table></figure>
</center>
<ul>
<li>Define the physical field: This paper uses the solid mechanics and thermal coupling two physical fields of COMSOL to simulate the mechanical and thermal properties of the composite material. The solid mechanics physical field is used to calculate the stress distribution and homogenized elastic properties of the cell, and the thermal coupling physical field is used to calculate the thermal stress distribution and homogenized thermal expansion coefficient of the cell. In this paper, the fiber and matrix are defined as two different physical domains, and the interface between them is defined as a contact pair, which is used to transfer stress and heat flow.</li>
<li>Define the boundary conditions: This paper uses the periodic boundary conditions of COMSOL to simulate the periodic structure of the cell. The periodic boundary conditions require that the displacement and stress on the corresponding faces are equal. This ensures that the response of the cell is consistent with the macroscopic response of the composite material.</li>
<li>Define the load: This paper uses the macroscopic strain load of COMSOL to simulate the behavior of the composite material under different loading conditions. The macroscopic strain load is a method of applying the corresponding displacement on the six faces of the cell to produce the macroscopic strain.</li>
<li>Define the solver: This paper uses the steady-state solver of COMSOL to solve the stress and thermal stress distribution of the cell. The steady-state solver is a solver for solving static or steady-state problems, which does not consider the time factor, and only focuses on the results in the equilibrium state. In this paper, the tolerance of the solver is set to 0.001, to ensure the accuracy of the solution.</li>
<li>Define the post-processing: This paper uses the post-processing function of COMSOL to calculate the homogenized properties of the composite material, such as elastic modulus, shear modulus, Poisson&#39;s ratio, thermal expansion coefficient, etc. The post-processing function is a function for analyzing and processing the solution results, which can provide various calculation and visualization tools. In this paper, the integration, average, maximum, minimum and other post-processing operations are used to obtain the homogenized properties of the composite material, and compare them with the results of the rule of mixtures.</li>

</ul>
<h3>Results</h3>
<ul>
<li>The stress distribution of the cell shows the phenomenon of stress concentration and stress transfer between the fiber and the matrix. The stress of the fiber is greater than that of the matrix, indicating that the fiber bears more load. The stress of the matrix shows a ripple-like distribution around the fiber, indicating that the matrix plays a role of constraint and protection for the fiber.</li>
<li>The homogenized properties of the composite material show the influence of the volume fraction of the fiber and matrix on the performance of the composite material. When the volume fraction of the fiber increases, the elastic modulus, shear modulus and thermal expansion coefficient of the composite material increase, indicating that the high performance of the fiber has a positive impact on the performance of the composite material. The homogenized properties of the composite material are compared with the results of the rule of mixtures, and they are between the upper and lower bounds of the rule of mixtures, and closer to the actual properties, indicating the accuracy and effectiveness of the micromechanics model.</li>

</ul>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/7-silicon-fiber-stress-map.png" width="400"/> </div>
<center><b>Fig. 17 Silicon fiber stress map</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/8-matrix-stress-map.png" width="400"/> </div>
<center><b>Fig. 18 Matrix stress map</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/9-relationship-between-longitudinal-young-s-modulus-and-fiber-volume-fraction.png" width="400"/> </div>
<center><b>Fig. 19 Relationship between longitudinal Young’s modulus and fiber volume fraction</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/10-relationship-between-transverse-young-s-modulus-and-fiber-volume-fraction.png" width="400"/> </div>
<center><b>Fig. 20 Relationship between transverse Young’s modulus and fiber volume fraction</b></center>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/11-relationship-between-in-plane-shear-modulus-and-fiber-volume-fraction.png" width="400"/> </div>
<center><b>Fig. 21 Relationship between in-plane shear modulus and fiber volume fraction</b></center>
<h3>Reference</h3>
<p>[1]Guo, Z., Zhang, X., &amp; Liu, W. (2008). Research progress of multiscale methods in mechanics analysis of composite materials. Advances in Mechanics, 38(4), 433-446.</p>
<h2>Thermal and moisture transfer</h2>
<h3>Overview</h3>
<p>Evaporation in porous media involves three physical effects that need to be considered: fluid flow, heat transfer, and the transport of the involved liquids and gases. In this model, it is assumed that the liquid phase and gas phase are in equilibrium within the porous medium, and the model calculates the changing water saturation over time to simulate the thermal and moisture transfer in two-phase flow.</p>
<h3>Method and Model</h3>
<p>The model describes the process of laminar drying gas flowing through a porous medium containing moist air and liquid water.</p>
<p>First, it is necessary to select appropriate physical field interfaces to describe fluid flow, heat transfer, and mass transfer in the porous medium. Consider thermal and moisture transfer in the air, two-phase flow in the porous medium, moisture transport in the porous medium, heat transfer, and permeability.</p>
<p>Second, define the geometric shape, material properties, and boundary conditions of the porous medium. Material properties of the porous medium include porosity, permeability, thermal conductivity, specific heat capacity, and so on. Boundary conditions can be set as constant temperature, pressure, humidity, or given flow rates, heat flux, etc.</p>
<p>Third, set up the moisture phase change and evaporation processes within the porous medium. This can be achieved by adding appropriate source terms to the heat transfer and mass transfer equations.</p>
<p>Finally, select appropriate solver parameters and grid divisions, then run the simulation and analyze the results.</p>
 <center>
<figure><table>
<thead>
<tr><th style='text-align:center;' >Symbol</th><th style='text-align:center;' >Meaning</th></tr></thead>
<tbody><tr><td style='text-align:center;' >T<sub>0</sub></td><td style='text-align:center;' >Ambient temperature</td></tr><tr><td style='text-align:center;' >u<sub>0</sub></td><td style='text-align:center;' >Freestream velocity</td></tr><tr><td style='text-align:center;' >φ<sub>0</sub></td><td style='text-align:center;' >Ambient relative humidity</td></tr><tr><td style='text-align:center;' >φ<sub>1</sub></td><td style='text-align:center;' >Porous medium relative humidity</td></tr><tr><td style='text-align:center;' >S<sub>il</sub></td><td style='text-align:center;' >Irreductible liquid phase saturation</td></tr><tr><td style='text-align:center;' >por</td><td style='text-align:center;' >Porosity</td></tr><tr><td style='text-align:center;' >κ</td><td style='text-align:center;' >Permeability</td></tr><tr><td style='text-align:center;' >k<sub>s</sub></td><td style='text-align:center;' >Porous matrix thermal conductivity (Potato mat. prop. [Hadler et al.])</td></tr><tr><td style='text-align:center;' >cp<sub>s</sub></td><td style='text-align:center;' >Porous matrix heat capacity (Potato mat. prop. [Hadler et al.])</td></tr><tr><td style='text-align:center;' >ρ<sub>s</sub></td><td style='text-align:center;' >Porous matrix density (Potato mat. prop. [Hadler et al.])</td></tr></tbody>
</table></figure>
</center>
<p>In the moist air domain, it is assumed that no liquid water is present. This means that all moisture exists in the form of vapor as it exits the porous medium. The transport and thermodynamic properties of air containing water vapor can be described using the mixture law based on the content of water vapor and dry air. The compressible Navier-Stokes equations are solved to compute the velocity field and pressure field for free-flow, enabling the simulation of thermal and moisture convection transport. Another relevant effect in moisture transport is binary diffusion between vapor and air, which is simulated using the concentrated species equation. Although in the current configuration, the change in moist air density due to vapor transport is relatively small, this equation is more versatile and its computational cost is comparable to that of the dilute species equation.</p>
<p>In the heat transfer module, the primary equations used to simulate heat conduction, convection, and radiation in both solids and fluids are based on the conservation of energy equation:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/5-1.png" width="600"/> </div>
<p>In the equations, ρ represents density, Cp​ is specific heat capacity, T stands for temperature, t is time, k represents thermal conductivity, u represents velocity, and Q represents the heat source term.</p>
<p>Single-phase flow in porous media is described by the Brinkman equation, which is an equation that describes the flow of fluid in porous media, particularly in cases of fast-flowing fluids. It is an extension of Darcy&#39;s law. Darcy&#39;s law assumes a linear relationship between fluid velocity and pressure gradient, but this is only valid for low-speed flows. When fluid velocities are high, inertia effects and viscous shear effects cannot be ignored, and nonlinear terms need to be introduced to correct Darcy&#39;s law. The general form of the Brinkman equation is:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/5-2.png" width="600"/> </div>
<p>In the equations, ρ represents fluid density, u is fluid velocity, p is fluid pressure, μ is fluid dynamic viscosity, κ is the permeability of the porous medium, β is the inertial resistance coefficient, and F is the volume force. It can be observed that the Brinkman equation encompasses both the Navier-Stokes equation and Darcy&#39;s law as special cases. When κ approaches infinity, the Brinkman equation degenerates into the Navier-Stokes equation, and when β approaches zero, it degenerates into Darcy&#39;s law.</p>
<p>Moisture transport refers to the process of moisture migration from high-concentration regions to low-concentration regions within a porous medium. It is influenced by various factors, one of which is binary diffusion between vapor and air. Binary diffusion refers to the mass transfer phenomenon that occurs in a mixture of two different components due to differences in their concentrations. In a porous medium, binary diffusion between vapor and air affects the processes of moisture evaporation and condensation, thereby influencing moisture saturation and temperature distribution.</p>
<p>To simulate binary diffusion between vapor and air in a porous medium, we can use the concentrated species equation to describe the change in water vapor concentration. The concentrated species equation is a mass transfer equation that takes into account the non-dilute effects and can be expressed in the following form:</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/5-3.png" width="600"/> </div>
<p>In the equation, <b>ρ<sub>w</sub></b> represents water vapor density, <b>c<sub>w</sub></b> is water vapor concentration, <b>t</b> is time, <b>D<sub>wa</sub></b> is the diffusion coefficient between water vapor and air, <b>u<sub>w</sub></b> is the water vapor migration velocity, <b>u<sub>a</sub></b> is the air migration velocity, <b>z<sub>w</sub></b> represents the charge number of water vapor, <b>F</b> is Faraday&#39;s constant, <b>V</b> is the potential, <b>V<sub>T</sub></b> is the thermal potential, and <b>R<sub>w</sub></b> is the water vapor reaction term. This equation can be coupled with other physical field equations (such as heat transfer equations, fluid flow equations, etc.) to form a complete porous medium heat and mass transfer model.</p>
<h3>Results</h3>
<p>The simulation results indicate that in an environment with a wind speed of 0.1 m/s, after approximately 40000 seconds, the overall relative humidity of the material decreases to 0.1. This demonstrates that the material has excellent moisture retention properties.</p>
<div align="center"> <img src="https://static.igem.wiki/teams/4614/wiki/model/f-heat2-0.gif" width="600"/> </div>
<p>
<center><b>Fig. 21 Relationship between in-plane shear modulus and fiber volume fraction</b></center></p>
<h3>Reference</h3>
<p>[1]Bost, C. (2017, June 14). How to model heat and moisture transport in porous media with COMSOL [Blog post]. COMSOL</p>
<p>[2]Li, Y. (2016). Numerical solution of heat and moisture transfer model based on COMSOL equation modeling (Master’s thesis). Eindhoven University of Technology</p>
<h2>Attribution</h2>
<p>Our project aims to prepare a porous new material by silicifying, crosslinking and silicifying Escherichia coli. Due to time constraints, we were unable to obtain complete material samples, nor conduct physical experiments to measure the material’s various properties, and further explore the material’s application prospects. Therefore, we determined the material’s relevant parameters based on the preliminary data obtained from the experiment, and used the COMSOL multiphysics simulation software to numerically simulate the material’s properties, obtaining the material’s basic characteristics in mechanics, thermodynamics and acoustics, and preliminarily discovering the material’s application potential in the field of low-frequency noise reduction. In summary, we provided a reliable basis for the project’s application scenario analysis by predicting the material’s performance through numerical simulation.</p>
<p>&nbsp;</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>Contribution</h1><div class="container"><div class="horizontal-line"></div></div>
<p>We simulated the growth pattern of filamentous bacteria to determine the ratio of filamentous to non-filamentous bacteria at different time points. Based on our experimental results, future researchers can obtain bacteria with varying degrees of filamentation at different time intervals to fulfill the requirements for further studies.</p>
<br><br><div class="container"><div class="horizontal-line"></div></div><h1>How the model results affected the project design and development</h1><div class="container"><div class="horizontal-line"></div></div>
<p>The modeling results illustrate the working principles of each stage of the project and forecast the properties of the materials produced.</p>
<p>For the filamentation plate, the sensitivity analysis results of the filamentation model indicate that the expression of genes such as CtrA, DivK-P and others should be carefully controlled for their influence on the expression level of Fts; the cellular automaton simulation of the filamentation process agrees well with the experimental results, offring a prediction of the degree of filamentation.For the silicification plate,we built a mathematical model of R5-catalyzed silicification, predicted the silicification effect and time, and demonstrated the superiority of 5R5 in catalyzing silicification.Regarding material properties, we performed material property testing by model simulation and discovered that the material has the potential for low-frequency sound absorption, can resist a certain pressure, and has good water retention, providing guidance for finding more reliable application scenarios for the project.</p>
<p><b>Find more</b> <a href="https://gitlab.igem.org/2023/software-tools/cau-china">https://gitlab.igem.org/2023/software-tools/cau-china</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
    </PageText>

</template>

<style scoped>
.note{
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* img{
    width: 60vw;
} */
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
</style>
