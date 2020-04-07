<template>
  <transition name="pageTransition">
    <div class="songDetailsPage">
      <i class="iconfont icon" @click="closePage()">&#xe607;</i>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {},
  methods: {
    closePage() {
      this.$store.commit("changeSongPageState", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.songDetailsPage {
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.9);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999999;
  transform: translateX(0);
  transition: transform 0.3s;
}
.icon {
  color: #fff;
  position: absolute;
  right: 18px;
  top: 10px;
}
.pageTransition-enter-active {
  transform: translateX(-100%);
}
.pageTransition-leave-active {
  transform: translateX(-100%);
}
</style>