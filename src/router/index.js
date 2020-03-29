import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index";
import search from "../views/search/search";
import myMusic from "../views/myMusic/myMusic";
import discoverMusic from "../views/discoverMusic/discoverMusic";
import video from "../views/video/video";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children:[
      {
        path: "/search",
        name: "search",
        component: search
      },
      {
        path: "/myMusic",
        name: "myMusic",
        component: myMusic
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
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
