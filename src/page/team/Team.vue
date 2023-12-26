<script setup>
import Navbar from "../../components/Navbar.vue"
import Map from "../../components/Map.vue"
import Card from "../../components/Card.vue"
import Card1 from "../../components/Card1.vue";
</script>

<template>
  <div id="big">
    <div>
        <Navbar color="#e5a8b8" />
    </div>
    <img src="https://static.igem.wiki/teams/4614/wiki/description/home/team.png"/>

    <div class="note">
        <h1>Members</h1>
        <div class="wapper">
          <div>
            <center>
              <p>Mouse over the character
                  <br>
                  to see more info!
          </p></center></div>
            <!-- <img src="./第一套/try.png" alt=""> -->
            <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/lyx1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/lyx2.jpg"
        name="Liu Yuxiao"
        sign="Dream makes everyday count. My work makes every work my teammates do count."
        bottom="5.5vw"
        left="0"
        width="9vw"
      ></Map>
        
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/zxy1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/zxy2.jpg"
        name="Zhang Xiyuan"
        sign="The law of victory has been decided."
        bottom="7.5vw"
        left="66.5vw"
        width="16.5vw"
      ></Map>
      
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/xwk1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/xwk2.jpg"
        name="Xia Wanke"
        sign="AKA Morley Olsen, a normal uni-student who aims to master Algorithm before 2024. Responsible for wiki framework design & still incompetent in front-end stuff. Special thanks for Xu-pixel and suiyu4073 for their help on computer science study."
        bottom="9vw"
        left="7.1vw"
        width="12.15vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/wcz-1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/wcz2.jpg"
        name="Wang Chaozheng"
        sign="Hi，I am Wang Chaozheng, mainly works on Team Wiki. I hope to master knowledge and skills in practice with others iGEMers."
        bottom="4vw"
        left="64vw"
        width="11vw"
      ></Map>
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/lxj1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/lxj2.jpg"
        name="Liu Xiangjun"
        sign="Hello, I am Liu Xiangjun from CAU-China. I hope to bring happiness to the people around me with my enthusiasm.ヾ(｡･ω･｡)~"
        bottom="5.5vw"
        left="16.5vw"
        width="13vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/wcf1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/wcf2.jpg"
        name="Wei Chenfan"
        sign="Just believe. Believe without reason."
        bottom="0"
        left="0"
        width="12.9vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/hyh1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/hyh2.jpg"
        name="Huang Yaohan"
        sign="ego cogito ergo sum."
        bottom="0"
        left="7.65vw"
        width="9.5vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/zwy1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/zwy2.jpg"
        name="Zhu Wanying"
        sign="Grateful for a year of wandering through CAU-China's diverse teams, we've collectively realized our dream of exploring the world. Wishing all iGEMers to be a great adult and a cuter child."
        bottom="0"
        left="36.325vw"
        width="10.65vw"
      ></Map>
      
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/xlj1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/xlj2.jpg"
        name="Xu Linjie"
        sign="Synthetic biology is the future."
        bottom="0"
        left="45.4vw"
        width="13vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/fmd1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/fmd2.jpg"
        name="Feng Miaodi"
        sign="Hope for the best and prepare for the worst."
        bottom="0"
        left="56vw"
        width="9.5vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/ymc1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/ymc2.jpg"
        name="Yao Muchen"
        sign="What I cannot create, I do not understand."
        bottom="0"
        left="63.5vw"
        width="14vw"
      ></Map>


            <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/hxy1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/hxy2.jpg"
        name="Hua Xinying"
        sign="stay hungry，stay foolish."
        bottom="9.5vw"
        left="82.1vw"
        width="8vw"
      ></Map>

      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/zyw1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/zyw2.jpg"
        name="Zhao Yiwei"
        sign="Life is all about experience."
        bottom="0"
        left="73.5vw"
        width="16.5vw"
      ></Map>
     
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/sqh1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/sqh2.jpg"
        name="Sun Qianhui"
        sign="Glad to see you here! Hope to meet you again somewhere!"
        bottom="0"
        left="73vw"
        width="9.5vw"
      ></Map>
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/hyw1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/hyw2.jpg"
        name="Han Yawen"
        sign="IGEM is a wonderful experience. I've learned so much and made many friends because of it. Memory endures."
        bottom="0vw"
        left="16.5vw"
        width="10.65vw"
      ></Map>
      <Map
        figure1="https://static.igem.wiki/teams/4614/wiki/team/yjw1.png"
        figure2="https://static.igem.wiki/teams/4614/wiki/team/yjw2.jpg"
        name="Yu Jingwen"
        sign="I am Yu Jingwen, a member of CAU-China. I insist on exploring and be a sincere and powerful person."
        bottom="0"
        left="25vw"
        width="13.65vw"
      ></Map>

      
    

        <img  id="IGlogo" src="https://static.igem.wiki/teams/4614/wiki/team/igem-logo-light.png" alt="">
        <img src="https://static.igem.wiki/teams/4614/wiki/team/cau-china2023.png" alt="" id="OurLogo">
      </div>   
      <br>
      <br>

      <h1>Advisors</h1>
      <div class="Advisors-container">
        <center>
        <Card 
        name="Dong Lehan"
        figure="https://static.igem.wiki/teams/4614/wiki/team/donglehan.png"
        sign="To leave the phenotypic optimization in the hands of nature is inefficient and excruciatingly slow. Nowdays, we use synthetic biology to define success."
        >
        </Card>

        <Card 
        name="Liu Muhua"
        figure="https://static.igem.wiki/teams/4614/wiki/team/liumuhua.png"
        sign="I have gain a loooooooot from iGEM！"
        >
        </Card>

        <Card 
        name="Jiang Nanqi"
        figure="https://static.igem.wiki/teams/4614/wiki/team/jiangnanqi.png"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card>
      </center>
     
    </div>
   <br>
   <br>
    <h1>PI&Intructors</h1>
      <div class="PI&Intructors-container"> <center>
        <Card1 
        name="Wang Na"
        figure="https://static.igem.wiki/teams/4614/wiki/team/wangna.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1>

        <Card1 
        name="Tian Changfu"
        figure="https://static.igem.wiki/teams/4614/wiki/team/tianchangfu.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1>

        <Card1 
        name="Yu Shuyang"
        figure="https://static.igem.wiki/teams/4614/wiki/team/yushuyang.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1>

        <Card1 
        name="Yang Jinshui"
        figure="https://static.igem.wiki/teams/4614/wiki/team/yangjinshui.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1>

        <Card1 
        name="Li Baoguo"
        figure="https://static.igem.wiki/teams/4614/wiki/team/libaoguo.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1>

        <Card1 
        name="Liu Gang"
        figure="https://static.igem.wiki/teams/4614/wiki/team/liugang.jpg"
        sign="I am the guy who woke up at noon to find myself the leader of CAU_China. Mainly responsible for Human practice but keen on molecular biology experiments. I love driving, drinking, KTV, traveling, and hate everything about Covid-19."
        >
        </Card1></center>
    </div>
  </div>
      <img src="https://static.igem.wiki/teams/4614/wiki/team/team-zhibao.jpg" alt="" class="TeamPhoto">
    </div>
</template>

<style scoped>
#big{
  background-color: #e1d6da;
}
.wapper{
    position: relative;
    margin: 0 4vw;
    border: 2px solid black;
    width: 90vw;
    height: 40vw;
    background-color: #e1e3e8;
    box-shadow: 0 30px 30px rgba(0,0,0,0.5);
}
/* .wapper img{
    position: relative;
    z-index: 0;
} */
/* .wapper div .image:hover~ .smallpicture{
    filter: grayscale(800%) blur(2px)
} */

.poster{
    margin-top: 10vh;
    margin-left: 1vw;
    margin-right: 1vw;
    /* transform: -50%,0; */
    border: 2px solid black;
    width: 99vw;
}
.note{
    margin: 0 auto;
    color:blank;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 10vh;

}

#OurLogo{
    position: absolute;
    z-index: 2;
    left: 1vw;
    top: 1vw;
    width: 11vw;
    /* filter: grayscale(800%); */
}
#IGlogo{
    position: absolute;
    z-index: 2;
    right: 1vw;
    top: 1vw;
    width: 15vw;
    /* filter: grayscale(800%); */
}
.TeamPhoto{
    width: 100%;
}

h1{
    text-align: center
};

/* .Advisors-container{
    width: 86.5vw;
  display: flex;
  flex-wrap: wrap;
  left: 6.75vw;
} */


/* .box{
    display: flex;
  position: relative;
  width: 240px;
  height: 320px;
  background-color: #000;
  box-shadow: 0 30px 30px rgba(0,0,0,0.5);
}
.box .imgbx{
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  
}
.box .imgbx img{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
transition: 0.5s;
}
.box:hover .imgbx img{
  opacity: 0;
}
.box .content{
  position: absolute;
  bottom: 20px;
  left: 10%;
  width: 80%;
  height: 60px;
  background-color: #fff;
  transition: 0.5s;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;

}
.box:hover .content{
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;

}
.box .content h3{
  margin: 0;
  padding: 0;
  font-size: 20px
}
.box .content p{
  margin: 10px 0 0;
  padding: 0;
  opacity: 0;
  line-height: 1.2em;
  transition: 0.5s;
  text-align: justify;
}

.box:hover .content p{
  opacity: 1;
  transition: 0.5;
} */
</style>
