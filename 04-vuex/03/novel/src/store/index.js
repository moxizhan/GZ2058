import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankCategory: null
  },
  mutations: {
    updateRankCategory: function (state,payload) {
      state.rankCategory = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
