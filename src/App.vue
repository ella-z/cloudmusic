<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1711563 */
  src: url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.eot');
  src: url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.woff') format('woff'),
  url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1711563_t3g1i6p52qr.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  color: #000;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Georgia, Serif;
  list-style: none;
  user-select: none; //取消双击选中文字
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
}

.el-tabs__nav-scroll {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .el-tabs__item.is-active {
    color: #c62f2f;
  }
  .el-tabs__item:hover {
    color: #c62f2f;
  }
  .el-tabs__active-bar {
    background-color: #c62f2f;
  }
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: -1px 0 0 0 #c62f2f !important;
}

</style>