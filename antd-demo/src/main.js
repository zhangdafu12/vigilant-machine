import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;


Vue.use(Antd);
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper,/* { default global options } */);

new Vue({
  render: h => h(App),
  router,
  store,//使用store

}).$mount('#app');
