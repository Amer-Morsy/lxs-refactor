import { Module } from "vuex";

interface State {
  userData: object | null;
}

export const userModule: Module<State, any> = {
  state: {
    userData: {
      name: "Amer",
      email: "",
    },
  },
  getters: {
    getUserData: (state) => state.userData,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    saveUserData({ commit, dispatch }, userData) {
      commit("setUserData", userData);
      dispatch("setUserData", userData);
    },
  },
};
