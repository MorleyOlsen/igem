<script setup>
import Navbar from "../../components/Navbar.vue"
</script>

<template>
    <br>
    <br>
    <div>
        <Navbar color="#83a6b9" />
    </div>
    <div class="note">
        <br>

        <h1>Award</h1>
        <div class="wapper">
        <img src="https://static.igem.wiki/teams/4614/wiki/award/389fe195efda42dc9a6330e5f96103b.png" alt="" class="TeamPhoto">
        </div>
        <h1 >Congratulations!</h1>
        </div>
</template>

<style scoped>
h1{
    text-align: center
};

img{
    width: 60vw;
}
.wapper{
    position: relative;
    margin: 2vw 20vw;
    /* border: 2px solid black; */
    width: 60vw;
    /* height: 40vw; */
    background-color: #e1e3e8;
    box-shadow: 0 30px 30px rgba(0,0,0,0.5);
}

</style>