const goodsPage = {
  namespaced: true,
  state: {
    a: 20,
    top: 0
  },
  getters: {},
  mutations: {
  },
  actions: {
    addScroll ({ state, num, rootState }) {
      state.top = rootState.indexPage.a * 20
    },
    changeNum ({ state, num, rootState }) {
      state.top += 5
    }
  },
  modules: {}
}

export default goodsPage
