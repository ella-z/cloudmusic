<template>
  <div class="MV" @click="toVideoPage">
    <div class="vedio"></div>
    <span class="vedio-name">xxxxx</span>
    <span class="singer">yyy</span>
  </div>
</template>

<script>
export default {
  methods:{
    toVideoPage(){
      this.$router.push('/videoDetailsPage');
    }
  }
};
</script>

<style lang="scss" scoped>
.MV {
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  cursor: pointer;
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