const indexPage = {
  namespaced: true,
  state: {
    a: 0,
    list: [1, 2, 3]
  },
  getters: {},
  mutations: {
    addNum (state) {
      state.a++
    }
  },
  actions: {
    changeA ({ state, num, rootState }) {
      state.a = Math.ceil(rootState.goodsPage.top / 20)
    }
  },
  modules: {}
}

export default indexPage
