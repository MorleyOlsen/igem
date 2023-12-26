​<template>
    <div id="goTop">
        <div class="goTop" v-show="goTopShow" @click="goTop">
            <p class="goTopIcon">↑</p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const scrollTop = ref(0);
const goTopShow = ref(false);

watch(scrollTop, (newVal) => {
    goTopShow.value = newVal > 500;
});

const handleScroll = () => {
    scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

const goTop = () => {
    let timer = null;

    const animate = () => {
        if (scrollTop.value > 0) {
            scrollTop.value -= 500;
            document.body.scrollTop = document.documentElement.scrollTop = scrollTop.value;
            timer = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(timer);
            goTopShow.value = false;
        }
    };

    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(animate);
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

</script>
 
<style scoped>
.goTop {
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
}
/*
.goTop:hover .goTopIcon {
    color: rgb(237, 17, 222);
}
*/
.goTopIcon {
    font-size: x-large;
    color: #122f59;
}
</style>
 
​
