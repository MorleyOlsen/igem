<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue"
import gsap from 'gsap'

const show = ref(1)

const stage = ref(0)

var listener = () => {
  let element = document.querySelector("#headpic")
  let y = element.getBoundingClientRect().bottom
  let per = y / window.innerHeight
  let cnt=0
  stage.value = per
  per = per < 0 ? 0 : per
  per = per > 1 ? 1 : per

  if(per>0.6 && per<1){
    show.value = true
    if(cnt==0){
      onBeforeEnter0()
      onEnter()
    }
    else{
      onBeforeEnter()
      onEnter()
    }
  }
  else if(0.3<per && per<0.4){
    onLeave()
    show.value = false
    cnt++;
  }
}

onMounted(() => {
  window.addEventListener("scroll", listener)
})
onUnmounted(() => {
  window.removeEventListener("scroll", listener)
})

//initialize,cnt=0
function onBeforeEnter0(el) {
  gsap.set(el, {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    x: 200,/* 说实话我都不知道这个到底有没有用= =*/
  })
}

//图形初始化 cnt=1
function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
    //x: 200,
  })
}

//图形从小变大
function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(1.5, 1)'
  })
}

//图形下落
function onLeave(el, done) {
	gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    y: 300,
    ease: 'elastic.inOut(1, 1)'
  })
  gsap.to(el, {
    duration: 1.5,
    delay: 0.5,
    opacity: 1,
  })
}
</script>

<template>
  <div class="headpic" id="headpic">
    <img src="https://static.igem.wiki/teams/4614/wiki/1.jpg">
  </div>

  <div class="outer">
    <div align="right">
      <button @click="show = !show">Click Here To Play The Falling Bricks!</button>
    </div>
    <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false"
    >
        <div class="gsap-box" v-if="show">
          <!--first layer-->
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
          <!--second layer-->
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
          <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
        </div>
    </Transition>
  </div>
</template>

<style scoped>
button {
    /*定位*/
    position: absolute;
    right: 200px;
    top: 100px;
    transform: translateX(-50%);

    bottom:0;
    background-color: #4CAF50;
    border: none;  
    color: white; 
    text-align: center; 
    text-decoration: none;
    font-size: 30px;
    width: 300px; 
    height: 200px; 
    border-radius: 30px; 
    padding: 15px 32px;
    z-index: 10;
}
  
button:hover {  
    background-color: #c55d13;  
}  

.outer {
    width: 100%;
    height: 10vw;
    position: relative;
}

.gsap-box > img:nth-child(1){
  position: absolute;
  left: 200px;
  top: 0;
  z-index: 10;
}

.gsap-box > img:nth-child(2){
  position: absolute;
  left: 300px;
  top: 0;
  z-index: 10;
}

.gsap-box > img:nth-child(3){
  position: absolute;
  left: 400px;
  top: 0;
  z-index: 10;
}

.gsap-box > img:nth-child(4){
  position: absolute;
  left: 250px;
  top: 50px;
}

.gsap-box > img:nth-child(5){
  position: absolute;
  left: 350px;
  top: 50px;
}

.gsap-box > img:nth-child(6){
  position: absolute;
  left: 450px;
  top: 50px;
}

.gsap-box {
  width: 15%;
  height: 15%;
  position: relative;
}
.headpic{
    margin-top: 5vw;
    margin-left: 1vw;
    margin-right: 1vw;
}
</style>