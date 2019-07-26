import Vue from 'vue';
import ElementUI from 'element-ui'
import App from './App.vue';
import router from './router';
import store from './store';
import Bus from './bus'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';
Vue.use(Bus)
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
