<template>
  <div class="discoverMusic">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="个性推荐" name="first">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            {{item}}
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="排行榜" name="third">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="fourth">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="newmusic">最新音乐</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    /* handleClick(tab, event) {
        console.log(tab, event);
      }*/
  }
};
</script>

<style lang="scss" >
.discoverMusic {
  position: absolute;
  left: 120px;
  .tab {
    width: calc(100vw - 120px);
    min-height: 100vh;
  }
  .el-tabs__header {
    width: 100%;
    .el-tabs__nav-scroll {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .el-tabs__item.is-active {
        color: #c62f2f;
      }
      .el-tabs__item:hover {
        color: #c62f2f;
      }
      .el-tabs__active-bar {
        background-color: #c62f2f;
      }
    }
  }
}
.el-tabs__content {
  width: 80%;
  margin: auto;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.el-carousel__container{
  height: 150px!important;
}
</style>