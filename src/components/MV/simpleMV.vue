<template>
  <div class="simpleMV" :style="{backgroundImage: 'url('+MVData.cover+')'}" @click="toVideoPage">
    <playCountTag :RePlayCount="MVData.playCount" icon="&#xe755;"></playCountTag>
    <span>{{MVData.name}} - {{MVData.artistName}}</span>
  </div>
</template>

<script>
import playCountTag from "../playCountTag";

export default {
  components: {
    playCountTag
  },
  props: ["MVData"],
  methods:{
      toVideoPage() {
      this.$store.commit('changeMVData',this.MVData);
      this.$router.push("/MVDetailsPage");
    }
  }
};
</script>

<style lang="scss" scoped>
.simpleMV {
  width: 100%;
  height: 180px;
  background-size: 100% 100%;
  position: relative;
  span {
    display: block;
    position: relative;
    left: 5%;
    top: 85%;
    color: #fff;
  }
}
</style>