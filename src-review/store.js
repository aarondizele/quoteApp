import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    quotes: [],
    maxQuotes: 10
  },
  getters: {
    'QUOTE'(state){
      return state.quotes;
    },
    'QUOTE_COUNT'(state){
      return state.quotes.length;
    },
    'MAX_QUOTES'(state){
      return state.maxQuotes;
    }
  },
  mutations: {
    'QUOTE_ADDED'(state, quote){
      return state.quotes.push(quote);
    },
    'QUOTE_DELETED'(state, index){
      return state.quotes.splice(index, 1);
    }
  },
  actions: {
    'QUOTE_ADDED'({commit}, quote){
      commit('QUOTE_ADDED', quote);
    },
    'QUOTE_DELETED'({commit}, index){
      commit('QUOTE_DELETED', index);
    },
  }
})
