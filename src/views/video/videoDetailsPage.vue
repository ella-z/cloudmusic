<template>
  <div class="vedioDetailsPage">
    <i class="iconfont icon" @click="back">&#xe668;</i>
    <div class="video-box">
       <span class="video-title">title</span>
       <video src="../../assets/demo.mp4" controls="controls"></video>
    </div>
   <div class="video-recommend">
      <span>MV介绍</span>
      <div>xxxxxxxxx</div>
   </div>
   <div class="video-evaluation">
      <span>评论</span>
      <div>yyyyyyy</div>
   </div>
  </div>
</template>

<script>
export default {
   methods:{
      back()
      {
         this.$router.go(-1);
      }
   }
};
</script>

<style lang="scss" scoped>
.vedioDetailsPage {
  width: 100vw;
  min-height: 100vh;
  margin-top: 2%;
  .icon {
     width: 25px;
     height: 25px;
     text-align: center;
     line-height: 25px;
     box-shadow: 0 0 8px 0.5px #aeb6be;
    border: 1px solid #aeb6be;
    position: absolute;
    top: 5%;
    right: 5%;
  }
  .video-box{
     .video-title{
        display: block;
        font-weight: 700;
        font-size: 35px;
     }
     video{
        width: 70%;
        height: 15%;
     }
  }
  .video-recommend{
      margin-top: 5%;
     span{
        border-bottom: 1px solid #aeb6be;
        font-size: 20px;
        font-weight: 700;
     }
  }
    .video-evaluation{
      margin-top: 5%;
     span{
        border-bottom: 1px solid #aeb6be;
        font-size: 20px;
        font-weight: 700;
     }
  }
}
</style>