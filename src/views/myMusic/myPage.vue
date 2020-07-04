<template>
  <div class="myPage" v-if="userInformation">
    <div class="user-informations">
      <img :src="userInformation.profile.avatarUrl" alt />
      <div class="informations-detail">
        <span class="user-name">{{userInformation.profile.nickname}}</span>
        <ul>
          <li>
            <span class="title">动态</span>
            <span class="num">{{userInformation.profile.eventCount}}</span>
          </li>
          <li>
            <span class="title">关注</span>
            <span class="num">{{userInformation.profile.follows}}</span>
          </li>
          <li>
            <span class="title">粉丝</span>
            <span class="num">{{userInformation.profile.followeds}}</span>
          </li>
        </ul>
      </div>
      <button @click="loginOut">退出登录</button>
    </div>
    <div class="user-playlist">
      <span class="playlist-title">我创建的歌单 ({{userPlaylist.count}})</span>
      <simplePlaylist v-for="(item,index) in userPlaylist.playlistArr" :key="index" :simplePlaylist="item"></simplePlaylist>
    </div>
    <div class="user-playlist">
      <span class="playlist-title">我收藏的歌单 ({{subPlaylist.count}})</span>
       <simplePlaylist v-for="(item,index) in subPlaylist.playlistArr" :key="index" :simplePlaylist="item"></simplePlaylist>
    </div>
  </div>
</template>

<script>
import { getUserInformation, getUserPlaylist } from "../../api/user";
import simplePlaylist from "../../components/playlist/simplePlaylist"

export default {
  components:{
    simplePlaylist
  },
  data() {
    return {
      userInformation: null,
      userPlaylist: {
        count: 0,
        playlistArr: []
      },
      subPlaylist: {
        count: 0,
        playlistArr: []
      }
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        let uid = this.$cookies.get("uid");
        let userInformation = await getUserInformation(uid);
        this.userInformation = userInformation;
        let userPlaylist = await getUserPlaylist(uid);
        for (let i = 0; i < userPlaylist.length; i++) { 
          //判断歌单的创作者是否为用户，根据结果分别储存到不同的对象中
          if (
            userPlaylist[i].creator.nickname ===
            userInformation.profile.nickname
          ) {
            this.userPlaylist.count++;
            this.userPlaylist.playlistArr.push(userPlaylist[i]);
          } else {
            this.subPlaylist.count++;
            this.subPlaylist.playlistArr.push(userPlaylist[i]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    loginOut() {
      this.$cookies.remove("uid");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.myPage {
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-informations {
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 30px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .informations-detail {
      width: 100%;
      .user-name {
        display: block;
        width: 100%;
        font-size: 30px;
        font-weight: 700;
        padding: 0 0 15px 10px;
        border-bottom: 1px solid #ccc;
      }
      ul {
        width: 100%;
        height: 90px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        li {
          color: #999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .num {
            margin-top: 20px;
            font-size: 25px;
            color: #000;
          }
        }
      }
    }
    button {
      width: 120px;
      height: 45px;
      color: #e83c3c;
      background-color: #fff;
      border: 1px solid #e83c3c;
      margin-bottom: 40px;
    }
  }
  .user-playlist {
    width: 90%;
    .playlist-title {
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      font-weight: 700;
      color: #000;
    }
  }
}
</style>