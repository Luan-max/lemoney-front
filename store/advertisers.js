export const actions = {
  setProducts ({ commit }, { products }) {
    commit('setProducts', { products: products.data.docs })
  },
  setProduct ({ commit }, { product }) {
    commit('setProduct', { product: product.data })
  },
}

export const mutations = {
  setProducts (state, { products }) {
    state.products = products
  },
  setProduct (state, { product }) {
    state.product = product
  },
}

export const state = () => ({
  products: [],
  product: {},
})

export const getters = {
  products (state) {
    return state.products
  },
  product (state) {
    return state.product
  },
}
