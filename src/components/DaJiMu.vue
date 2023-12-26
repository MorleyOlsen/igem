<script setup>
import {computed,ref,onMounted,onUnmounted} from "vue"

const stage=ref(0)
var listener=()=>{
    let element=document.querySelector("#testt")
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

const csscss=computed((()=>{
    if(stage.value>0.6){
        const img = document.getElementById("testt")
        return `translateX(${stage.value*100}%)`
        // img.style.opacity=stage.value
    }
    else{
        return `translateX(${0*100}%)`
    }
}))
</script>

<template>
    <div class="testt" id="testt">
        <img src="https://static.igem.wiki/teams/4614/wiki/description/home/zhuixingping.gif">
    </div>
    <br>
    <br>

</template>

<style scoped>

.testt{
    width: 100%;
    height: 50vh;
    position: relative;
    margin-top: 2vw;
    margin-bottom: 2vw;
}
.testt > img { /*选择test下的子元素img*/
    transition:transform 0.5s ease-in-out;
}

img:nth-child(1){
    right:15vw;
    position: absolute;
    transform: v-bind('csscss');
    width: 70vw;
}
</style>