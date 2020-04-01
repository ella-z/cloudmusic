<template>
  <div class="song">
    <div class="song-left">
      <span class="song-number">{{number}}</span>
      <img src="../assets/demo.png" alt />
      <span class="song-name">xxx</span>
    </div>
    <span class="singer">yyyyy</span>
    <span class="duration">yyyyy</span>
  </div>
</template>

<script>
export default {
  props:['number']
};
</script>

<style lang="scss" scoped>
.song {
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .song-left {
    flex: 5;
    display: flex;
    flex-direction: row;
    align-items: center;
    .song-number {
      width: 50px;
      display: block;
      font-size: 18px;
    }
    img {
      width: 35px;
      height: 35px;
    }
    .song-name {
      margin-left: 10px;
      font-size: 16px;
    }
  }
  .singer {
    flex: 3;
  }
  .duration {
    flex: 2;
  }
}
.song:nth-child(odd) {
  background-color: #f5f5f7;
}
</style>