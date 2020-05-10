<template>
  <transition name="pageTransition">
    <div class="songDetailsPage" v-if="songInformation">
      <img :src="songInformation.al.picUrl" class="song-backgroundImg" />
      <i class="iconfont closeIcon" @click="closePage()">&#xe668;</i>
      <div class="songDetails">
        <div class="song-LP-mask" ref="playImg">
          <img :src="songInformation.al.picUrl" class="song-LP-img" />
        </div>
        <div class="song-information">
          <span class="song-name">{{songInformation.name}}</span>
          <div class="song-album">
            <span>专辑：{{songInformation.al.name}}</span>
            歌手：
            <span :key="index" v-for="(item,index) in songInformation.ar">
              {{item.name}}
              <i
                v-if="songInformation.ar.length>1&&index!==(songInformation.ar.length-1)"
              >/</i>
            </span>
          </div>
          <div class="song-words">
            <span
              v-for="(value,key,index) in lyrics"
              :key="index"
              :class="{words:index==lyricsIndex}"
            >{{value}}</span>
            <br /> 
          </div>
          <div class="song-icon">
            <i class="iconfont">&#xe60a;</i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { getLyric } from "../../api/getData";

export default {
  data() {
    return {
      lyrics: null,
      lyricsIndex:0,
      songInformation:this.$store.state.songInformation,
      audioCurrentTime:this.$store.state.audioCurrentTime
    };
  },
  watch: {
    "$store.state.songInformation": function(val) {
      this.lyricsIndex=0; 
      this.songInformation = val;
      this.getLyricData();
    },
    "$store.state.audioCurrentTime": function(val) {
      for (const key in this.lyrics) {
        if(key == val&& this.lyrics[this.lyricsIndex]!==''){
           console.log(val);
          this.lyricsIndex++;
        }
      }
    },
  },
  computed: {
    pageShow() {
      return this.$store.state.songPageShow;
    },
  },
  methods: {
    closePage() {
      this.$store.commit("changeSongPageState", false);
    },
    async getLyricData() {
      const lyric = await getLyric(this.songInformation.id);
      let lyricObj = {}; //obj.a obj[a]=当前key值所在的value值
      //设置一个正则 把数组[]去掉
      let reg = /\[(.*?)](.*)/g;
      lyric.lrc.lyric.replace(reg, (a, b, c) => {
        b = b.slice(0, 5);
        lyricObj[b] = c;
      });
      this.lyrics = lyricObj;
      console.log(this.lyrics);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/songDetailsPage.scss";
</style>