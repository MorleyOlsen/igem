<template>
    <div class="container">
      <div class="horizontal-line"></div>
    </div>

    <div class="graph">
      <div class="vertical-lines-container">
        <div class="vertical-line" style="left: 20%;"></div>
        <div class="box1" style="left: 20%"><p>Structure</p></div>
         <div class="vertical-line1" style="left: 20%;"></div>

         <div class="vertical-line" style="left: 50%;"></div>
         <div class="box1" style="left: 50%"><p>Characteristic</p></div>

          <div class="vertical-line" style="left: 80%;"></div>
         <div class="box1" style="left: 80%"><p>Sturdy</p></div>
      </div>

      <div class="guodu"></div>

      <div class="vertical-lines-container">
        <div class="vertical-line" style="left: 20%;"></div>
        <div class="box2" style="left: 20%">
            <p>Cross-Linking Module</p>
            <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/jiaolianchengwang.gif">
        </div>
         <div class="vertical-line1" style="left: 20%;"></div>

         <div class="vertical-line" style="left: 50%;"></div>
         <div class="box2" style="left: 50%">
            <p>Filamentation Module</p>
            <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/shengzhangpianduan.gif">
        </div>

          <div class="vertical-line" style="left: 80%;"></div>
         <div class="box2" style="left: 80%">
            <p>Silicification Module</p>
            <img src="https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/guihuajiaolianwang.gif">
         </div>
      </div>
</div>
</template>
  
<style scoped>
img{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    height: 80%;
}
.box2 {
  position: absolute;
  top: 200px;
  transform: translate(-50%,0);/* x,y */
  width: 28%;
  height: 300px;
  border: 5px solid #000;
  text-align: center;
  background-color: #f0f0f0;
  z-index: 11;
}
.guodu{
    position: relative;
    height: 100px;
}
.graph{
    height: 100vh;
}
.box1 {
  position: absolute;
  top:200px;
  transform: translate(-50%,0);/* x,y */
  width: 20%;
  height: 100px;
  border: 5px solid #000;
  text-align: center;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: large;
  z-index: 11;
}

/* layer one */
.container {
    display: flex;
    justify-content: center; /* 水平居中 */
    height: auto;
}
  
.horizontal-line {
    width: 80%;
    height: 5px; 
    background-color: #000;
}
.vertical-lines-container {
    position: relative;
    width: 100%;
    height: 200px; /* 可以根据需要调整高度 */
}
  
.vertical-line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5px; /* 线的宽度 */
    background-color: #000; /* 线的颜色 */
}
</style>
  
  
  