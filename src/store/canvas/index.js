export default {
  namespaced: true,
  state: {
    shapes: [],
  },
  mutations: {
    shapes(state, payload) {
      state.shapes = payload;
    },
  },
  getters: {
    shapes(state) {
      return state.shapes;
    },
  },
};
