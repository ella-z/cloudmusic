<template>
  <div class="discoverMusic">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="个性推荐" name="first">
        <el-carousel :interval="4000" type="card" height="150px">
          <el-carousel-item v-for="item in 6" :key="item">{{item}}</el-carousel-item>
        </el-carousel>

        <div class="recommend-songList">
          <headNav title="推荐歌单"></headNav>
          <div class="song-list">
            <songList></songList>
            <songList></songList>
            <songList></songList>
            <songList></songList>
            <songList></songList>
            <songList></songList>
            <songList></songList>
            <songList></songList>
          </div>
        </div>

        <div class="latest-music">
          <headNav title="最新音乐" ></headNav>
          <song v-for="(item,index) in 10" :key="index" :number="index+1"></song>
        </div>

        <div class="recommend-MV">
          <headNav title="推荐MV"></headNav>
          <div class="MV-list">
            <MV></MV>
            <MV></MV>
            <MV></MV>
            <MV></MV>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second" class="songL">
        <songList></songList>
        <songList></songList>
        <songList></songList>
        <songList></songList>
        <songList></songList>
        <songList></songList>
        <songList></songList>
        <songList></songList>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="third">
         <song v-for="(item,index) in 10" :key="index" :number="index+1"></song>
      </el-tab-pane>
      <el-tab-pane label="最新音乐" name="latestMusic">
         <song v-for="(item,index) in 10" :key="index" :number="index+1"></song>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import songList from "../../components/songList";
import headNav from "../../components/headNav";
import song from "../../components/song";
import MV from "../../components/MV";

export default {
  components: {
    songList,
    headNav,
    song,
    MV
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" >
.el-tabs__content {
  width: 80%;
  margin: 0 auto;
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
</style>
<style lang="scss" scoped>
.recommend-songList {
  margin-top: 20px;
  .song-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
}
.latest-music {
  margin-top: 20px;
}
.recommend-MV {
  margin-top: 20px;
  .MV-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
}
.songL{
      display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  
}
</style>