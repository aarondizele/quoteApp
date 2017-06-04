import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/quoteApp/Header'
import Quote from './components/quoteApp/Quote'
import QuoteGrid from './components/quoteApp/QuoteGrid'
import QuoteMain from './components/quoteApp/QuoteMain'
import NewQuote from './components/quoteApp/NewQuote'

Vue.component('appHeader', Header)
Vue.component('appQuote', Quote)
Vue.component('appQuoteGrid', QuoteGrid)
Vue.component('appNewQuote', NewQuote)
Vue.component('appQuoteMain',QuoteMain)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
