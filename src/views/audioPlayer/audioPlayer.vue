<template>
  <div class="audioPlayer" v-if="isIf">
    <img v-lazy="audioList[songIndex].picUrl" class="music-img" @click="toSongDetailsPage" />
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
              <i v-if="item.length>1&&index!==(item.length-1)">/</i>
            </span>
          </div>
          <div>
            <span class="current-time">{{presentTime}}</span>/
            <span class="total-time">{{totalTime}}</span>
          </div>
        </div>
        <div class="audio-display-bottom">
          <el-slider
            volume="0"
            :show-tooltip="false"
            v-model="currentTime"
            class="progress"
            :max="audioLength"
            @change="changeAudioTime"
          ></el-slider>
        </div>
      </div>
    </div>
    <i class="icon like-button" @click="like()">
      <svg
        t="1587483829379"
        class="icon-heart"
        :class="isDislike?'':'icon-heart-click'"
        viewBox="-15 0 1200 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2955"
      >
        <path
          d="M1058.24 544A320 320 0 0 0 605.76 93.44 306.24 306.24 0 0 0 576 128a306.24 306.24 0 0 0-29.76-34.88A320 320 0 0 0 93.76 544l480 480z"
          p-id="2956"
        />
      </svg>
    </i>
    <i class="iconfont icon volume-button" @click="toShowVolumeSlider">&#xe7b4;</i>
    <div class="song-list" @click="toPlayList(!playListShow)">
      <i class="iconfont icon">&#xe636;</i>
    </div>
  </div>
</template>

<script>
//import {insertLikeSong} from '../../api/getUser';

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
      if (!this.audioList[this.songIndex].canDislike) {
        //pass
        this.audioList[this.songIndex].canDislike = true;
      }
    },
    "$store.state.curvolume": function(val) {
      //监控当前音量
      if (this.$refs.audio) {
        const audio = this.$refs.audio;
        audio.volume = val;
      }
    }
  },
  computed: {
    isDislike: {
      get: function() {
        return this.audioList[this.songIndex].canDislike;
      },
      set: function(val) {
        console.log(val);
        this.audioList[this.songIndex].canDislike = val;
      }
    },
    playListShow() {
      return this.$store.state.playListShow;
    },
    volumeSliderShow() {
      return this.$store.state.volumeSliderShow;
    },
    musicState: {
      //音乐播放的状态
      get: function() {
        return this.$store.state.musicState;
      },
      set: function(val) {
        this.$store.commit("changeMusicState", val);
      }
    },
    songIndex: {
      //当前播放的歌曲在歌单中的下标
      get: function() {
        return this.$store.state.songIndex;
      },
      set: function(val) {
        this.$store.commit("changeSongIndex", val);
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
      this.$store.commit("changeSongIndex", this.songIndex);
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
      this.$store.commit("changeSongIndex", this.songIndex);
      this.lastTime = null;
    },
    toShowVolumeSlider() {
      this.$store.commit("changevolumeSliderState", !this.volumeSliderShow);
    }
    /* async like() {
      var allcookies = document.cookie;
      //索引长度，开始索引的位置
      var cookie_pos = allcookies.indexOf("iduser");

      // 如果找到了索引，就代表cookie存在,否则不存在
      if (cookie_pos != -1) {
        this.isDislike = !this.isDislike;
        console.log(this.audioList[this.songIndex].id);
        let idmusic = this.audioList[this.songIndex].id;
        await insertLikeSong(idmusic);
      } else {
        this.open();
      }
    },
    open() {
      this.$alert("请先登录", "", {
        confirmButtonText: "确定"
      });
    }*/
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