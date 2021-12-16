export default {
  namespaced: true,
  state: {
    canvasCtx: null,
    shapes: [],
  },
  mutations: {
    canvasCtx(state, payload) {
      state.canvasCtx = payload;
    },
    shapes(state, payload) {
      state.shapes = payload;
    },
  },
  getters: {
    canvasCtx(state) {
      return state.canvasCtx;
    },
    shapes(state) {
      return state.shapes;
    },
  },
};
