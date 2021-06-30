import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.products = payload
    }
  },
  actions: {
    FetchProducts () {
      return axios({
        url: 'http://my-json-server.typicode.com/julianpurukan/json-server-api/best-products',
        method: 'GET'
      })
    }
  },
  modules: {
  }
})
