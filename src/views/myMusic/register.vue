<template>
  <div class="register">
    <i class="iconfont icon" @click="goback()">&#xe622;</i>
    <span class="register-title">Register</span>
    <div class="box">
      <errorMessage></errorMessage>
      <div class="register-box">
        <i class="iconfont register-icon">&#xe67e;</i>
        <input type="text" id="registerNumber" placeholder="请输入手机号" />
      </div>
      <div class="register-box">
        <i class="iconfont register-icon">&#xe625;</i>
        <input type="password" id="registerPassword" placeholder="设置登录密码,不少于6位" />
      </div>
      <button>注 册</button>
    </div>
  </div>
</template>

<script>
import errorMessage from "../../components/errorMessage";

export default {
  components: {
    errorMessage
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  .icon {
    display: block;
    font-size: 25px;
    line-height: 45px;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 1px rgb(180, 180, 180);
    position: relative;
    left: 50px;
  }
  .register-title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: #e83c3c;
    margin-top: 30px;
  }
  .box {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .register-box {
      width: 400px;
      height: 50px;
      border: 1px solid #999;
      display: grid;
      grid-template-columns: 1fr 7fr;
      align-items: center;
      justify-items: center;
      input {
        border: none;
        width: 100%;
        height: 30px;
        font-size: 20px;
      }
    }
    .register-icon {
      font-size: 25px;
      color: #999;
    }
    .register-number {
      border-bottom: none;
    }
    .register-password {
      cursor: pointer;
      grid-template-columns: 1fr 6fr;
    }
    button {
      width: 400px;
      height: 55px;
      display: block;
      border: 1px solid #e83c3c;
      background-color: #e83c3c;
      color: #fff;
      font-size: 25px;
      margin-top: 80px;
      border-radius: 10px;
    }
  }
}
</style>