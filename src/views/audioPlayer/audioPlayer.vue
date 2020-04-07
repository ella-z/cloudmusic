<template>
  <div class="audioPlayer">
    <img src="../../assets/demo.png" class="music-img" @click="toSongDetailsPage" />
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
        :autoplay="audioAutoplay"
        :src="'https://music.163.com/song/media/outer/url?id='+audioList[audioIndex].id+'.mp3'"
        ref="audio"
        @loadedmetadata="getAudioLength()"
        @timeupdate="audioTimeUpdate()"
      >您的浏览器不支持 audio 元素。</audio>
      <div class="audio-display">
        <span class="current-time">{{presentTime}}</span>
        <el-slider
          :show-tooltip="false"
          v-model="currentTime"
          class="progress"
          :max="audioLength"
          @change="changeAudioTime"
        ></el-slider>
        <span class="total-time">{{totalTime}}</span>
      </div>
    </div>
    <div class="like-button">
      <i class="iconfont">&#xe64d;</i>
    </div>
    <div class="volume-button">
      <i class="iconfont">&#xe7b4;</i>
    </div>
    <div class="song-list" @click="toPlayList(!playListShow)">
      <i class="iconfont">&#xe636;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicState: false, //音乐播放的状态
      value: 0,
      audio: "", //音频
      audioLength: 0,
      currentTime: 0, //当前播放时间
      lastTime: null, //标记时间戳
      totalTime: "00:00", //音频总时长
      presentTime: "00:00",
      audioIndex: 0,
      audioAutoplay:false, //在切换歌曲时，可自动播放音乐
      audioList: [
        {
          id:"1403250178",
        },
        {
          id:"16431978"
        }
      ]
    };
  },
  mounted() {},
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
    }
  },
  computed: {
    playListShow() {
      return this.$store.state.playListShow;
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
      let min = parseInt(this.$refs.audio.duration / 60);
      let ss = parseInt(this.$refs.audio.duration % 60);
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
      this.$store.commit("changeSongPageState", true);
    },
    toPlayList(val) {
      //是否展示歌曲列表
      this.$store.commit("changePlayListState", val);
    },
    switchSong(val) {
      //切换歌曲
      if (val === "next" && this.audioIndex < this.audioList.length - 1) {
        this.audioIndex++;
      } else if (val === "previous" && this.audioIndex > 0) {
        this.audioIndex--;
      } else if(this.audioIndex === this.audioList.length - 1){
        this.audioIndex = 0;
      }
       this.musicState = true;
       this.audioAutoplay = true;
    }
  }
};
</script>

<style lang="scss">
.el-slider__button {
  border-color: #e83c3c !important;
}
.el-slider__bar {
  background-color: #e83c3c !important;
}
</style>

<style lang="scss" scoped>
@import "styles/audioPlayer.scss";
</style>