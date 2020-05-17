<template>
  <div class="login">
    <span class="title">LOGIN</span>
    <div class="login-box">
      <button class="login-button" @click="toMobileLogin">手机号登录</button>
      <button @click="toRegister">注册</button>
      <div class="icon-button">
        <ul>
          <li class="iconfont">&#xe612;</li>
          <li class="iconfont">&#xe604;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
     if(this.$cookies.isKey('uid')){
        this.$router.push({name:'myPage'});
     }
  },
  methods:{
    toMobileLogin(){
      this.$router.push({name:'mobileLogin'});
    },
    toRegister(){
      this.$router.push({name:'register'});
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .title {
    font-size: 80px;
    font-weight: 700;
    color: #e83c3c;
  }
  .login-box {
    button {
      display: block;
      width: 300px;
      height: 55px;
      background-color: #fff;
      border: 1px solid #e83c3c;
      color: #e83c3c;
      border-radius: 50px;
      font-size: 20px;
      margin-bottom: 55px;
    }
    .login-button {
      background-color: #e83c3c;
      color: #fff;
      margin-bottom: 35px;
    }
    .icon-button {
      ul {
        width: 300px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        li {
          width: 50px;
          height: 50px;
          border: 1px solid #999;
          border-radius: 50%;
          text-align: center;
          line-height: 50px;
          font-size: 25px;
          color: #999;
        }
      }
    }
  }
}
</style>