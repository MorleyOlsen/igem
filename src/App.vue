<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NewFooter from './components/NewFooter.vue';
import GoTop from './components/GoTop.vue'

onMounted(()=>{
  window.addEventListener('hashchange',()=>{
		var currentPath = window.location.hash.slice(1);
		if(this.$router.path !== currentPath){
			this.$router.push(currentPath);
		}
	},false);
})
</script>

<template>
  <div>
    <RouterView />
    <NewFooter></NewFooter>
    <GoTop />
  </div>
</template>
