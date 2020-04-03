<template>
  <div class="audioPlayer">
    <img src="../assets/demo.png" class="music-img" />
    <div class="music-button">
      <ul>
        <li>
          <i class="iconfont icon">&#xe603;</i>
        </li>
        <li class="play-button" @click="changeMusicState">
          <i class="iconfont icon" v-show="!musicState">&#xe63d;</i>
          <i class="iconfont icon" v-show="musicState">&#xe61d;</i>
        </li>
        <li>
          <i class="iconfont icon">&#xe602;</i>
        </li>
      </ul>
    </div>
    <div class="audio-box">
      <audio src="../assets/demo.mp3" id="audio">您的浏览器不支持 audio 元素。</audio>
      <div class="audio-display">
          <span class="current-time">00:00</span>
          <el-slider  :show-tooltip="false" v-model="value" class="progress"></el-slider>
          <span class="total-time">{{totalTime}}</span>
      </div>
    </div>
    <div class="like-button">
        <i class="iconfont">&#xe64d;</i>
    </div>
    <div class="volume-button">
        <i class="iconfont">&#xe7b4;</i>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        musicState:false,//音乐播放的状态
        value:0,
        audio:'', //音频
        totalTime:'00:00'//音频总时长
      }
    },
    mounted(){
      this.audio = document.getElementById('audio');
    },
    watch:{
      totalTime(val){
        console.log(val);
      }
    },
    methods:{
      changeMusicState(){
        this.musicState = !this.musicState;
        if(this.musicState){
          this.audio.play();
          let min = parseInt(this.audio.duration / 60);
          let ss = parseInt(this.audio.duration % 60);
          if(min<10){
            min = '0'+min;
          }
          if(ss<10){
            ss = '0'+ss;
          }
          this.totalTime = min+":" + ss;
        }else{
          this.audio.pause();
        }
      }
    }
}
</script>

<style lang="scss">
.el-slider__button{
  border-color: #E83C3C!important;
}
.el-slider__bar{
  background-color: #E83C3C!important;
}
</style>

<style lang="scss" scoped>
.audioPlayer{
    width: 100%;
    height: 40px;
    background-color: #F6F6F8;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #E1E1E2;
    z-index:99999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding:2px 10px;
    .music-img{
        width: 30px;
        height: 30px;
    }
    .audio-box{
        width: 60%;
        height: 20px;
        .audio-display{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          .progress{
            width: 500px;
          }
        }
    }
    .music-button{
        ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            li{ 
                cursor: pointer;
                width: 20px;
                height: 20px;
                background-color: #E83C3C;
                border-radius: 50%;
                margin-right: 10px;
                line-height: 18px;
                text-align: center;
                .icon{
                    color:#fff;
                    font-size: 8px;
                   
                }
            }
        }
        .play-button{
            width: 25px;
            height: 25px;
            line-height: 25px;
            .icon{
                font-size: 12px;
            }
        }
    }
}
</style>