<script setup>
import {onMounted,ref,computed} from 'vue'
const props = defineProps(['poster','maincolor','secondcolor'])
const toc = ref(null)
const scrollbarcolor = computed(()=>{
    return props.maincolor+"80"
})
const toccolor = computed(()=>{
    return props.secondcolor+"80"
})

onMounted(()=>{
        let list = document.querySelectorAll('h1,h2')
    for(let i=0;i<list.length;i++){
        let title = document.createElement('a')
        title.href =`#${list[i].id}`
        let h = list[i].cloneNode(true)
        h.removeAttribute("id")
        h.removeAttribute("class")
        h.addEventListener('click',()=>{
            let h = document.getElementsByClassName("Nav")[0].getBoundingClientRect().height
            list[i].scrollIntoView()
            window.scrollBy(0,-h*1.2)
        })
        title.appendChild(h)
        toc.value.appendChild(h)
    }
})
console.log(toc)
</script>

<template>
    <div>
        <div>
            <img :src="poster" alt="">
        </div>
            <div class="toc" ref="toc">

            </div>
            <div class="content">
                <slot></slot>

            </div>
    </div>
</template>
<style scoped>
.poster{
    width:99vw;
    height:56vw;
}
.total{
    flex-direction:row;
    justify-content:center;
    position:sticky;
    top:0;
}
.toc{
    position: sticky;
    top:10vh;
    width:18vw;
    height:90vh;
    overflow: scroll;
    font-size: smaller;
    padding:0 2vw;
    background-color:v-bind('toccolor')
}
.content{
    position: relative;
    margin-top:-90vh;
    margin-left:22vw;
    border-left-width: 2vw;
    border-left-style: solid;
    border-left-color: v-bind("maincolor");
    background-color: v-bind('secondcolor');
    padding:3vw;
}
.il{
    position:relative;
    right:0;bottom:0;
    width:61.8%;
    margin-left:38.2%;
    margin-top:20vh;
}
ul{
    font-size:1.2em
}
</style>
<style>
.toc::-webkit-scrollbar{
    background-color:#00000000;
    width:1vw;
}
.toc::-webkit-scrollbar-thumb{
    background:v-bind("scrollbarcolor")
}
.toc::-webkit-scrollbar-corner{
    display:none;
}
.toc h1:hover,.toc h2:hover{
    color: v-bind('maincolor');
}

h3{
    font-size: 1.35em;
}
h4{
    font-size: 1.16em;
}

object{
    width:100%;
    height:500px
}
table{
    /* border-style:solid none; */
    border-collapse: collapse;
    border-top-style:solid;
    border-top-width:medium;
    border-top-color:black;
        border-bottom-style:solid;
    border-bottom-width:medium;
    border-bottom-color:black;
}
td{
    border-bottom-style:solid;
    border-width:thin;
    padding:0 1vw;
}
.XBT{
  display:flex;
    height:calc(1.7em + 40px);
    align-items: center;
}
.XBT h1{
    margin:0;
    display:flex;
    align-items: center;
    height:100%;
    padding: 0 0 0 3vw;
    
    background-color: #ffffffaa;
    width: 40vw;
    box-shadow: -5px 5px 2px #000000aa;
}
.XBT img{
  display:inline-block;
height:calc(1.7em + 40px);
width:calc(1.7em + 40px);
margin-right:20px;
    background-color: #ffffffaa;
    box-shadow: -5px 5px 2px #000000aa;
    border-radius: 50%;
}
.XBT h2{
    margin:0;
    display:flex;
    align-items: center;
    height:50%;
    padding: 0 0 0 3vw;
    background-color: #ffffffaa;
    width: 40vw;
    box-shadow: -5px 5px 2px #000000aa;
}
</style>