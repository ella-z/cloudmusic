<template>
  <div class="playlistModule">
    <el-select v-model="value" placeholder="请选择" @change="changeCat">
      <el-option-group v-for="group in catlist" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.catlistOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-option-group>
    </el-select>
    <div class="cat-playlist">
      <loadingMask :loading="loading"></loadingMask>
      <playlist
        v-for="(item,index) in categoryPlaylists"
        :key="index"
        :playlistDetails="categoryPlaylists[index]"
      ></playlist>
    </div>
  </div>
</template>

<script>
import { getPlaylistCatlist, getCatPlaylist } from "../../api/getData";
import playlist from "../../components/playlist";
import loadingMask from "../../components/loadingMask";

export default {
  components: {
    playlist,
    loadingMask
  },
  data() {
    return {
      catlist: [
        {
          label: "全部歌单",
          catlistOptions: [
            {
              value: "全部",
              label: "全部歌单"
            }
          ]
        }
      ],
      value: "全部",
      categoryPlaylists: [],
      loading: false
    };
  },
  mounted() {
    this.getCatlistData();
    this.changeCat("全部");
  },
  methods: {
    async getCatlistData() {
      this.loading = true;
      const catlistData = await getPlaylistCatlist();
      try {
        let { categories, sub } = catlistData;
        for (let i in categories) {
          this.catlist.push({
            label: categories[i],
            catlistOptions: []
          });
        }
        sub.forEach(element => {
          this.catlist[element.category + 1].catlistOptions.push({
            value: element.name,
            label: element.name
          });
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async changeCat(val) {
      this.loading = true;
      const catPlaylist = await getCatPlaylist(val);
      try {
        this.categoryPlaylists = catPlaylist.playlists;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss">
.el-select-dropdown__item.selected {
  color: #c62f2f !important;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #c62f2f !important;
}
.el-select .el-input__inner:focus {
  border-color: #c62f2f !important;
}
</style>

<style lang="scss" scoped>
.playlistModule {
  width: 100%;
  min-height: 100vh;
  .cat-playlist {
    margin-top: 2%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    column-gap: 20px;
    row-gap: 30px;
    justify-content: center;
    align-content: center;
  }
}
</style>