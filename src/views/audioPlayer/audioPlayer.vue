<template>
  <div class="audioPlayer" v-if="isIf">
    <img :src="audioList[songIndex].picUrl" class="music-img" @click="toSongDetailsPage" />
    <div class="music-button">
      <ul>
        <li @click="switchSong('previous')">
          <i class="iconfont icon">&#xe603;</i>
        </li>
        <li class="play-button" @click="changeMusicState">
          <i class="iconfont icon" v-show="!musicState">&#xe63d;</i>
          <i class="iconfont icon" v-show="musicState">&#xe61d;</i>
        </li>
        <li @click="switchSong('next')">
          <i class="iconfont icon">&#xe602;</i>
        </li>
      </ul>
    </div> 
    <div class="audio-box">
      <audio
        :autoplay="musicState"
        :src="'https://music.163.com/song/media/outer/url?id='+audioList[songIndex].id+'.mp3'"
        ref="audio"
        @ended="audioEnd()"
        @loadedmetadata="getAudioLength()"
        @timeupdate="audioTimeUpdate()"
      >您的浏览器不支持 audio 元素。</audio>
      <div class="audio-display">
        <div class="audio-display-top">
          <div class="audio-display-title">
            {{audioList[songIndex].name}} —
            <span
              :key="index"
              v-for="(item,index) in audioList[songIndex].song.artists"
            >
              {{item.name}}
              <i
                v-if="audioList[songIndex].song.artists.length>1&&index!==(audioList[songIndex].song.artists.length-1)"
              >/</i>
            </span>
          </div>
          <div>
            <span class="current-time">{{presentTime}}</span>/
            <span class="total-time">{{totalTime}}</span>
          </div>
        </div>
        <div class="audio-display-bottom">
          <el-slider
            :show-tooltip="false"
            v-model="currentTime"
            class="progress"
            :max="audioLength"
            @change="changeAudioTime"
          ></el-slider>
        </div>
      </div>
    </div>
    <i class="iconfont icon like-button">&#xe615;</i>
    <i class="iconfont icon volume-button">&#xe7b4;</i>
    <div class="song-list" @click="toPlayList(!playListShow)">
      <i class="iconfont icon">&#xe636;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIf: false,
      value: 0,
      audio: "", //音频
      audioLength: 0,
      currentTime: 0, //当前播放时间
      lastTime: null, //标记时间戳
      totalTime: "00:00", //音频总时长
      presentTime: "00:00",
      audioList: []
    };
  },
  watch: {
    currentTime(val) {
      let min = parseInt(val / 60);
      let ss = parseInt(val % 60);
      if (min < 10) {
        min = "0" + min;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      this.presentTime = min + ":" + ss;
    },
    "$store.state.playlist": function(val) {
      this.audioList = val;
      this.isIf = true;
    }
  },
  computed: {
    playListShow() {
      return this.$store.state.playListShow;
    },
    musicState:{
      //音乐播放的状态
      get:function(){
        return this.$store.state.musicState;
      },
     set: function(val){
       this.$store.commit("changeMusicState",val);
     }
    },
    songIndex:{
      //当前播放的歌曲在歌单中的下标
      get:function(){
        return this.$store.state.songIndex;
      },
      set:function(val){
        this.$store.commit("changeSongIndex",val)
      }
    }
  },
  mounted() {
    if (this.$store.state.playlist.length === 0) {
      this.isIf = false;
    } else {
      this.isIf = true;
    }
  },
  methods: {
    changeMusicState() {
      //改变音频状态，暂停或者播放
      this.musicState = !this.musicState;
      if (this.musicState) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    getAudioLength() {
      //获取音视频时长
      this.audioLength = this.$refs.audio.duration;
      let min = parseInt(this.audioLength / 60);
      let ss = parseInt(this.audioLength % 60);
      if (min < 10) {
        min = "0" + min;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      this.totalTime = min + ":" + ss;
    },
    audioTimeUpdate() {
      //更新音频时间
      let nowTime = Date.now();
      let gapTime = 1000;
      if (!this.lastTime || nowTime - this.lastTime > gapTime) {
        if (this.$refs.audio) {
          let time = this.$refs.audio.currentTime;
          this.currentTime = time;
        }
        this.lastTime = nowTime;
        this.$store.commit("changeAudioCurrentTime", this.presentTime);
      }
    },
    changeAudioTime(val) {
      //改变当前音频时间
      if (this.$refs.audio) {
        this.$refs.audio.currentTime = val;
      }
    },
    toSongDetailsPage() {
      //展示歌曲详情页
      this.$store.commit(
        "changeSongInformation",
        this.audioList[this.songIndex]
      );
      this.$store.commit("changeSongPageState", true);
    },
    toPlayList(val) {
      //是否展示歌曲列表
      this.$store.commit("changePlayListState", val);
    },
    switchSong(val) {
      //切换歌曲
      if (val === "next" && this.songIndex < this.audioList.length - 1) {
        this.songIndex++;
      } else if (val === "previous" && this.songIndex > 0) {
        this.songIndex--;
      } else if (this.songIndex === this.audioList.length - 1) {
        this.songIndex = 0;
      }
      this.musicState = true;
      this.$store.commit("changeSongIndex",this.songIndex);
    },
    audioEnd() {
      //当音乐播放结束后
      if (this.songIndex < this.audioList.length - 1) {
        this.songIndex++;
      } else if (this.songIndex > 0) {
        this.songIndex--;
      } else if (this.songIndex === this.audioList.length - 1) {
        this.songIndex = 0;
      }
      this.$store.commit("changeSongIndex",this.songIndex);
      this.lastTime = null;
    }
  }
};
</script>

<style lang="scss">
.el-slider__button {
  width: 12px;
  height: 12px;
  border: none;
  border-color: #e83c3c !important;
}
.el-slider__bar {
  background-color: #e83c3c !important;
}
</style>

<style lang="scss" scoped>
@import "styles/audioPlayer.scss";
</style>