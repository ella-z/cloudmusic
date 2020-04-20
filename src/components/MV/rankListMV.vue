<template>
  <div class="rankListMV" @click="toVideoPage">
    <span class="lastRank">{{this.MVIndex}}</span>
    <div class="MV-cover">
        <playCountTag :RePlayCount="'热度:'+MVData.score"></playCountTag>
      <img :src="MVData.cover" alt />
    </div>
    <span class="rankListMV-name">{{MVData.name}} - {{MVData.artistName}}</span>
  </div>
</template>

<script>
import playCountTag from "../playCountTag";

export default {
  components: {
    playCountTag
  },
  props: ["MVData", "MVIndex"],
  data() {
    return {
      // rank: this.MVIndex
    };
  },
  methods:{
      toVideoPage() {
      this.$store.commit('changeMVData',this.MVData);
      this.$router.push("/MVDetailsPage");
    }
  }
};
</script>

<style lang="scss" scoped>
.rankListMV {
  height: 200px;
  display: grid;
  grid-template-columns: 1.5fr 5fr 5fr;
  justify-items: center;
  align-items: center;
  .lastRank {
    font-size: 35px;
    font-weight: 700;
    color: #888;
  }
  .MV-cover {
    width: 90%;
    height: 80%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rankListMV-name {
    justify-self: start;
  }
}
</style>