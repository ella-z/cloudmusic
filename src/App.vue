<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1711563 */
  src: url('//at.alicdn.com/t/font_1711563_yf9931aoza.eot');
  src: url('//at.alicdn.com/t/font_1711563_yf9931aoza.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1711563_yf9931aoza.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1711563_yf9931aoza.woff') format('woff'),
  url('//at.alicdn.com/t/font_1711563_yf9931aoza.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1711563_yf9931aoza.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: #000;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
*{
  padding:0;
  margin:0;
  font-size: 12px;
  box-sizing:border-box;
  font-family:"Times New Roman",Georgia,Serif;
  list-style: none;
  user-select:none; //取消双击选中文字
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  min-height: 100vh;
}
</style>