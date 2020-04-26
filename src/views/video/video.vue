<template>
  <div class="video" v-loading="loading">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="MV精选" name="choicenessMV">
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
              :MVIndex="index+1"
              class="rankListMV"
            ></rankListMV>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部MV" name="allMV">
        <div class="MV-select">
          <div v-for="(item,index) in radioArr" :key="index">
            <span>{{item.name}}：</span>
            <el-radio-group v-model="radioArr[index].radio">
              <el-radio-button
                v-for="(item,index) in radioArr[index].label"
                :key="index"
                :label="item"
              ></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="allMV-list" v-loading="listLoading">
          <MV v-for="(item,index) in allMVArr" :key="index" :MVDetail="item"></MV>
        </div>
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
      activeName: "choicenessMV",
      radioArr: [
        {
          name: "地区",
          radioName: "areaRadio",
          radio: "全部",
          label: ["全部", "内地", "港台", "日本", "韩国"]
        },
        {
          name: "类型",
          radioName: "typeRadio",
          radio: "全部",
          label: ["全部", "官方版", "原生", "现场版", "网易出品"]
        },
        {
          name: "排序",
          radioName: "orderRadio",
          radio: "上升最快",
          label: ["上升最快", "最热", "最新"]
        }
      ],
      loading: false,
      listLoading: false,
      newestMVArr: [], //最新MV
      hitMVArr: [], //最热MV
      ranklistMVArr: [], //MV排行榜
      allMVArr: [] //全部MV
    };
  },
  watch: {
    radioArr: {
      handler() {
        this.getAllMVData();
      },
      deep: true
    }
  },
  mounted() {
    this.getChoicenessMVData();
    this.getAllMVData();
  },
  methods: {
    async getChoicenessMVData() {
      this.loading = true;

      //获取MV精选内容的数据
      const newestMVData = await getNewestMV(5);
      const hitMVData = await getMV("全部", "全部", "最热", 8, 0);
      const ranklistMVData = await getRanklistMV(10);
      try {
        this.newestMVArr = newestMVData.data;
        this.hitMVArr = hitMVData.data;
        this.ranklistMVArr = ranklistMVData.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async getAllMVData() {
      this.listLoading = true;
      const allMVData = await getMV(
        this.radioArr[0].radio,
        this.radioArr[1].radio,
        this.radioArr[2].radio,
        20,
        0
      );
      try {
        this.allMVArr = allMVData.data;
        this.listLoading = false;
      } catch (error) {
        this.listLoading = false;
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
        width: 100%;
        height: 100%;
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
  .MV-select {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(224, 224, 224);
    span {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  .allMV-list {
    width: 100%;
    margin: 1% auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 15px;
    align-items: center;
    justify-items: center;
  }
}
</style>