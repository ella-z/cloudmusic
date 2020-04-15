import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songPageShow:false, //歌曲的详情页面是否展示
    playListShow:false, //歌曲列表是否展示
    playlist:[],//正在播放的歌单
    songInformation:'',//正在播放的歌曲的信息
    playlistIndex:0, //歌单中歌曲的下标
    audioCurrentTime:'', //当前audio播放的时间
    musicState:false, //当前音乐播放的状态
  },
  mutations: {
    changeSongPageState(state,val){  //改变歌曲的详情页面展示的状态
      state.songPageShow = val;
    },
    changePlayListState(state,val){
      state.playListShow = val;
    },
    changePlaylist(state,val){
      state.playlist = val;
    },
    changeplaylistIndex(state,val){
      state.playlistIndex = val;
    },
    changeSongInformation(state,val){
      state.songInformation = val;
    },
    changeAudioCurrentTime(state,val){
      state.audioCurrentTime = val;
    },
    changeMusicState(state,val){
      state.musicState = val;
    }
  },
  actions: {},
  modules: {}
});
