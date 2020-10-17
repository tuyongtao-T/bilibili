import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from '../http'
import { Toast } from 'vant';
import 'font-awesome/css/font-awesome.css'

Vue.use(Toast);
Vue.use(Vant);

Vue.prototype.$http = http;
Vue.prototype.$msg = Toast;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
