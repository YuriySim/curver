//vuex module responsible for receiving and sending data to backend
import axios from "axios";

export default {
  state: {
    dataTable: {},
    status: null
  },

  mutations: {
    setDataTable(state, dataTable) {
      state.dataTable = dataTable;
    },

    clearDataTable(state) {
      state.dataTable = {};
    },

    setStatus(state, status) {
      state.status = status;
    },

    clearStatus(state) {
      state.status = null;
    }
  },

  actions: {
    //This action sends GET-requestion to backend and gets data
    async fetchData({ dispatch, commit }) {
      const URL = "https://omd-test-backend.herokuapp.com/curve/";
      var token = localStorage.getItem("token").replace(/"/g, "");
      const formData = {
        headers: {
          Authorization: "JWT " + token
        }
      };

      await axios
        .get(URL, formData)
        .then(response => {
          commit("setDataTable", response.data);
        })
        .catch(error => {
          commit("setError", error);
        });
    },

    //This action sends POST-requestion to update data to backend
    async updateData({ dispatch, commit }, data) {
      const URL = "https://omd-test-backend.herokuapp.com/curve/";
      var token = localStorage.getItem("token").replace(/"/g, "");
      const formData = {
        headers: {
          Authorization: "JWT " + token
        }
      };

      await axios
        .post(URL, data, formData)
        .then(response => {
          commit("setDataTable", data);
          commit("setStatus", response.status);
        })
        .catch(error => {
          commit("setError", error);
        });
      commit("clearStatus");
    }
  },

  getters: {
    dataTable: state => state.dataTable,
    status: state => state.status
  }
};
