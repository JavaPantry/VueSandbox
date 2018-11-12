import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  parts: []
  },
  getters:{
	  getParts(state){
	    return state.parts;
      }
  },
  mutations: {
      setParts(state, payload){
        console.log('mutations setParts');
        console.dir(payload);
        state.parts = payload;
      }
  },
  actions: {

  }
})
