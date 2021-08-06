import Vue from 'vue';// eslint-disable-line
import Vuex from 'vuex';// eslint-disable-line

Vue.use(Vuex);
const store = () => new Vuex.Store({// eslint-disable-line
  state: {
    time: 0,
  },
  actions: {
    startTimer ({ commit }) {
      setInterval(() => commit('tick'), 1000);
    },
  },
  mutations: {
    tick (state) {
      state.time++;
    },
  },
});
export default store;
