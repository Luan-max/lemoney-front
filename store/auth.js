import jwt from 'jwt-decode';

export const state = () => ({
  token: null,
  isAuthenticated: false,
  user: null
})

export const mutations = {
  login(state, { token }) {
    state.token = token
    const { user } = jwt(token)
    state.user = user
    state.isAuthenticated = true
  },
  logout(state) {
    state.token = null
    state.user = null
    state.isAuthenticated = false
  }
}

export const actions = {
  login({ commit }, { token }) {
    commit('login', { token })
  }
}

export const getters = {
  getState(state) {
    return state
  },
  userIsAdmin(state) {
    return state.user.role === "admin" || "master"
  },
  user(state) {
    return state.user
  }
}
