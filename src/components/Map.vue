<script setup>
import {defineProps,computed} from 'vue'
const src = defineProps(['figure1','bottom','left','name','sign','figure2','width'])

</script>
<template>


<!-- <div class="Map">
<div class="Map__image">
    <img :src="figure">
    <div class="card__word"><p>{{word}}</p></div>
</div>
<p>{{name}}</p>
<p>{{discription}}</p>
</div> -->

<div class="Map">
        <img  :src="figure1" class="figure1">
        <div class="MapIntro">
                    <img :src="figure2">
                    <div class="MapName">
                        {{ name }}
                    </div>
                    <div class="MapSign">
                        {{ sign }}
                    </div>
        </div>
    </div>

</template>
<style scoped>


.figure1{
    position: absolute;
    left: v-bind(left);
    bottom: v-bind(bottom);
    width: v-bind(width);
}
.MapIntro{
border-radius: 2vw;
position: absolute;
background-color: #839597;
width: 32vw;
height: 23vw;
top: 1vw;
left:31vw;
visibility: hidden;
}

/* .figure1{
    transition: filter 0.3s ease-in-out;
    filter: grayscale(800%) ; 
} */
.figure1:hover{
    transform: scale(1.1);
}


.figure1:hover+.MapIntro{
    visibility: visible;
    
} 
.MapIntro img{
    position: absolute;
    left: 1vw;
    top:1.5vw;
    width: 13vw;
}
.MapName{
    font-size: 1.2em;
    text-align: center;
    position: absolute;
    left: 1vw;
    bottom:1vw;
    width: 13vw;
}
.MapSign{
    padding: 1vw 0.5vw 1vw 0.5vw;
    background-color: #adbbbb;
    font-size: 1em;
    text-align: center;
    position: absolute;
    left: 15vw;
    top: 50%;
    transform:translate(0,-50%);
        /* bottom:1vw; */
    width: 14vw;
}



</style>
