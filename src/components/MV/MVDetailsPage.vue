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
    <div class="video-recommend">
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
</template>

<script>
import { getMVDetail } from "../../api/getMVData";
import {getComments} from "../../api/getData";
import comment from "../../components/comments";


export default {
  components: {
    comment
  },
  data() {
    return {
      vedioDetails: "",
      vedioSrc: "",
      hotComments: [],
      comments: [],
      commentsCount: 0,
      loading: false
    };
  },
  mounted() {
    this.getMVDetailData();
  },
  computed: {
    MVData() {
      return this.$store.state.MVData;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getMVDetailData() {
      this.loading = true;
      const MVDetailData = await getMVDetail(this.MVData.id);
      try {
        this.vedioSrc = MVDetailData.data.brs[480];
        this.vedioDetails = MVDetailData.data;
      } catch (error) {
        console.log(error);
      }
      const MVcomment = await getComments(this.vedioDetails.commentThreadId);
      try {
        let { hotComments, comments, total } = MVcomment;
        this.hotComments = hotComments;
        this.comments = comments;
        this.commentsCount = total;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
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
  span {
    border-bottom: 2px solid #e83c3c;
    font-size: 25px;
    font-weight: 700;
  }
  .video-recommend {
    margin-top: 5%;

    .recommend-content {
      font-size: 20px;
      margin: 2% auto;
      width: 60%;
      text-align: left;
    }
  }
  .video-evaluation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% auto 0;
    width: 70%;
    .tips {
      font-size: 16px;
      font-weight: 500;
      border:none;
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
</style>