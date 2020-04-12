<template>
  <div class="song" @click="playMusic">
    <div class="song-left">
      <span class="song-number">{{number}}</span>
      <img :src="songs.picUrl" alt />
      <span class="song-name">{{songs.name}}</span>
    </div>
    <div class="singer">
      <span :key="index" v-for="(item,index) in songs.song.artists">
        {{item.name}}
        <i v-if="songs.song.artists.length>1&&index!==(songs.song.artists.length-1)">/</i>
      </span>
    </div>
    <span class="album-name">{{songs.song.album.name}}</span>
    <span class="duration">{{duration}}</span>
  </div>
</template>

<script>
export default {
  props: ["number", "songs","playlist","songIndex"],
  data() {
    return {
      duration: ''
    };
  },
  mounted() {
    this.getAudioLength();
  },
  methods: {
    getAudioLength() {
      const time = this.songs.song.duration /1000;
      let min = parseInt(time/ 60);
      let ss = parseInt(time % 60);
      if (min < 10) {
        min = "0" + min;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      this.duration = min + ":" + ss;
    },
    playMusic(){
      this.$store.commit("changePlaylist",this.playlist);
      this.$store.commit("changeplaylistIndex",this.songIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.song {
  width: 100%;
  height: 60px;
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
      width: 40px;
      height: 40px;
    }
    .song-name {
      margin-left: 10px;
    }
  }
  .singer {
    flex: 3;
    font-size: 14px;
    overflow: hidden;
  }
  .album-name {
    flex: 2;
  }
  .duration {
    flex: 1;
  }
}
.song:nth-child(odd) {
  background-color: #f5f5f7;
}
</style>