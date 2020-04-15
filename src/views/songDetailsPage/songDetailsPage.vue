<template>
  <transition name="pageTransition">
    <div class="songDetailsPage">
      <img :src="songInformation.picUrl" class="song-backgroundImg" />
      <i class="iconfont closeIcon" @click="closePage()">&#xe668;</i>
      <div class="songDetails" v-if="pageShow">
        <div class="song-LP-mask" ref="playImg">
          <img :src="songInformation.picUrl" class="song-LP-img" />
        </div>
        <div class="song-information">
          <span class="song-name">{{songInformation.name}}</span>
          <div class="song-album">
            <span>专辑：{{songInformation.song.album.name}}</span>
            歌手：
            <span :key="index" v-for="(item,index) in songInformation.song.artists">
              {{item.name}}
              <i
                v-if="songInformation.song.artists.length>1&&index!==(songInformation.song.artists.length-1)"
              > / </i>
            </span>
          </div>
          <div class="song-words">
            <span v-for="(value,key,index) in lyrics" :key="index" :class="{words:key == `${audioCurrentTime}`}">{{value}}</span><br />
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
      lyrics: {},
    };
  },
  created() {},
  watch: {
    songInformation() {
      this.getLyricData();
    },
    audioCurrentTime(){
      
    }
  },
  computed: {
    pageShow() {
      return this.$store.state.songPageShow;
    },
    songInformation() {
      return this.$store.state.songInformation;
    },
    audioCurrentTime(){
      return this.$store.state.audioCurrentTime;
    }
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