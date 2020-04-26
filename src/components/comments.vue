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
      commentTime: ""
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
        (time.getDate() < 10 ? "0" + time.getDate() : time.getDate()) +
        "日" +
        " " +
        (time.getHours() < 10 ? "0" + time.getHours() : time.getHours()) +
        ":" +
        (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes());
    }
  }
};
</script>

<style lang="scss" scoped>
.comments {
  border-bottom: 1px solid #e1e1e2;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  padding: 25px 0;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    justify-self: center;
    align-self: flex-start;
  }
  .observer {
    text-align: left;
    padding-left: 10px;
    span {
      font-size: 18px;
      color: #000;
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