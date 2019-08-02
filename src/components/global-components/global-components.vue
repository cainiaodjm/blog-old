<template>
  <div class="global-components-box">
    <div class="auth-modal-box" v-if="centerDialogVisible">
      <form class="auth-form">
        <div class="panel" v-if="showLogin">
          <i class="fa fa-close close-button" @click="closeAuthModal"></i>
          <h1 class="title">登录</h1>
          <div class="input-group">
            <div class="input-box">
              <input type="text" name="loginAccount" v-model="userName" placeholder="请输入账号" class="input" maxlength="64">
            </div>
            <div class="input-box">
              <input type="password" name="loginPassword" v-model="secret" placeholder="请输入密码" class="input" maxlength="64">
            </div>
          </div>
          <button class="login-button" @click="handleLogin">登录</button>
          <div class="prompt-box">
            没有账号？<span class="clickable" @click="changeLoginOrRegister">注册</span>
            <a href="/reset-password" class="right clickable">忘记密码</a>
          </div>
        </div>
        <div class="panel" v-else>
          <i class="fa fa-close close-button" @click="closeAuthModal"></i>
          <h1 class="title">注册</h1>
          <div class="input-group">

            <div class="input-box">
              <input type="text" name="registerUsername" placeholder="请输入用户名" class="input" maxlength="64">
            </div>
            <div class="input-box">
              <input type="text" name="registerAccount" placeholder="请输入账号" class="input" maxlength="64">
            </div>
            <div class="input-box">
              <input type="password" name="registerPassword" placeholder="请输入密码(不少于6位)" class="input" maxlength="64">
            </div>

          </div>
          <button class="login-button" @click="handleRegister">注册</button>
          <div class="prompt-box center">
            <span class="clickable" @click="changeLoginOrRegister">已有账号登录 </span>
          </div>
        </div>
      </form>
    </div>

  </div>


</template>

<script>
  export default {
    name: 'global-components',
    data() {
      return {
        auth: false,
        centerDialogVisible: false,
        userName:"",
        secret:""

      };
    },
    props: {
      showLogin:{
        type:Boolean,
        default:true
      },
      isRegister:{
        type:Boolean,
        default:false
      }
    },
    methods: {
      handleClick() {

      },
      changeLoginOrRegister(){
        this.$emit('changeLoginOrRegister',!this.showLogin)
      },
      handleRegister() {
        console.log(this);
      },
      handleShowLogin() {
        this.showLogin = true;

      },
      closeAuthModal() {
        this.centerDialogVisible = false;
      },
      handleLogin() {
        this.$emit('login',{
          userName:this.userName,
          secret:this.secret
        })
      },
      // showRegister() {
      //   this.showLogin = false;
      // }
    },
    mounted() {
      this.$bus.$on('showAuth', centerDialogVisible => {
        this.centerDialogVisible = centerDialogVisible;
      });
    }
  };
</script>
<style lang="less">
  .close-button {
    float: right;
    cursor: pointer;
    opacity: .4;
  }

  .center {
    text-align: center;
  }

  .input {
    padding: 10px;
    width: 100%;
    border: 1px solid #e9e9e9;
    border-radius: 2px;
    outline: none;
    box-sizing: border-box;
  }

  .clickable {
    color: #007fff;
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 99999s;
    -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
  }

  .auth-form {
    position: relative !important;
    padding: 1.5rem !important;
    width: 18.5rem !important;
    max-width: 100% !important;
    font-size: .675rem !important;
    background-color: #fff !important;
    border-radius: 2px !important;
    box-sizing: border-box !important;
    margin: unset !important;

    .panel {
      .title {
        font-size: 1rem;
        margin: 0 0 1rem;
      }

      .input-group {
        margin-bottom: .25rem;
        overflow: hidden;

        .input-box {
          position: relative;
          margin-bottom: .4rem;
        }
      }

      .login-button {
        width: 100%;
      }

      .prompt-box {
        color: #8b9196;
        margin: .5rem 0 0;

        .right {
          float: right;
        }
      }
    }
  }

  .auth-modal-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 500;
  }


</style>
