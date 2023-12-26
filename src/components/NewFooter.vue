<script setup>

</script>

<template>
    <div class="guodu"></div>
    <div class="footer">
        
        <div class="image">
            <img src="https://static.igem.wiki/teams/4614/wiki/huanhuan.png">
        </div>
        <div class="link">
            <p>Project</p>
            <RouterLink :to="{name:'Description'}">Description</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Design'}">Design</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Engineering'}">Engineering</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Safety'}">Safety</RouterLink>
        </div>
        <div class="lablink">
            <p>Lab</p>
            <RouterLink :to="{name:'Modeling'}">Modeling</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Experiment'}">Experiment</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Notebook'}">Notebook</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Result'}">Result</RouterLink>
        </div>
        <div class="hplink">
            <p>HP</p>
            <RouterLink :to="{name:'HP'}">Human Practice</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Education'}">Education</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Collaborations'}">Collaborations</RouterLink>
        </div>
        <div class="partlink">
            <p>Parts</p>
            <RouterLink :to="{name:'Contribution'}">Contribution</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Parts'}">Parts</RouterLink>
        </div>
        <div class="teamlink">
            <p>Team</p>
            <RouterLink :to="{name:'Attribution'}">Attribution</RouterLink>
            <br>
            <br>
            <RouterLink :to="{name:'Team'}">Members</RouterLink>
        </div>
    </div>
    <div class="text">
        <span>The repository used to create this website is available at : 
            <a href="https://gitlab.igem.org/2023/cau-china">gitlab.igem.org/2023/cau-china</a>
        </span>
        <br>
        © 2023 - Content on this site is licensed under a Creative Commons Attribution 4.0 International license.
        <br>
    </div>
</template>

<style scoped>
.teamlink{
    position: absolute;
    top: 5%;
    left: 60%;
    z-index: 1;
}
.partlink{
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 1;
}
.hplink{
    position: absolute;
    top: 5%;
    left: 40%;
    z-index: 1;
}
.lablink{
    position: absolute;
    top: 5%;
    left: 30%;
    z-index: 1;
}
.guodu{
    height: 2vw;
}
.link{
    position: absolute;
    top: 5%;
    left: 20%;
    z-index: 1;
}
a{
    color: #82a6ab;
}
a:hover{
    color: white;
}
.text{
    position: relative;
    color:#ffffff;
    font-family: Lithos Pro;
    font-size: small;
    background-color: #59696b;
}
.image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 0;
    width: 100%;
    height: 100;
}
.footer {
  position: relative;
  justify-content: center;
  align-items: center;
  color:#ffffff;
  background-color: #59696b;/*这个改成图片的底色*/
  height: 50vh;
  width: 100%;
  font-family: 'Lithos Pro';
  font-size: small;
}
</style>
