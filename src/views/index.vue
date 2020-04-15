<template>
  <div class="index">
    <header>
      <div class="nav-left">
        <i class="iconfont icon">&#xe60d;</i>
        <span>音乐播放器</span>
      </div>
      <div class="nav-right"></div>
    </header>
    <main>
      <sideBar></sideBar>
      <router-view class="rv"></router-view>
    </main>
    <audioPlayer></audioPlayer>
    <audioPlaylist v-show="playListShow" class="playList"></audioPlaylist>
    <songDetailsPage v-show="pageShow" class="songDetailsPage"></songDetailsPage>
  </div>
</template>

<script>
import sideBar from "./sideBar";
import songDetailsPage from "./songDetailsPage/songDetailsPage";
import audioPlaylist from "../views/audioPlayer/components/audioPlaylist";
import audioPlayer from './audioPlayer/audioPlayer';

export default {
  components: {
    sideBar,
    songDetailsPage,
    audioPlaylist,
    audioPlayer
  },
  data() {
    return {
      
    };
  },
  computed:{
    pageShow(){
      return this.$store.state.songPageShow;
    },
    playListShow(){
      return this.$store.state.playListShow;
    }
  },
  mounted() {
    this.$router.push("/discoverMusic");
  },
  methods:{

  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #c62f2f;
  position: fixed;
  z-index: 99999;
  .nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icon {
      color: #fff;
      font-size: 20px;
      margin-right: 10px;
    }
    span {
      color: #fff;
      font-family: YouYuan;
      font-weight: 700;
      font-size: 15px;
      display: block;
    }
  }
}
main {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  top: 35px;
  padding-bottom: 150px;
  .rv {
    position: relative;
    left: 120px;
    top:35px;
    width: calc(100vw - 120px);
  }
}
</style>