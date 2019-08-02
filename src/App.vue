<template>
  <div id="app">
    <global-components @login="login"
                       :show-login="showLogin"
                       @changeLoginOrRegister="changeLoginOrRegister">
    </global-components>
    <div class="sidebar">
      <div class="container sidebar-sticky">
        <div class="sidebar-about">
          <h1>
            <a href="/">
              <img width="120" class="avatar" src="./assets/img/avatar.jpg" alt/>
            </a>
          </h1>
          <h3>
            <span ref="cainiaodjm"></span>
          </h3>
          <p class="lead">
            Ruby developer from Texas. I like Rails, React, and EmberJS.
            I make beats, synth patches, and coffee tables.
          </p>
        </div>
        <nav class="sidebar-nav">
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-github"></i>
            <span>GitHub</span>
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-cog"></i>

            <span>Demos</span>
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-book"></i>
            <span>About</span>
          </a>
        </nav>
        <p class="copyright">© copyright and stuff 2019</p>
      </div>
    </div>
    <div class="rightbar">
      <div class="user-module">
        <div class="auth">
          <div class="login">
            <button @click="handleLogin">
              登录
            </button>
          </div>
          <div class="register">
            <button>
              注册
            </button>
          </div>

        </div>
      </div>
      <div class="tag-list">

        <!--        <el-tag v-for="(tag,index) in tagList" class="tag-item" :key="index" color="">-->
        <!--          {{tag.name}}-->
        <!--        </el-tag>-->
      </div>
    </div>
    <div class="content container">

      <router-view/>


    </div>
  </div>
</template>
<script>
  import Typed from 'typed.js';
  import GlobalComponents from './components/global-components'
  export default {
    data() {
      return {
        typed: null,
        showLogin:true,
        tagList: [
          {
            id: 1,
            name: 'css'
          },
          {
            id: 2,
            name: 'js'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          },
          {
            id: 3,
            name: '数据结构'
          }

        ],
      };
    },
    methods:{

      handleGlobalA(){
        console.log('AA')
      },
      login({userName,secret}){
        console.log(userName)
        console.log(secret)
      },
      handleLogin(){
        this.$bus.$emit('showAuth',true)
      },
      changeLoginOrRegister(){
        this.showLogin=!this.showLogin
      }
    },

    components:{
      GlobalComponents
    },
    mounted() {
      console.log(this.$refs)
      console.log(this.tagList)
      console.log(this.$bus);


      this.typed = new Typed(this.$refs.cainiaodjm, {
        strings: ['I\'m cainiaodjm'],
        typeSpeed: 30,
        onComplete() {
          // const cursor = document.getElementsByClassName('typed-cursor')[0];
          // setTimeout(() => {
          //   cursor.style.animationIterationCount = 0;
          // }, 2000);
        },
      });
    },
  };
</script>
<style lang="less">
  @import "./assets/font-awesome/less/font-awesome.less";

  .tag-list {
    padding: .5em;
    display: flex;
    flex-wrap: wrap;

    .tag-item {
      margin-right: .5em;
      margin-bottom: .5em;
      cursor: pointer;
    }
  }

  .user-module {
    .auth {
      display: flex;
      justify-content: center;
      align-items: center;

      .login {
        margin-right: .5rem;
      }

      .register {

      }
    }
  }
</style>
