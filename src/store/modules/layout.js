import axios from 'axios'

const Url = 'https://localhost:5001/'

export default {
  state: {
    showNav: true,
    usersLogin: '',
    usersPass: ''
  },

  mutations: {
    setNavVisibility(state, value) {
      state.showNav = value
    },
    SET_LOGIN: (state, userLogin, userPass) => {
      state.usersLogin = userLogin
      this.state.usersPass = userPass
    }
  },

  actions: {
    setRegLayout({commit}) {
      commit('setNavVisibility', false)
    },
    setDefaultLayout({commit}) {
      commit('setNavVisibility', true)
    },
    login(user) {
      return axios.post(Url +'authrize/login', {
        usersLogin:user.usersLogin,
        usersPass: user.usersPass
      })
        .then(response => {
          if(response.data.accessToken)
          {
            localStorage.setItem('user', JSON.stringify(response.data));
          }
          // console.log()
          // commit('SET_LOGIN', userLogin, userPass)
          return response.data;
        })
    }
  },

  getters: {
    getNavStatus(state) {
      return state.showNav
    },
    user(state) {
      return state.usersLogin
    }
  }
}

