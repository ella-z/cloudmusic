<template>
  <div class="discoverMusic" v-loading = "loading">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="个性推荐" name="first">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,index) in bannerImgArr" :key="index">
            <img :src="item.pic" alt />
          </el-carousel-item>
        </el-carousel>

        <div class="recommend-playlist">
          <headNav title="推荐歌单"></headNav>
          <div class="song-list">
            <playlist
              :key="index"
              v-for="(item,index) in recommendPlaylists"
              :playlistDetails="recommendPlaylists[index]"
            ></playlist>
          </div>
        </div>

        <div class="latest-music"> 
          <headNav title="最新音乐"></headNav>
          <song
            v-for="(item,index) in latestMusic"
            :key="index"
            :number="index+1"
            :songIndex = "index"
            :songs="latestMusic[index].song"
            :playlist = "latestMusic"
          ></song>
        </div>

        <div class="recommend-MV">
          <headNav title="推荐MV"></headNav>
          <div class="MV-list">
            <MV :key="index" v-for="(item,index) in recommendMV" :MVDetail="recommendMV[index]"></MV>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
        <playlistModule></playlistModule>
      </el-tab-pane>
      <!--<el-tab-pane label="排行榜" name="third"></el-tab-pane>-->
      <el-tab-pane label="最新音乐" name="latestMusic">
        <latestMusicModule></latestMusicModule>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import playlist from "../../components/playlist/playlist";
import headNav from "../../components/headNav";
import song from "../../components/song";
import MV from "../../components/MV/MV";
import latestMusicModule from "./latestMusicModule";
import playlistModule from "./playlistModule";
import { getRecommend } from "../../api/getRecommend";

export default {
  components: {
    playlist,
    headNav,
    song,
    MV,
    playlistModule,
    latestMusicModule
  },
  data() {
    return {
      activeName: "first",
      recommendPlaylists: [], //推荐的歌单
      bannerImgArr: [], //轮播图
      recommendMV: [], //推荐MV
      latestMusic: [], //最新的音乐
      loading:false
    };
  },
  mounted() { 
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      const recommendMV = await getRecommend(
        "http://localhost:3000/personalized/mv"
      );
      const recommendPlaylists = await getRecommend(
        "http://localhost:3000/personalized?limit=10"
      );
      const bannerImgArr = await getRecommend(
        "http://localhost:3000/banner?type=3"
      );
      const latestMusic = await getRecommend(
        "http://localhost:3000/personalized/newsong"
      );
      try {
        this.recommendMV = recommendMV.result;
        this.recommendPlaylists = recommendPlaylists.result;
        this.bannerImgArr = bannerImgArr.banners;
        this.latestMusic = latestMusic.result;
        this.loading = false;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    }
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
.discoverMusic {
  img {
    width: 100%;
    height: 100%;
  }
  .recommend-playlist {
    margin-top: 20px;
    .song-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 180px);
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
      grid-template-columns: repeat(auto-fill, 230px);
      column-gap: 20px;
      row-gap: 30px;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>