import Vuex from 'vuex';

const store = () => new Vuex.Store({
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
