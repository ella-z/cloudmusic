import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index";
import search from "../views/search/search";
import searchPage from "../views/search/searchPage";
import myMusic from "../views/myMusic/myMusic";
import discoverMusic from "../views/discoverMusic/discoverMusic";
import video from "../views/video/video";
import login from "../views/myMusic/login";
import myPage from "../views/myMusic/myPage";
import MVDetailsPage from "../components/MV/MVDetailsPage";
import playlistDetailsPage from "../components/playlist/playlistDetailsPage";

//this.$router.push相同地址报错的解决办法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children: [
      {
        path: "/search",
        name: "search",
        component: search
      },
      {
        path:"/search/searchPage",
        name:"searchPage",
        component:searchPage
      },
      {
        path: "/myMusic",
        name: "myMusic",
        component: myMusic,
        children: [
          {
            path: "/myMusic/login",
            name: "login",
            component: login
          },
          {
            path: "/myMusic/myPage",
            name: "myPage",
            component: myPage
          }
        ]
      },
      {
        path: "/discoverMusic",
        name: "discoverMusic",
        component: discoverMusic
      },
      {
        path: "/video",
        name: "video",
        component: video
      },
      {
        path: "/playlistDetailsPage",
        name: "playlistDetailsPage",
        component: playlistDetailsPage
      }, 
      {
        path: "/MVDetailsPage",
        name: "MVDetailsPage",
        component: MVDetailsPage
      }
    ]
  },

];

const router = new VueRouter({
  routes
});

export default router;
