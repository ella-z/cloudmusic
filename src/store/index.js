import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songPageShow:false, //歌曲的详情页面是否展示
    playListShow:false
  },
  mutations: {
    changeSongPageState(state,val){  //改变歌曲的详情页面展示的状态
      state.songPageShow = val;
    },
    changePlayListState(state,val){
      state.playListShow = val;
    }
  },
  actions: {},
  modules: {}
});
