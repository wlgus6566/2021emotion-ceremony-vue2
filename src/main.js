import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload'
// Vue marquee
import VueMarquee from 'vue-marquee-component'

import VueHtml2Canvas from 'vue-html2canvas';
Vue.use(VueHtml2Canvas);
Vue.use(VueLazyload);

Vue.use(VueAwesomeSwiper);
Vue.use(VueMarquee)
import 'swiper/css/swiper.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
