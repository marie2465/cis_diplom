import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  mutations: {},
  state: {
    selectedItems: 0
  },
  getters: {
    getItems (state) {
      return state.selectedItems
    }
  }
})
