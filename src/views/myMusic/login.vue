<template>
  <div class="login">
    <span class="title">LOGIN</span>
    <div class="login-box">
      <div>
        <div class="login-input">
          <span>账号：</span>
          <input type="text" ref="account" placeholder="请输入账号" />
        </div>
        <div class="login-input">
          <span>密码：</span>
          <input type="password" name="password" id="password" ref="password" placeholder="请输入密码" />
        </div>
      </div>
      <button @click="toLogin">登录</button>
      <!-- <button>注册</button> -->
    </div>
  </div>
</template>

<script>
//import { getUser } from "../../api/getUser";

export default {
  methods:{
    toLogin() {
      this.$router.push({name:'myPage'});
    }
  }
 /* data() {
    return {
      account: "",
      password: "",
      userData: ""
    };
  },
  mounted() {
    this.getCookie("iduser");
  },
  methods: {
    open(text) {
      this.$alert(text, " ", {
        confirmButtonText: "确定",
      });
    },
    setcookie(name, value, daysToLive) {
      var cookie = name + "=" + encodeURIComponent(value);
      if (typeof daysToLive == "number") {
        cookie += ";max-age=" + daysToLive * 60 * 60 * 24;
      }
      document.cookie = cookie;
    },
    getCookie(name) {
      var allcookies = document.cookie;
      //索引长度，开始索引的位置
      var cookie_pos = allcookies.indexOf(name);

      // 如果找到了索引，就代表cookie存在,否则不存在
      if (cookie_pos != -1) {
        this.getUserData(); 
      }
    },
    async getUserData() {
   //   const userData = await getUser("1001");
      this.userData = userData;
      this.$router.push({
        name: "myPage",
        params: {
          userData: this.userData
        }
      });
    },
    async toLogin() {
  //    const userData = await getUser("1001")
      console.log(userData);
      if (this.$refs.account.value === userData.iduser) {
        if (this.$refs.password.value === userData.password) {
          this.setcookie("iduser", userData.iduser, 7);
          this.setcookie("password", userData.password, 7);
          this.$router.push({
            name: "myPage",
            params: {
              userData: userData
            }
          });
        } else {
          this.open("密码错误");
        }
      } else {
        this.open("账号错误");
      }
    }
  }*/
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  padding: 10% 0;
  text-align: center;
  .title {
    font-size: 50px;
    font-weight: 700;
    color: #c62f2f;
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    .login-input {
      width: 650px;
      height: 50px;
      margin-bottom: 50px;
      span {
        font-size: 25px;
      }
      input {
        width: 60%;
        height: 90%;
        font-size: 18px;
        border-radius: 5px;
        border: 1px solid #aeb6be;
        padding: 0 5px;
      }
    }
    button {
      width: 180px;
      height: 45px;
      background-color: #fff;
      border: 1px solid #000;
      border-radius: 15px;
      font-size: 17px;
    }
    button:hover {
      background-color: #c62f2f;
      color: #fff;
    }
  }
}
</style>