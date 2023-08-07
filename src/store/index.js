import Vue from 'vue'
import Vuex from 'vuex'
import getGoods from '../api/getGoods.js'
import indexPage from './modules/indexPage.js'
import goodsPage from './modules/goodsPage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    goods: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getgoods (state) {
      const { data: res } = await getGoods.getGoods('get', '/getgoods')
      state.goods = res.data
    }
  },
  modules: {
    indexPage, goodsPage
  }
})
