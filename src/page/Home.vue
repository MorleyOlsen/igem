<script setup>
import Navbar from "../components/Navbar.vue"
import Loader from "../components/Loader.vue"
import Test from "../components/Test.vue" /*用于开头的左滑右滑*/
import Question from "../components/Question.vue"/*开头提问*/
import DaJiMu from "../components/DaJiMu.vue"/*搭积木的动画*/
// import Question2 from "../components/Question2.vue"/*中间提问*/
//import Guide from "../components/Guide.vue"
import RussiaBlock from "../components/RussiaBlock.vue"
import HomeHead from "../components/HomeHead.vue"
// import NewLine from "../components/NewLine.vue"
</script>

<template>
        <div>
            <Loader></Loader>
        </div>
    <div class="note"> 

        <div>
            <Navbar color="#122f59" />
            <!--former blue-->
        </div>
       
        <div id="head">
<HomeHead/>
        </div>
        
        <div>
            <Question />
        </div>
        
        <div>
            <Test />
            <br>
            <br>
            <br>
            <br>

        </div>

        <div class="temp">
            <h1>
                <br>
                
                In 2023, we CAU-China,
                <br>
                
                a group of crazy architects and researchers
                <br>
                
                are aiming to open up
                <br>
                
                <b>A NEW WORLD OF BIO-MATERIALS WITH <em>E.coli</em>!</b>
                <br>
                <br>
                <br>
        
  
                
            </h1>
        </div>

        <div>
            <DaJiMu />
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

        </div>
        <div>
            <img src="https://static.igem.wiki/teams/4614/wiki/description/true-jiaolian.gif" id="cl"/>
            <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/shengzhangpianduan.gif" id="sh"/>
            <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/guihuajiaolianwang.gif" id="si"/>
            <img src="https://static.igem.wiki/teams/4614/wiki/home222.png" alt="" id="lala">
    </div>


        <div class="turn">
            <RussiaBlock 
            img="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/f1.png"
            to="/description"
            />
            <RussiaBlock 
            img="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/f2.png"
            to="/model"
            />
            <RussiaBlock 
            img="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/f3.png"
            to="/contribution"
            />
            <RussiaBlock 
            img="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/f4.png"
            to="/attributions"
            />
            <RussiaBlock 
            img="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/f5.png"
            to="/human-practices"
            />
        </div>
        <div class="turnname">
            <h1>PROJECT  </h1>
            <h1>LAB</h1>
            <h1>PARTS</h1>
            <h1>   TEAM</h1>
            <h1>&nbsp;&nbsp;&nbsp;          HP   &nbsp;</h1>
        </div>

    </div>
</template>

<style scoped>
.guodu{
    height:5vw;
}
h1{
    font-size: 2.5em;
    line-height: 1.5em;

}

.lala{
    width:100vw;
    position: relative;
    z-index: 0;
}
h2{
    font-size: xx-large;
}
.turnname{
    margin-top: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 3%;
    margin-left: 1%;
    /* width: 15vw; */
}
@media (max-width:700px){
    p{
        font-size: 150%;
    }
}
@media (min-width:1200px){
    p{
        font-size: 200%;
    }
}
.turn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding:5vh;
}
.temp{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 3vw;
    margin-bottom: 3vw;
    height: 30vw;
    width: 100vw;
    background-image: url('https://static.igem.wiki/teams/4614/wiki/notebook/we-are.png');
    background-size: 100% 100%;
}
.note{
    color:blank;
    background-color: rgba(190,201,203,0.8);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#head{
    padding: 0;
    position: relative;
    height: 51vw;
    /* animation: example 5s linear infinite; */

}
#cl,#si,#sh{
    position: absolute;
    z-index: 1;
    width: 28.5vw;
}
#si{
    margin-top:51.1vw;
    margin-left:56.3vw;

}
#sh{
    margin-top:68.8vw;
    margin-left:10.3vw;

}
#cl{
    margin-top:88.8vw;
    margin-left:42.3vw;

}

</style>
