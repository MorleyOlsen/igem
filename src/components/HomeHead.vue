<script setup>
</script>

<template>
    <div class="test" id="test">
        <img src="https://static.igem.wiki/teams/4614/wiki/homehead/school-gate.png" id="school-gate">
        <img src="https://static.igem.wiki/teams/4614/wiki/homehead/dotline.png" id="dotline">
        <img src="https://static.igem.wiki/teams/4614/wiki/homehead/di.png" id="di">
    </div>
</template>
<style scoped>
/* .test{
    position: relative;
    overflow: hidden;
} */
#di{
    position:absolute;
    width:100vw;
    z-index:0;
    top:0
}

#school-gate{
    position: absolute;
    width:100vw;
    z-index:2;
    top: 0;
}
#dotline{
    position: absolute;
    width:100vw;
    z-index:1;
    animation: example 5s linear infinite;
}
@keyframes example {
0%   {top: 0px;}
50% {top: 2vw;}
100% {top: 0;}
}
</style>