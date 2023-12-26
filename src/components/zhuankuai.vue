<script>
export default {
  data() {
    return {
      imageSrc: 'https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png', // 图像的路径
      currentY: '20vw', // 当前X坐标位置
      scrollThreshold: 1500, // 滚动高度的阈值，触发移动的高度
    };
  },
  computed: {
    shouldMove() {
      return window.scrollY > this.scrollThreshold;
    },
  },
  watch: {
    shouldMove(newVal) {
      if (newVal) {
        this.moveImage();
      }
    },
  },
  methods: {
  moveImage() {
    // 当滚动高度超过阈值时，更新currentY以触发向下移动
    this.currentY = window.scrollY - this.scrollThreshold;
  },
},

  created() {
    window.addEventListener('scroll', this.moveImage);
  },
  destroyed() {
    window.removeEventListener('scroll', this.moveImage);
  },
};
</script>


<template>
  <div class="moving-image-container">
    <img
      :src="imageSrc"
      :style="{ transform: `translateY(${currentY}px)` }"
      class="moving-image"
      alt="Moving Image"
    />
  </div>
</template>

<style scoped>
.moving-image-container {
  position: absolute;
  overflow: hidden;
  width: 60vw;
  top: 60vw;
  z-index: 1;
}

.moving-image {
  width: 30vw;
  transition: transform 0.3s ease-in-out; /* 添加动画效果，根据需要调整 */
}
</style>

