
import Vue from 'vue'

import Vuex from 'vuex'
import actions from './actions'

import stocks from '@/features/stocks/store/stocks.js'
import portfolio from '@/features/portfolio/store/portfolio.js'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})