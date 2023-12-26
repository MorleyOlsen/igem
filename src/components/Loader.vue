<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
const t=ref("unset")

//view window
window.setTimeout(()=>{
    t.value="none"
},5000)

</script>

<template>
    <div class="background">
        <img src="https://static.igem.wiki/teams/4614/wiki/description/home/loading.gif">
        <h1 align="center">Loading...</h1>
    </div>
</template>

<style scoped>
.background{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: whitesmoke;
    background-position: center;
    background-repeat: no-repeat;
    display: v-bind('t');
    z-index: 1000;
}

img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 50%;
    width: 50%;
}

h1{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1001;
}

</style>