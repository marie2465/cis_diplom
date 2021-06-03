// export const SHOW_NAV = 'SHOW_NAV'
//
// export const state = () => ({
//   showNav: true
// })
//
// export const mutations = {
//   [SHOW_NAV]: (state, value) => {
//     state.showNav = value
//   }
// }
//
// export const actions = {
//   setRegLayout ({ commit }) {
//     commit(SHOW_NAV, false)
//   },
//   setDefaultLayout ({ commit }) {
//     commit(SHOW_NAV, true)
//   }
// }

export default {
  state: {
    showNav: true
  },

  mutations: {
    setNavVisibility(state, value) {
      state.showNav = value
    }
  },

  actions: {
    setRegLayout ({ commit }) {
      commit('setNavVisibility', false)
    },
    setDefaultLayout ({ commit }) {
      commit('setNavVisibility', true)
    }
  },

  getters: {
    getNavStatus(state) {
      return state.showNav
    }
  }
}

