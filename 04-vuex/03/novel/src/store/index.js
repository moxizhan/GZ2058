import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rankCategory: null,
    chapter: null,
    bookrack: JSON.parse(window.localStorage.getItem("bookrack")) || [],
  },
  mutations: {
    updateRankCategory: function(state, payload) {
      state.rankCategory = payload;
    },
    updateChapter: function(state, payload) {
      state.chapter = payload;
    },

    addBookrack: function(state, payload) {
      // console.log(state, payload);
      state.bookrack.push(payload);
    },
    removeBookrack: function(state, payload) {
      // console.log(state, payload);
      state.bookrack = state.bookrack.filter((item) => item !== payload);
    },
  },
  actions: {},
  modules: {},
});
