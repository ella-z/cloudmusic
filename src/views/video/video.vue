<template>
  <div class="video" v-loading="loading">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="MV精选" name="newestMV">
        <div class="newest-MV">
          <headNav title="最新MV"></headNav>
          <div class="newest-MV-list">
            <simpleMV
              v-for="(item,index) in newestMVArr"
              :key="index"
              :class="[index===0?'first-MV':'']"
              :MVData="newestMVArr[index]"
            ></simpleMV>
          </div>
        </div>
        <div class="hit-MV">
          <headNav title="热播MV"></headNav>
          <div class="hit-MV-list">
            <MV v-for="(item,index) in hitMVArr" :key="index" :MVDetail="item"></MV>
          </div>
        </div>
        <div class="rankList-MV">
          <headNav title="MV周榜"></headNav>
          <div class="rank-MV-list">
            <rankListMV
              v-for="(item,index) in ranklistMVArr"
              :key="index"
              :MVData="item"
              :MVIndex ="index+1"
              class="rankListMV"
            ></rankListMV>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部MV" name="allMV">
        <div class="MV-list"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import headNav from "../../components/headNav";
import simpleMV from "../../components/MV/simpleMV";
import rankListMV from "../../components/MV/rankListMV";
import MV from "../../components/MV/MV";
import { getNewestMV, getRanklistMV, getMV } from "../../api/getMVData";

export default {
  components: {
    headNav,
    simpleMV,
    rankListMV,
    MV
  },
  data() {
    return {
      activeName: "newestMV",
      loading: false,
      newestMVArr: [], //最新MV
      hitMVArr: [], //最热MV
      ranklistMVArr: [] //MV排行榜
    };
  },
  mounted() {
    this.getMVData();
  },
  methods: {
    async getMVData() {
      this.loading = true;
      const newestMVData = await getNewestMV(5);
      const hitMVData = await getMV("全部", "最热", 8, 0);
      const ranklistMVData = await getRanklistMV(10);
      console.log(ranklistMVData);
      try {
        this.newestMVArr = newestMVData.data;
        this.hitMVArr = hitMVData.data;
        this.ranklistMVArr = ranklistMVData.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.video {
  width: 100%;
  min-height: 100vh;
  .newest-MV {
    width: 100%;
    height: 450px;
    .newest-MV-list {
      display: grid;
      grid-template-rows: repeat(2, 180px);
      grid-template-columns: repeat(4, 1fr);
      row-gap: 15px;
      column-gap: 15px;
      .first-MV {
        grid-row: 1/3;
        grid-column: 1/3;
      }
    }
  }
  .hit-MV {
    .hit-MV-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 230px);
      row-gap: 20px;
      column-gap: 20px;
      justify-content: center;
      align-content: center;
    }
  }
  .rankList-MV {
    .rank-MV-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .rankListMV {
      border-bottom: 1px solid rgb(224, 224, 224);
    }
    .rankListMV:nth-child(odd) {
      border-right: 1px solid rgb(224, 224, 224);
    }
  }
}
</style>