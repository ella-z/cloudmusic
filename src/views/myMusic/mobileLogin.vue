<template>
  <div class="mobileLogin">
    <i class="iconfont icon" @click="goback()">&#xe622;</i>
    <span class="mobileLogin-title">Mobile Number Login</span>
    <div class="mobileLogin-box">
      <div class="mobile-number mobile-box">
        <i class="iconfont mobile-icon number-icon">&#xe67e;</i>
        <input
          type="text"
          id="mobileNumber"
          ref="mobileNumber"
          class="input-number"
          autocomplete="off"
          pattern="^1[3456789]\d{9}$"
          required
          placeholder="请输入手机号"
        />
      </div>
      <div class="mobile-password mobile-box">
        <i class="iconfont mobile-icon">&#xe625;</i>
        <input
          type="password"
          id="mobilePassword"
          ref="password"
          required
          placeholder="请输入密码"
          autocomplete="off"
        />
        <span>重设密码</span>
      </div>
      <errorMessage :message="errorMsg" v-show="showErrorMsg"></errorMessage>
      <button class="login-btton" @click="login()">登 录</button>
    </div>
  </div>
</template>

<script>
import errorMessage from "../../components/errorMessage";
import { postUser } from "../../api/getUser";

export default {
  components: {
    errorMessage
  },
  data() {
    return {
      errorMsg: "",
      showErrorMsg: false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async login() { //登录验证
      let account = this.$refs.mobileNumber.value.replace(/\s+/g, "");
      let pwd = this.$refs.password.value;
      const reg = /^1[3456789]\d{9}$/;
      if (account == "") {
        this.showErrorMsg = true;
        this.errorMsg = "手机号不能为空";
      } else if (!reg.test(account)) {
        //验证输入的手机号码是否符合格式
        this.showErrorMsg = true;
        this.errorMsg = "请输入正确的手机号";
      } else {
        this.showErrorMsg = false;
        let userInformation = await postUser(account, pwd); //提交手机号以及密码
        if (userInformation.code === 200) {
          this.$cookies.set('uid',userInformation.account.id,'1d');
          this.$router.push({ name: "myPage" });
        } else if (userInformation.code === 502) {
          this.errorMsg = userInformation.msg;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mobileLogin {
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
  .mobileLogin-title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: #e83c3c;
    margin-top: 30px;
  }
  .mobileLogin-box {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mobile-box {
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
    .mobile-icon {
      font-size: 25px;
      color: #999;
    }
    .mobile-password {
      cursor: pointer;
      border-top: none;
      grid-template-columns: 1fr 5fr 2fr;
      span {
        color: #999;
      }
    }
    button {
      width: 400px;
      height: 55px;
      cursor: pointer;
      display: block;
      border: 1px solid #e83c3c;
      background-color: #e83c3c;
      color: #fff;
      font-size: 25px;
      margin-top: 80px;
      border-radius: 10px;
      transition: 0.5s;
    }
  }
  .input-number:invalid {
    color: #e83c3c;
  }
}
</style>