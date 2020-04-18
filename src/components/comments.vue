<template>
  <div class="comments">
    <img :src="comment.user.avatarUrl" alt />
    <div class="observer">
      <span class="observer-name">{{comment.user.nickname}}：</span>
      <span class="observer-content">{{comment.content}}</span>
      <br />
      <br />
      <span class="comment-time">{{commentTime}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["comment"],
  data() {
    return {
      commentTime:''
    };
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      let time = new Date(this.comment.time);
      this.commentTime =
        time.getFullYear() +
        "年" +
        (time.getMonth() < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1) +
        "月" +
        (time.getDate() < 10 ? "0" + time.getDate() : time.getDate())+
        "日"+" "+  
        (time.getHours() < 10 ? "0" + time.getHours() : time.getHours())+
        ":"+
        (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes());
    }
  }
};
</script>

<style lang="scss" scoped>
.comments {
  border-bottom: 1px solid #e1e1e2;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 2%;
  }
  .observer {
    text-align: left;
    span {
      font-size: 20px;
    }
    .observer-name {
      color: #0c73c2;
    }
    .comment-time {
      color: #999999;
    }
  }
}
</style>