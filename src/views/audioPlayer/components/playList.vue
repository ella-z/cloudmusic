<template>
  <transition name="playListTransition">
    <div class="playList">
      <nav>
        <span>播放列表</span>
        <i class="iconfont icon" @click="toClose()">&#xe607;</i>
      </nav>
      <div>

      </div>
    </div>
  </transition>
</template>

<script>
//import song from "../../../components/song";
export default {
  components:{
    //song
  },
  methods: {
    toClose() {
      this.$store.commit("changePlayListState", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.playList {
  width: 40%;
  height: 60%;
  position: fixed;
  right: 0;
  bottom: 40px;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.3s;
  background-color: #fff;
  nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #e1e1e2;
      span{
          font-weight: 700;
      }
    .icon {
      cursor: pointer;
      font-size: 12px;
    }
  }
}
.playListTransition-enter-active {
  transform: translateY(100%);
}
.playListTransition-leave-active {
  transform: translateY(100%);
}
</style>