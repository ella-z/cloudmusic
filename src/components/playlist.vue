<template>
  <div class="playlist" @click="toPlaylistDetailsPage">
    <playCountTag :RePlayCount ="recommendPlaylist.playCount" icon="&#xe6bf;"></playCountTag>
    <img :src="recommendPlaylist.picUrl" alt />
    <span>{{recommendPlaylist.name}}</span>
  </div>
</template>

<script>
import playCountTag from '../components/playCountTag'

export default {
  props:['recommendPlaylist'],
  components:{
    playCountTag
  },
  mounted(){
 
  },
  methods: {
    toPlaylistDetailsPage() {
      this.$router.push({path:"/playlistDetailsPage" ,query:{
        playlistID:this.recommendPlaylist.id,
        playlistImg:this.recommendPlaylist.picUrl
      }});
    }
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  width: 180px;
  height: 230px;
  position: relative;
  img {
    width: 100%;
    height: 80%;
    margin-bottom: 5px;
  }
  span {
    display: block;

  }
}
</style>