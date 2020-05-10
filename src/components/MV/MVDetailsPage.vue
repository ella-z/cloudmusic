<template>
  <div class="vedioDetailsPage" v-loading="loading">
    <i class="iconfont icon" @click="back">&#xe668;</i>
    <div class="video-box">
      <span class="video-title">
        <i class="iconfont MVIcon">&#xe62c;</i>
        {{MVData.name}}
      </span>
      <video :src="vedioSrc" controls="controls"></video>
    </div>
    <div class="imformation" v-if="vedioDetails">
      <div class="imformation-left" >
        <div class="video-recommend" v-show="vedioDetails.desc">
          <span>MV介绍</span>
          <div class="recommend-content">简介：{{vedioDetails.desc}}</div>
        </div>
        <div class="video-evaluation">
          <span>评论</span>
          <div class="comment-nav">精彩评论</div>
          <span class="tips" v-show="hotComments.length === 0?true:false">暂无数据</span>
          <comment v-for="(item,index) in hotComments" :key="index" :comment="hotComments[index]"></comment>
          <div class="comment-nav">最新评论({{commentsCount}})</div>
          <span class="tips" v-show="comments.length === 0?true:false">暂无数据</span>
          <comment v-for="(item,index) in comments" :key="'info'+index" :comment="comments[index]"></comment>
        </div>
      </div>
      <div class="imformation-right">
        <span>相关推荐</span>
        <div class="simiMV-list">
          <simpleMV v-for="(item,index) in simiMVArr" :key="index" :MVData="item" class="simiMV"></simpleMV>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { getMVDetail, getSimiMV } from "../../api/getMVData";
import { getComments } from "../../api/getData";
import comment from "../../components/comments";
import simpleMV from "../MV/simpleMV";

export default {
  components: {
    comment,
    simpleMV
  },
  data() {
    return {
      vedioDetails: null, //MV的详细信息
      vedioSrc: "",       //MV的来源
      hotComments: [],    //热搜评价的数组
      comments: [],       //评价的数组
      simiMVArr: [],      //相似MV的数组
      commentsCount: 0,   //评价的总数
      loading: false,
      MVData:this.$store.state.MVData
    };
  },
  created() {
    this.getMVDetailData();
  },
  watch:{
    '$store.state.MVData'(val){
      this.MVData = val;
      this.getMVDetailData();
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getMVDetailData() {
      this.loading = true;
      try {
        //获取MV的详细信息以及相关推荐
        const MVDetailData = await getMVDetail(this.MVData.id);
        const simiMVData = await getSimiMV(this.MVData.id);
        this.simiMVArr = simiMVData.mvs;
        this.vedioSrc = MVDetailData.data.brs[480];
        this.vedioDetails = MVDetailData.data;

        //获取MV的评价
        const MVcomment = await getComments(this.vedioDetails.commentThreadId);
        let { hotComments, comments, total } = MVcomment;
        this.hotComments = hotComments;
        this.comments = comments;
        this.commentsCount = total;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vedioDetailsPage {
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  .icon {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    box-shadow: 0 0 8px 0.5px #aeb6be;
    border: 1px solid #aeb6be;
    position: absolute;
    top: 0%;
    right: 5%;
  }
  .video-box {
    .video-title {
      display: block;
      font-weight: 700;
      font-size: 45px;
      line-height: 45px;
      margin-bottom: 3%;
      border: none;
      .MVIcon {
        font-size: 30px;
        color: #e83c3c;
      }
    }
    video {
      width: 70%;
      height: 15%;
    }
  }
  .imformation {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    span {
      border-bottom: 2px solid #c62f2f;
      font-size: 25px;
      font-weight: 700;
      padding: 10px;
    }
    .imformation-left {
      .video-recommend {
        margin-top: 5%;
        .recommend-content {
          font-size: 20px;
          margin: 5% auto;
          line-height: 30px;
          width: 80%;
          text-align: left;
        }
      }
      .video-evaluation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5% auto 0;
        width: 80%;
        .tips {
          font-size: 16px;
          font-weight: 500;
          border: none;
          margin-top: 50px;
        }
        .comment-nav {
          width: 100%;
          height: 30px;
          text-align: left;
          border-bottom: 1px solid #e1e1e2;
          margin-top: 5%;
        }
      }
    }
    .imformation-right {
      padding: 60px 10px;
      min-height: 100vh;
      span {
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
        width: 60%;
      }
      .simiMV-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .simiMV{
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>