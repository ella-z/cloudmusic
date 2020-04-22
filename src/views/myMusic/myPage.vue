<template>
  <div class="myPage" v-loading="loading">
    <span class="logOut" @click="back()">退出登录</span>
    <div class="user-imformation">
      <img src="../../assets/logo.jpg" alt />
      <div class="user-imformation-content">
        <span class="user-name">{{userData.nameuser||''}}</span>
        <span></span>
      </div>
    </div>
    <div class="like-song">
      <span>我喜欢的音乐</span>
      <song
        v-for="(item,index) in musicDetailArr"
        :key="index"
        :number="index+1"
        :songs="item"
        :playlist="musicDetailArr"
        :songIndex="index"
      ></song>
    </div>
  </div>
</template>

<script>
//import { getLikeMusic } from "../../api/getUser";
//import { getMusicDetail } from "../../api/getData";
//import song from "../../components/song2";

export default {
  /*components: {
    song
  },
  data() {
    return {
      userData: this.$route.params.userData,
      musicDetailArr: [],
      loading: false
    };
  },
  mounted() {
    this.getMusic();
  },
  methods: {
    back() {
      this.delCookie("iduser");
      this.delCookie("password");
      this.$router.go(-1);
    },
    delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
      else return null;
    },
    async getMusic() {
      this.loading = true;
      const musicData = await getLikeMusic();
      let Arr = [];
      for (let index = 0; index < musicData.length; index++) {
        const musicDetailData = await getMusicDetail(musicData[index].idmusic);
        let data = musicDetailData.songs[0];
        Arr.push({
          id: data.id,
          name: data.name,
          picUrl: data.al.picUrl,
          album: data.al,
          artists: data.ar,
          song: {
            artists: data.ar
          },
          duration: data.dt
        });
      }
      this.musicDetailArr = Arr;
      this.loading = false;
    }
  }*/
};
</script>

<style lang="scss" scoped>
.myPage {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logOut {
    position: absolute;
    top: -15px;
    right: 30px;
    z-index: 9;
    padding: 8px 10px;
    line-height: 30px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 0 10px 1px #ccc;
  }
  .user-imformation {
    width: 90%;
    height: 350px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #999;
    img {
      width: 280px;
      height: 280px;
    }
    .user-imformation-content {
      margin-left: 4%;
      width: 100%;
      span {
        display: block;
        padding-top: 15px;
      }
      .user-name {
        width: 100%;
        font-size: 35px;
        font-weight: 700;
        padding: 0;
        padding-bottom: 15px;
        border-bottom: 1px solid #e1e1e2;
      }
    }
  }
  .like-song {
    width: 90%;
    span {
      display: block;
      padding: 10px 0;
      border-bottom: 1px solid #999;
    }
  }
}
</style>