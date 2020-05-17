import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import './plugins/element.js';
import VueCookies from 'vue-cookies';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  loading: require('./assets/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/loading-fail.png')  //加载失败图片
});
Vue.use(VueCookies);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;



//router跳转的时候返回顶部
router.afterEach(() => {
  window.scrollTo(0,0);
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
