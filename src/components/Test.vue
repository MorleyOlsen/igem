<script setup>
import {computed,ref,onMounted,onUnmounted} from "vue"

const stage=ref(0)
var listener=()=>{
    let element=document.querySelector("#door")
    let y=element.getBoundingClientRect().top
    let per=y/window.innerHeight
    stage.value=per
    per = per < 0 ? 0 : per
    per = per > 1 ? 1 : per
}

onMounted(()=>{
    window.addEventListener("scroll",listener)
})
onUnmounted(()=>{
    window.removeEventListener("scroll",listener)
})

const css=computed((()=>{
    if(stage.value>0.4){
        return `translateX(-${stage.value*100}%)`
    }
    else{
        return `translateX(-${0*100}%)`
    }
}))
const csscss=computed((()=>{
    if(stage.value>0.4){
        return `translateX(${stage.value*100}%)`
    }
    else{
        return `translateX(${0*100}%)`
    }
}))
</script>

<template>
    <div class="door" id="door">
        <!-- <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/blackboard.png"> -->
        <img src="https://static.igem.wiki/teams/4614/wiki/description/home/black2-1.png" alt="">
        <img src="https://static.igem.wiki/teams/4614/wiki/description/home/dajimu-1.gif">
    </div>
</template>

<style scoped>
.door{
    width: 100%;
    height: 100%;
    position: relative;
}
.door > img { /*选择test下的子元素img*/
    transition:transform 0.2s ease-in-out;
}

img:nth-child(1){
    left: 10vw;
    position: relative;
    transform: v-bind('css');
    height: 20%;
    width: 40%;
}

img:nth-child(2){
    right:10vw;
    position: absolute;
    transform: v-bind('csscss');
    width: 40%;
}
</style>