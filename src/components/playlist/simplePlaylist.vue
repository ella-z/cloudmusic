<template>
  <div class="simplePlaylist" @click="toPlaylistDetailsPage">
    <img v-lazy="simplePlaylist.coverImgUrl" />
    <span class="simplePlaylist-name">{{simplePlaylist.name}}</span>
    <span class="simplePlaylist-count">{{simplePlaylist.trackCount}} 首</span>
    <span class="simplePlaylist-artists">by {{simplePlaylist.creator.nickname}}</span>
  </div>
</template>

<script>
export default {
  props: ["simplePlaylist"],
  methods: {
    toPlaylistDetailsPage() {
      this.$router.push({
        path: "/playlistDetailsPage",
        query: {
          playlistID: this.simplePlaylist.id,
          playlistImg:
            this.simplePlaylist.coverImgUrl
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.simplePlaylist {
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr 2fr;
  justify-items: start;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
}
.simplePlaylist:nth-child(odd) {
  background-color: #f5f5f7;
}
</style>