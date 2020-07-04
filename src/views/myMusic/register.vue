<template>
  <div class="register">
    <i class="iconfont icon" @click="goback()">&#xe622;</i>
    <span class="register-title">Register</span>
    <div class="box">
      <errorMessage v-show="showErrorMsg" :message="errorMsg"></errorMessage>
      <div class="register-box">
        <i class="iconfont register-icon">&#xe67e;</i>
        <input
          type="text"
          ref="mobileNumber"
          class="input-number"
          autocomplete="off"
          pattern="^1[3456789]\d{9}$"
          required
          placeholder="请输入手机号"
        />
      </div>
      <div class="register-box">
        <i class="iconfont register-icon">&#xe625;</i>
        <input type="password" id="registerPassword" ref="password" placeholder="设置登录密码,不少于6位" />
      </div>
      <div class="register-box">
        <i class="iconfont register-icon">&#xe65a;</i>
        <input type="nickname" id="nickname" ref="nickname" placeholder="请输入昵称" />
      </div>
      <div class="captcha">
        <input type="number" name="captchaNumber" class="captcha-number" ref="captchaNumber" placeholder="请输入验证码" />
        <button
          class="captcha-button"
          @click="getCaptcha"
          :class="canClick?'':'captcha-button-click'"
        >{{captchaContent}}</button>
      </div>
      <button @click="register">注 册</button>
    </div>
  </div>
</template>

<script>
import errorMessage from "../../components/errorMessage";
import { checkPhone, sentCaptcha,register } from "../../api/user";

export default {
  components: {
    errorMessage
  },
  data() {
    return {
      errorMsg: "", //错误的提示信息
      phoneNumber: "", //手机号
      captchaContent: "获取验证码", //获取证码按钮的内容
      countDownTime: 60,
      canClick: true,
      showErrorMsg: false //是否显示错误的提示信息
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    verify() {
      //验证输入的手机号码是否符合格式
      this.phoneNumber = this.$refs.mobileNumber.value.replace(/\s+/g, "");
      const reg = /^1[3456789]\d{9}$/;
      if (this.phoneNumber == "") {
        this.showErrorMsg = true;
        this.errorMsg = "输入的手机号不能为空";
        return false;
      } else if (!reg.test(this.phoneNumber)) {
        this.showErrorMsg = true;
        this.errorMsg = "请输入正确的手机号";
        return false;
      } else {
        return true;
      }
    },
    async register() {
      let verifyResult = this.verify();
      if (verifyResult) {
        let isexist = await checkPhone(this.phoneNumber);
        if (isexist.exist === 1) {
           this.showErrorMsg = true;
          this.errorMsg = "该手机号已注册,请返回登录页面";
        } else {
          this.showErrorMsg=false;
          let password = this.$refs.password.value;
          let captcha = this.$refs.captchaNumber.value;
          let nickname = this.$refs.nickname.value;
          console.log(password,captcha,nickname);
          let result = await register(this.phoneNumber, password, captcha, nickname);
          console.log(result);
        }
      }
    },
    async getCaptcha() {
      let verifyResult = this.verify();
      if (!this.canClick || !verifyResult) return;
      this.canClick = false;
      let result = await sentCaptcha(this.phoneNumber);
      if (result.code === 200) {
        let countNumInterval = setInterval(() => {
          //当获取一次验证码之后,开始倒数
          this.countDownTime--;
          this.captchaContent = this.countDownTime + "s后重新发送";
          if (this.countDownTime < 0) {
            clearInterval(countNumInterval);
            this.captchaContent = "获取验证码";
            this.countDownTime = 60;
            this.canClick = true;
          }
        }, 1000);
      }
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
    height: 75vh;
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
      border-bottom: none;
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
    .register-password {
      cursor: pointer;
      grid-template-columns: 1fr 6fr;
    }
    .captcha {
      width: 400px;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px;
      border: 1px solid #999;
      .captcha-number {
        width: 150px;
        height: 40px;
        font-size: 20px;
        border: none;
        margin-left: 10px;
      }
      .captcha-button {
        margin: 0;
        width: 120px;
        height: 40px;
        font-size: 20px;
      }
      .captcha-button-click {
        font-size: 16px;
        background-color: #fa6666;
      }
    }
    button {
      width: 400px;
      height: 55px;
      display: block;
      border: 1px solid #e83c3c;
      background-color: #e83c3c;
      color: #fff;
      font-size: 25px;
      margin-top: 150px;
      border-radius: 10px;
    }
  }
}
.input-number:invalid {
  color: #e83c3c;
}
</style>