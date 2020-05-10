<template>
  <div class="searchPage" v-loading="loading">
    <div class="result-display">
      <div>
        搜索
        <span class="keyword">"{{this.searchWord}}"</span>
      </div>
      <button @click="cancel()">取消搜索</button>
    </div>

    <el-tabs v-model="activeName" v-if="searchData!==null">
      <el-tab-pane label="单曲" name="songs">
        <el-table
          :data="searchData.songs"
          style="width: 100%"
          :stripe="true"
          @row-click="rowClick"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="name" label="音乐标题" sortable width="500"></el-table-column>
          <el-table-column prop="artists[0].name" label="歌手" sortable width="300"></el-table-column>
          <el-table-column prop="album[name]" label="专辑" sortable width="300"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="artists">
        <artists v-for="(item,index) in searchData.artists " :key="index" :artist="item"></artists>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="albums">
        <albums v-for="(item,index) in searchData.albums" :key="index" :album="item"></albums>
      </el-tab-pane>
      <el-tab-pane label="视频" name="mvs">
        <div class="mvs">
          <MV v-for="(item,index) in searchData.mvs" :key="index" :MVDetail="item"></MV>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="playlists">
        <simplePlaylist
          v-for="(item,index) in searchData.playlists"
          :key="index"
          :simplePlaylist="searchData.playlists[index]"
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
      searchData: null,
      searchWord: this.$route.query.searchWord,
      type: [
        { name: "songs", type: 1 },
        { name: "artists", type: 100 },
        { name: "albums", type: 10 },
        { name: "mvs", type: 1004 },
        { name: "playlists", type: 1000 }
      ]
    };
  },
  mounted() {
    this.getSearchData();
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    rowClick(row) {
       this.$store.commit("changeSongIndex",row.index);
      console.log(row.id);
      console.log(row.index);
      console.log(this.searchData.songs);
       this.$store.commit("changePlaylist",this.searchData.songs);
    },
    tableRowClassName({row, rowIndex}){
      //为表格的每行添加索引
      row.index = rowIndex;
    },
    async getSearchData() {
      this.loading = true;
      let obj = new Object();
      for (let i = 0; i < this.type.length; i++) {
        const data = await getSearch(this.searchWord, this.type[i].type);
        obj[this.type[i].name] = data[this.type[i].name];
      }
      this.searchData = obj;
      this.loading = false;
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
  .mvs {
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
}
</style>