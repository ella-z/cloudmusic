<template>
  <div class="playCount">
    <i class="iconfont icon" v-html="icon">{{icon}}</i>
    {{playCount}}
  </div>
</template>

<script>
export default {
  props: ["RePlayCount","icon"],
  data() {
    return {
      playCount: "",
    };
  },
  mounted() {
    this.transferCount();
  },
  methods: {
    transferCount() {
      if (this.RePlayCount >= 10000) {
        this.playCount = parseInt(this.RePlayCount / 10000) + "万";
      } else {
        this.playCount = this.RePlayCount;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.playCount {
  background: rgba($color: #000000, $alpha: 0.3);
  padding: 2px 5px;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  color: #fff;
  line-height: 20px;
  .icon {
    margin-right: 5px;
    color: #fff;
  }
}
</style>