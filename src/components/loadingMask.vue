<template>
  <div class="mask" v-loading="loading" v-show="loading"></div>
</template>

<script>
export default {
 props: ["loading"]
};
</script>

<style lang="scss" scoped>
.mask {
  width: calc(100vw - 10px);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>