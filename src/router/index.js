import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index";
import search from "../views/search/search";
import myMusic from "../views/myMusic/myMusic";
import discoverMusic from "../views/discoverMusic/discoverMusic";
import video from "../views/video/video";
import login from "../views/myMusic/login";
import myPage from "../views/myMusic/myPage";
import videoDetailsPage from "../views/video/videoDetailsPage";
import playlistDetailsPage from "../components/playlistDetailsPage";

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
        component: myMusic,
        children:[
          {
            path:"/myMusic/login",
            name:"login",
            component:login
          },
          {
            path:"/myMusic/myPage",
            name:"myPage",
            component:myPage
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
        path:"/playlistDetailsPage",
        name:"playlistDetailsPage",
        component:playlistDetailsPage
      }
    ]
  },
  {
    path:"/videoDetailsPage",
    name:"videoDetailsPage",
    component:videoDetailsPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
