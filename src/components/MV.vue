<template>
  <div class="MV" @click="toVideoPage">
    <playCountTag :RePlayCount="MVDetail.playCount" icon="&#xe755;"></playCountTag>
    <img :src="MVDetail.picUrl" alt class="vedio" />
    <span class="vedio-name">{{MVDetail.name}}</span>
    <span class="artistName">{{MVDetail.artistName}}</span>
  </div>
</template>

<script>
import playCountTag from "../components/playCountTag";

export default {
  props: ["MVDetail"],
  components: {
    playCountTag
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toVideoPage() {
      this.$store.commit('changeMVData',this.MVDetail);
      this.$router.push("/MVDetailsPage");
    }
  }
};
</script>

<style lang="scss" scoped>
.MV {
  position: relative;
  width: 230px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  cursor: pointer;
  .vedio {
    width: 100%;
    height: 60%;
    background-color: pink;
  }
  .vedio-name {
    font-size: 18px;
    height: 20%;
    overflow: hidden;
    margin-top: 5px;
  }
  .artistName {
    margin-top: 5px;
    color: #999;
  }
}
</style>