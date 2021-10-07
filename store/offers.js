export const actions = {
  setOrders ({ commit }, { orders }) {
    commit('setOrders', { orders: orders.data.docs })
  },
  setOrder ({ commit }, { order }) {
    commit('setOrder', { order: order.data })
  },
}

export const mutations = {
  setOrders (state, { orders }) {
    state.orders = orders
  },
  setOrder (state, { order }) {
    state.order = order
  },
}

export const state = () => ({
  orders: [],
  order: {},
})

export const getters = {
  orders (state) {
    return state.orders
  },
  order (state) {
    return state.order
  },
}
