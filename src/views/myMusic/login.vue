<template>
  <div class="login">
    <span class="title">LOGIN</span>
    <div class="login-box">
      <div class="login-input">
        <span>账号：</span>
        <input type="text" />
      </div>
      <div class="login-input">
        <span>密码：</span>
        <input type="password" name="password" id="password" />
      </div>
      <button @click="toLogin">登录</button>
      <button>注册</button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        toLogin(){
            this.$router.push('/myMusic/myPage');
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  padding: 10% 0;
  .title {
    font-size: 50px;
    font-weight: 700;
    color:#c62f2f;
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
    .login-input {
      width: 60%;
      height: 10%;
      span{
          font-size: 20px;
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
      width: 15%;
      height: 10%;
      background-color: #fff;
      border:1px solid #000;
      border-radius: 10px;
      font-size: 17px;
    }
    button:hover{
        background-color: #c62f2f;
        color: #fff;
    }
  }
}
</style>