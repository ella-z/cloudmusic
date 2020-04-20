<template>
  <div class="search" v-loading="loading">
    <div class="search-box">
      <div type="text" class="search-input">
        <i class="iconfont icon">&#xe611;</i>
        <input
          type="text"
          placeholder="搜索音乐"
          @change="changeInputValue(inputVal)"
          @blur="inputBlur()"
          @focus="inputFocus()"
          v-model="inputVal"
          @keyup.enter="search(inputVal)"
        />
      </div>
      <button class="search-button" @click="search(inputVal)">确认</button>
    </div>
    <div class="search-result" v-show="searchContent">
      <div class="search-result-default" v-show="resultDefault">
        <span class="result-title">热搜榜</span>
        <ul>
          <li
            v-for="(item,index) in searchHotDetailData"
            :key="index"
            :class="index<3?'trendingSearch':''"
            @mousedown="search(item.searchWord)"
          >
            <span class="result-number">{{index+1}}</span>
            <div>
              <span class="result-song-title">{{item.searchWord}}</span>
              <span class="result-song-score">{{item.score}}</span>
              <span class="result-song-content">{{item.content}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="search-result-content" v-show="!resultDefault" v-loading="searchResultLoading">
        <div
          class="result-content-area"
          v-for="(itemOrder,index) in searchMultimatchData.order"
          :key="index"
        >
          <span class="result-content-title" v-if="itemOrder === 'songs'">
            <i class="iconfont icon">&#xe600;</i>
            单曲
          </span>
          <span class="result-content-title" v-else-if="itemOrder === 'artists'">
            <i class="iconfont icon">&#xe623;</i>
            歌手
          </span>
          <span class="result-content-title" v-else-if="itemOrder === 'albums'">
            <i class="iconfont icon">&#xe64b;</i>
            专辑
          </span>
          <span class="result-content-title" v-else-if="itemOrder === 'mvs'">
            <i class="iconfont icon">&#xe676;</i>
            视频
          </span>
          <span class="result-content-title" v-else-if="itemOrder === 'playlists'">
            <i class="iconfont icon">&#xe636;</i>
            歌单
          </span>
          <div
            v-for="(itemName,index) in searchMultimatchData[itemOrder]"
            :key="index"
            class="result-content-row"
          >
            {{itemName.name}}
            <span
              v-for="(itemArtists,index) in itemName.artists"
              :key="index"
            >- {{itemArtists.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="top-search">
      <nav>
        <span>热门搜索</span>
      </nav>
      <div class="search-content">
        <span
          v-for="(item,index) in searchHotData"
          :key="index"
          @click="search(item.first)"
        >{{item.first}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchHot, getSearchMultimatch } from "../../api/getSearch";

export default {
  data() {
    return {
      searchHotData: [], //简约版热搜数据
      searchHotDetailData: [], //热搜数据
      searchMultimatchData: [],
      loading: false,
      searchResultLoading: false,
      searchContent: false, //是否展示热搜的内容
      inputVal: "", //input框里面的值
      timeout: null, //定时器
      resultDefault: true //是否展示默认的搜索数据
    };
  },
  watch: {
    inputVal(val) {
      // 实现input连续输入，只发一次请求
      if (val === "" || val === "undefined") {
        this.resultDefault = true;
      } else {
        this.resultDefault = false;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.changeInputValue(val);
        }, 300);
      }
    }
  },
  mounted() {
    this.getSearchHotData();
  },
  methods: {
    async getSearchHotData() {
      this.loading = true;
      const searchHot = await getSearchHot("http://localhost:3000/search/hot");
      const searchHotDetail = await getSearchHot(
        "http://localhost:3000/search/hot/detail"
      );
      try {
        this.searchHotData = searchHot.result.hots;
        this.searchHotDetailData = searchHotDetail.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async changeInputValue(val) {
      this.searchResultLoading = true;
      const searchMultimatch = await getSearchMultimatch(val);
      try {
        if (this.inputVal === val) {
          this.searchMultimatchData = searchMultimatch;
        }
        this.searchResultLoading = false;
      } catch (error) {
        this.searchResultLoading = false;
        console.log(error);
      }
    },
    inputFocus() {
      this.searchContent = true;
    },
    inputBlur() {
      this.searchContent = false;
    },
    search(searchWord) {
      this.$router.push({
        path: "/search/searchPage",
        query: {
          searchWord: searchWord
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/search.scss";
</style>