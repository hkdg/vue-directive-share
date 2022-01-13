import Vue from 'vue';
import router from './router';
import App from './App.vue';
import LazyLoad from './utils/directive';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(LazyLoad);
Vue.use(elementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
