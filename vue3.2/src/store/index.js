import { createStore } from "vuex";
export default createStore({
  state: {
    name: "销毁",
    num: 0,
  },
  mutations: {
    name(state, data) {
      state.name = "小明";
    },
    num(state, data) {
      state.num += data;
    },
  },
  actions: {
    name({ commit }, data) {
      commit("name", data);
    },
  },
  getters: {
    num(state, getters) {
      return state.num;
    },
  },
  modules: {},
});
