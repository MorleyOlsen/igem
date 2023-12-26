<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue"

const show = ref(false)
const stage = ref(0)

var listener = () => {
  let element = document.querySelector("#image")
  let y = element.getBoundingClientRect().bottom
  let per = y / window.innerHeight
  stage.value = per
  per = per < 0 ? 0 : per
  per = per > 1 ? 1 : per

  if (per < 0.4) {
    show.value = true
  }
}

onMounted(() => {
  window.addEventListener("scroll", listener)
})
onUnmounted(() => {
  window.removeEventListener("scroll", listener)
})
</script>

<template>
<div>
  <!--用于触发监听器的图像设置为完全透明度-->
  <div class="image" id="image">
    <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png">
  </div>

  <div class="jump">
    <Transition name="bounce">
    <h1 v-show="show" align="center">
      Have you ever thought about 
      <br>
      using <b><em>E.coli</em></b> as A MATERIAL?
      <br>
    </h1>
    </Transition>
  </div>
</div>
</template>

<style scoped>
h1{
font-size:4em
}
img:nth-child(1){
    left: 0;
    width: 10%;
    position: absolute;
}
.image{
  height: 1vh;
  position: relative;
  opacity: 0;/*!!!!!!!!!!!!!! 用于触发监听器的图像设置为完全透明度 !!!!!!!!!!!!!!*/
}

.jump{
    position: relative;
    margin-top: 5vw;
    height:20vw;/*sos...*/
}

p {
  font-size: 50px;
  margin-top: 20px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>