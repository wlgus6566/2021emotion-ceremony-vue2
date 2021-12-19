import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    swiperIdx : 0,
  },
  mutations: {
    SWIPER_IDX: (state, payload) => {
      state.swiperIdx = payload;
    },
  },
  actions: {},
  modules: {},
});
