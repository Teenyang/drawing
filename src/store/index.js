import Vue from "vue";
import Vuex from "vuex";

import canvas from "./canvas";
import options from "./options";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { canvas, options },
});
