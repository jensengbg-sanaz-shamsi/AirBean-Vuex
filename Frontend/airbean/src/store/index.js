import Vue from 'vue'
import { use } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8000',
    showNavigation: false,
    menu:[],
    orderHistory: [],
    cart: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
