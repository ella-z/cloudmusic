<template>
  <div class="albums">
    <div class="albums-mask">
      <img v-lazy="album.picUrl" alt />
    </div>
    <span>{{album.name}}</span>
    <span>{{album.artist.name}}</span>
  </div>
</template>

<script>
export default {
    props:['album'],
    mounted(){
      //  console.log(this.album);
    }
};
</script>

<style lang="scss" scoped>
.albums {
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 5fr 6fr;
  justify-items: start;
  align-items: center;
  .albums-mask {
    width: 70px;
    height: 70px;
    background-position: -245px -243px;
    background-image: url("https://s2.music.126.net/style/web2/img/coverall.png?5237dbf6076c71e0e24600ae03a32225");
    img {
      width: 55px;
      height: 57px;
      position: relative;
      top: 6px;
    }
  }
}
</style>