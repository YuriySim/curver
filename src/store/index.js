import { createStore } from "vuex";

import auth from "./auth";
import data from "./data";

export default createStore({
  //Common bus-error
  state: {
    error: null
  },

  mutations: {
    setError(state, error) {
      state.error = error;
    },

    clearError(state) {
      state.error = null;
    }
  },

  getters: {
    error: state => state.error
  },

  modules: {
    auth,
    data
  }
});
