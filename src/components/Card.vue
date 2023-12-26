<script setup>
import {defineProps,computed} from 'vue'
const src = defineProps(['figure','name','sign'])
</script>
<template>
<div class="card">
    <div class="card__image">
        <img :src="figure">
      </div>
      <div class="content">
          <h3>{{ name }}</h3>
          <p>{{sign}}</p>
      </div>
</div>
</template>
<style scoped>
.card{
    display: inline-block;
    position: relative;
  width: 16.5vw;
  height: 22vw;
  background-color: #000;
  box-shadow: 0 30px 30px rgba(0,0,0,0.5);
  margin-left: 4.7vw;
  margin-right: 4.7vw;
  margin-top: 1.5vw;
  margin-bottom: 2.5vw;
}


.card .card__image{
position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
}
.card .card__image img{
    position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
transition: 0.5s;
}

.card .content{
position: absolute;
  bottom: -2vw;
  left: 10%;
  width: 80%;
  height: 60px;
  background-color: #fff;
  transition: 0.5s;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;

}

.card .content h3{
  margin: 0;
  padding: 0;
  /* font-size: 20px */
}
.card .content p{
  margin: 1vw 0 0;
  padding: 0;
  opacity: 0;
  line-height: 1em;
  transition: 0.5s;
  font: 0.9em sans-serif;
  text-align: justify;
}

.card:hover .content p{
  opacity: 1;
  transition: 0.5;
}
.card:hover .card__image img{
  opacity: 0;
}

.card:hover .content{
    height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;

}
</style>