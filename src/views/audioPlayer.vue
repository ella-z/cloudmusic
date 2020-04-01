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
    <div id="audio">
      <audio src="../assets/demo.mp3">您的浏览器不支持 audio 元素。</audio>
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
        musicState:false
      }
    },
    methods:{
      changeMusicState(){
        this.musicState = !this.musicState;
      }
    }
}
</script>

<style lang="scss" scoped>
.audioPlayer{
    width: 100%;
    height: 40px;
    background-color: #F6F6F8;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #E1E1E2;
    z-index:999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding:2px 10px;
    .music-img{
        width: 30px;
        height: 30px;
    }
    #audio{
        width: 60%;
        height: 20px;
        background-color: pink;
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