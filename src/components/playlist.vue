<template>
  <div class="playlist" @click="toPlaylistDetailsPage">
    <playCountTag :RePlayCount ="playlistDetails.playCount" icon="&#xe6bf;"></playCountTag>
    <img :src="playlistDetails.picUrl||playlistDetails.coverImgUrl" alt />
    <span>{{playlistDetails.name}}</span>
  </div>
</template>

<script>
import playCountTag from '../components/playCountTag'

export default {
  props:['playlistDetails'],
  components:{
    playCountTag
  },
  mounted(){
 
  },
  methods: {
    toPlaylistDetailsPage() {
      this.$router.push({path:"/playlistDetailsPage" ,query:{
        playlistID:this.playlistDetails.id,
        playlistImg:this.playlistDetails.picUrl||this.playlistDetails.coverImgUrl
      }});
    }
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  width: 100%;
  height: 100%;
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