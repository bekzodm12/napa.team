import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

import VueSmoothScroll from 'vue2-smooth-scroll'

import 'normalize.css';
import './assets/scss/global.scss';

Vue.config.productionTip = false;

Vue.use(VueSmoothScroll)

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
