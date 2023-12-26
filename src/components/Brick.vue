<template>
  <div>
    <div class="guodu"></div>
    <button @click="startAnimation()">Falling start</button>
      <div class="falling-container">
        <Transition name="fall">
            <img v-if="isImageVisible" src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png" >
        </Transition>
      </div>
  </div>
</template>


<script setup>
import {computed,ref,onMounted,onUnmounted} from "vue"
const isImageVisible=ref(true)
onMounted(()=>{
  console.log(this.document.scrollY)
  const a=true
    window.addEventListener("scroll",function(){
      if(this.window.scrollY>=200){
        startAnimation()
        this.a=false
      }
    })
})

function startAnimation(){
    setTimeout(() => {
        this.isImageVisible = false;
        setTimeout(() => {
          this.isImageVisible = true;
        }, 1000);
    }, 1000);
}
</script>

  
<style scoped>
.guodu{
    height: 10vh;
}
.falling-container {
  position: relative;
  width: 10%;
  height: 10%;
}

.fall-enter-active, .fall-leave-active {
  transition: all 1s ease; /* 动画持续时间和缓动函数 */
}

.fall-enter, .fall-leave-to {
  transform: translateY(200%);
  opacity: 1;
}
</style>

  