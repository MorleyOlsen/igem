<script setup>
import { RouterLink } from "vue-router"
const imgsrc = defineProps(["img", "to"])
</script>

<template>
  <div>
    <RouterLink :to="to">
      <div class="image">
        <img :src="img"/>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
div {
  position: relative;
  z-index: 2;
}
.image {
  width: 15vw;
}
img {
  position: absolute;
  width: 200%;
  top: 0;
  left: 0;
  transition: transform 0.5s;
}
img:hover{
    transform: scale(1.5);
}
</style>