<template>
  <transition name="playListTransition">
    <div class="audioPlaylist" >
      <nav>
        <span>播放列表</span>
        <i class="iconfont icon" @click="toClose()">&#xe607;</i>
      </nav>
      <div class="audio-list">
        <span class="list-count">
          <i></i>
          总共{{playlistData.length}}首
        </span> 
        <ul class="playlist">
          <li v-for="(item,index) in playlistData" :key="index" @click="playMusic(index)">
            <div v-show="index === songIndex">
              <i class="iconfont icon" v-show="!musicState">&#xe63d;</i>
              <i class="iconfont icon" v-show="musicState">&#xe61d;</i>
            </div>
            <span v-show="index !== songIndex  "></span>
            <span>{{playlistData[index].name}}</span>
            <span v-if="playlistData[index].song">{{playlistData[index].song.album.name}}</span>
            <span v-else-if="playlistData[index]">{{playlistData[index].album.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
  
    }
  },
  computed: {
    playlistData() {
      return this.$store.state.playlist;
    }, 
    musicState() {
      return this.$store.state.musicState;
    },
    songIndex() {
      return this.$store.state.songIndex;
    }
  },
  methods: {
    toClose() {
      this.$store.commit("changePlayListState", false);
    },
    playMusic(index) {
      this.$store.commit("changeMusicState",true);
      this.$store.commit("changeSongIndex", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.audioPlaylist {
  width: 600px;
  height: 550px;
  position: fixed;
  right: 0;
  bottom: 40px;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.3s;
  background-color: #fff;
  border: 1px solid #999;
  box-shadow: 0 0 10px 1px #999;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #e1e1e2;
    span {
      font-weight: 700;
    }
    .icon {
      cursor: pointer;
      font-size: 12px;
    }
  }
  .audio-list {
    .list-count {
      display: block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      background-color: #fff !important;
      border-bottom: 1px solid #e1e1e2;
    }
    .playlist {
      width: 100%;
      height: 450px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 30px;
      .icon {
        color: #c62f2f;
      }
      li {
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 6fr 5fr;
        align-items: center;
        padding: 0 10px;
      }
      li:nth-child(odd) {
        background-color: #f5f5f7;
      }
    }
  }
}

.playListTransition-enter-active {
  transform: translateY(100%);
}
.playListTransition-leave-active {
  transform: translateY(100%);
}
</style>