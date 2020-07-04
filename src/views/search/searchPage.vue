<template>
  <div class="searchPage" v-loading="loading">
    <div class="result-display">
      <div>
        搜索
        <span class="keyword">"{{this.searchWord}}"</span>
      </div>
      <button @click="cancel()">取消搜索</button>
    </div>

    <el-tabs v-model="activeName" v-if="searchData.length!==0">
      <el-tab-pane label="单曲" name="songs" class="pane">
        <el-table
          :data="searchData[0].songs"
          style="width: 100%"
          :stripe="true"
          @row-click="rowClick"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="index" width="50" align="center">
            <template slot-scope="scope">
              <span>{{(type[0].offset) * 30 + scope.$index + 1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="音乐标题" sortable width="500"></el-table-column>
          <el-table-column prop="artists[0].name" label="歌手" sortable width="300"></el-table-column>
          <el-table-column prop="album[name]" label="专辑" sortable width="300"></el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="searchData[0].songCount*10"
            @current-change="songsPageChange"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="artists" class="pane">
        <artists v-for="(item,index) in searchData[1].artists " :key="index" :artist="item"></artists>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="searchData[1].artistCount*10"
            @current-change="artistsPageChange"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="albums" class="pane">
        <albums v-for="(item,index) in searchData[2].albums" :key="index" :album="item"></albums>
      </el-tab-pane>
      <el-tab-pane label="视频" name="mvs" class="pane">
        <div class="mvs">
          <MV v-for="(item,index) in searchData[3].mvs" :key="index" :MVDetail="item"></MV>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="playlists" class="pane"> 
        <simplePlaylist
          v-for="(item,index) in searchData[4].playlists"
          :key="index"
          :simplePlaylist="item"
        ></simplePlaylist>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getSearch } from "../../api/getSearch";
import MV from "../../components/MV/MV";
import simplePlaylist from "../../components/playlist/simplePlaylist";
import artists from "../../components/artists";
import albums from "../../components/albums";

export default {
  components: {
    MV,
    simplePlaylist,
    artists,
    albums
  },
  data() {
    return {
      activeName: "songs",
      loading: false,
      searchData: [],
      searchWord: this.$route.query.searchWord,
      totalPage: 100,
      type: [
        { name: "songs", type: 1, offset: 0 },
        { name: "artists", type: 100, offset: 0 },
        { name: "albums", type: 10, offset: 0 },
        { name: "mvs", type: 1004, offset: 0 },
        { name: "playlists", type: 1000, offset: 0 }
      ]
    };
  },
  async mounted() {
    await this.getSearchData(0); //异步操作
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    rowClick(row) {
      this.$store.commit("changeSongIndex", row.index);
      this.$store.commit("changePlaylist", this.searchData[0].songs);
    },
    tableRowClassName({ row, rowIndex }) {
      //为表格的每行添加索引,该索引在点击行的时候使用
      row.index = rowIndex;
    },
    async getSearchData(offset) {
      //获取搜索得到的结果
      this.loading = true;
      let arr = [];
      for (let i = 0; i < this.type.length; i++) {
        const data = await getSearch(
          this.searchWord,
          this.type[i].type,
          offset
        );
        arr.push(data);
      }
      this.searchData = arr;
      this.loading = false;
    },
    songsPageChange(val) { //当歌曲页数改变时，获取新的歌曲数据
      //更新呢新页面的数据
      this.getSearchData(val - 1);
      this.type[0].offset = val - 1;
    },
    artistsPageChange(val){//当歌手页数改变时，获取新的歌手数据
      this.getSearchData(val-1);
      this.type[1].offset = val - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.searchPage {
  width: 100%;
  min-height: 100vh;
  .result-display {
    padding: 0 10% 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .keyword {
      color: #0c73c2;
    }
    button {
      width: 100px;
      height: 40px;
      background-color: #fff;
      border: 1px solid #aeb6be;
      border-radius: 30px;
      cursor: pointer;
    }
  }
  .pane {
    display: flex;
    flex-direction: column;
    align-items: center;
    .block {
      margin-top: 50px;
    }
  }
  .mvs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
}
</style>
<style lang="scss">
.el-pager li.active {
  color: #e83c3c;
}
</style>