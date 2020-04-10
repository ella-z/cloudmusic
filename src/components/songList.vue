<template>
  <div class="songList" @click="toPlaylistDetailsPage">
    <img :src="playlistImg" alt />
    <span>{{playlistName}}</span>
  </div>
</template>

<script>
export default {
  props:['playlistImg','playlistName','playlistID'],
  methods: {
    toPlaylistDetailsPage() {
      this.$router.push({path:"/playlistDetailsPage" ,query:{
        playlistID:this.playlistID,
        playlistImg:this.playlistImg
      }});
    }
  },
};
</script>

<style lang="scss" scoped>
.songList {
  width: 150px;
  height: 200px;
  img {
    width: 100%;
    height: 80%;
  }
  span {
    display: block;
    font-size: 16px;

  }
}
</style>