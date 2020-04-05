<template>
  <div class="MV">
    <div class="vedio"></div>
    <span class="vedio-name">xxxxx</span>
    <span class="singer">yyy</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.MV {
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  .vedio {
    width: 100%;
    height: 80%;
    background-color: pink;
  }
  .vedio-name {
    font-size: 20px;
  }
}
</style>