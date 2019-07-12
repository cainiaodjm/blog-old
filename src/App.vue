<template>
  <div id="app">
    <div class="sidebar">
      <div class="container sidebar-sticky">
        <div class="sidebar-about">
          <h1>
            <a href="/">
              <img width="120" class="avatar" src="./assets/img/avatar.jpg" alt />
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
            Twitter
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-github"></i>
            GitHub
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-cog"></i>
            Demos
          </a>
          <a class="sidebar-nav-item" href="/">
            <i class="fa fa-book"></i>
            About
          </a>
        </nav>
        <p class="copyright">© copyright and stuff 2019</p>
      </div>
    </div>
    <div class="content container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Typed from 'typed.js';

export default {
  data() {
    return {
      typed: null,
    };
  },

  mounted() {
    this.typed = new Typed(this.$refs.cainiaodjm, {
      strings: ["I'm cainiaodjm"],
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
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
html {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
.container {
  max-width: 38rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}
.content{
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.sidebar {
  background-color: #ac4142;
  text-align: center;
  padding: 2rem 1rem;
  color: rgba(255, 255, 255, 0.5);
  .sidebar-about {
    h1 {
      color: #fff;
      margin-top: 0;
      font-family: "Abril Fatface", serif;
      font-size: 3.25rem;
      .avatar {
        margin-bottom: 10px;
        border-radius: 5px;
        display: block;
        max-width: 100%;
        margin: 0 0 1rem;
      }
    }
    .lead {
      font-size: 1rem;
      font-weight: 300;
    }
  }
  .sidebar-nav {
    margin-bottom: 1rem;
    .sidebar-nav-item {
      display: block;
      line-height: 1.75;
    }
    .sidebar-nav-item:hover {
      text-decoration: underline;
    }
  }
  a {
    color: #fff;
  }
}
.copyright {
  font-size: 0.65em;
}
@media (min-width: 58em) {
  html {
    font-size: 20px;
  }
}
@media (min-width: 48em) {
  html {
    font-size: 16px;
  }
  .content{
    max-width: 38rem;
    margin-left: 20rem;
    margin-right: 2rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18rem;
    text-align: left;
    .sidebar-sticky {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
    }
  }
}
@media (min-width: 38em) {
  html {
    font-size: 20px;
  }
}
@media (min-width: 64em) {
  .content {
    margin-left: 22rem;
    margin-right: 4rem;
  }
}
</style>
