import Vue from 'vue'
import App from './App.vue'

// Vue marquee
import VueMarquee from 'vue-marquee-component'
Vue.use(VueMarquee)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
