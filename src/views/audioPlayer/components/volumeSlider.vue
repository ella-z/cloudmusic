<template>
 <transition name="volumeSliderTransition">
  <div class="volumeSlider">
    <div class="slider">
      <el-slider
        v-model="value"
        vertical
        height="180px"
        :max="1"
        :step="0.1"
        :show-tooltip="false"
        @input="changeValue"
      ></el-slider>
    </div>
  </div>
 </transition>
</template>

<script>
export default {
  data() {
    return {
      value: 0.1
    };
  },
  methods: {
    changeValue() {
        this.$store.commit('changeVolume',this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.volumeSlider {
  width: 50px;
  height: 200px;
  background-color: #fff;
  position: fixed;
  z-index: 2;
  right: 100px;
  bottom: 85px;
  box-shadow: 0 0 10px 1px #ccc;
  .slider {
    margin: 10px 5px;
  }
}
.volumeSliderTransition-enter-active {
  animation: sliderIn .5s;
}
.volumeSliderTransition-leave-active {
  animation: sliderIn .5s reverse;
}
@keyframes sliderIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
}
</style>