import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      groups: [1]
  },
  mutations: mutations,
  actions: actions,
  modules: {
      moduleA,
      moduleB
  },
  getters: {
      getGroups(state){
        return state.groups
      }
  }
})
