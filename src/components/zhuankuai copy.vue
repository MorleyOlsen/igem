<template>
  <div>
    <button @click="startAnimation">Start Animation</button>
    <div class="scroll-container" ref="scrollContainer">
      <!-- 用于占位的元素，确保页面有足够的高度以滚动 -->
      <div class="placeholder"></div>
      <transition name="fall" mode="out-in">
        <!-- 使用name属性指定过渡类名前缀，mode属性用于在切换时控制新旧元素的表现 -->
        <div v-if="showImage" key="image" class="falling-image">
          <img :src="imageSrc" alt="Falling Image" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImage: false, // 控制图像的显示与隐藏
      imageSrc:'https://static.igem.wiki/teams/4614/wiki/home-vue/homeweb/brick.png', // 图像的URL
      scrollThreshold: 800, // 滚动触发动画的高度阈值
    };
  },
  methods: {
    startAnimation() {
      // 获取滚动容器的DOM元素
      const scrollContainer = this.$refs.scrollContainer;

      // 获取滚动容器的当前滚动位置
      const scrollY = scrollContainer.scrollTop;

      // 计算滚动距离，使图像正好落在视野中
      const scrollDistance = scrollY + window.innerHeight;

      // 如果图像还未显示，并且滚动距离超过阈值
      if (!this.showImage && scrollDistance >= this.scrollThreshold) {
        this.showImage = true; // 显示图像
      }
    },
  },
  created() {
    // 监听滚动事件，以检测何时触发动画
    window.addEventListener('scroll', this.startAnimation);
  },
  beforeDestroy() {
    // 在组件销毁前移除滚动事件监听器
    window.removeEventListener('scroll', this.startAnimation);
  },
};
</script>

<style scoped>
/* 添加淡入淡出动画效果 */
.fall-enter-active, .fall-leave-active {
  transition: opacity 0.5s; /* 过渡属性和持续时间 */
}
.fall-enter, .fall-leave-to /* .fall-leave-leave 在 Vue 2.1.8 或更早版本中 */ {
  opacity: 0;
}

/* 设置滚动容器的样式，确保可以滚动 */
.scroll-container {
  height: 100vh; /* 设置容器高度为视窗的高度 */
  overflow-y: scroll;
}

/* 占位元素，确保有足够的高度以滚动 */
.placeholder {
  height: 2000px; /* 根据需要调整高度 */
}

/* 图像容器样式 */
.falling-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 图像容器高度等于视窗高度 */
}
.falling-image img {
  max-width: 100%; /* 图像宽度不超过容器宽度 */
}
</style>
