//vuex module responsible for authentication with backend

import axios from "axios";
import router from "@/router";

export default {
  actions: {
    //This action sends POST-requestion for authentication, then logs in
    async login({ dispatch, commit }, formData) {
      const URL = "https://omd-test-backend.herokuapp.com/user/token/";

      await axios
        .post(URL, formData)
        .then(response => {
          localStorage.setItem("token", JSON.stringify(response.data.access));
          router.push("/home?message=loginSuccess");
        })
        .catch(error => {
          commit("setError", error);
        });
    },

    //This action logs out
    logout({ commit }) {
      commit("clearError");
      commit("clearStatus");
      commit("clearDataTable");
      router.push("/login?message=logout");
      localStorage.removeItem("token");
    }
  }
};
