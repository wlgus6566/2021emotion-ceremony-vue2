import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue marquee
import VueMarquee from 'vue-marquee-component'

Vue.use(VueAwesomeSwiper);
Vue.use(VueMarquee)
import 'swiper/css/swiper.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
