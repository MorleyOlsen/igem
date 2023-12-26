<script setup>
//用于文字渐显的东西
import {ref,onMounted,onUnmounted} from "vue"

const show=ref(0)

var listener=()=>{
    let element=document.querySelector("#ques")
    let position=element.getBoundingClientRect().top
    if(position/window.innerHeight < 0.75){
        show.value=1;
    }
}

onMounted(()=>{
    window.addEventListener("scroll",listener)
})
onUnmounted(()=>{
    window.removeEventListener("scroll",listener)
})

</script>

<template>
	<div class="ques" id="ques">
        <Transition>   
            <p v-if="show" align="center">How to evaluate a new material?</p>
        </Transition>
    </div>
</template>

<style scoped>
.ques{
    position: relative;
    height: 10vw;
    margin-top: 10vw;
}

p{
    font-size: 50px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>