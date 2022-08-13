import Vue from 'vue'
import Router from 'vue-router'

import Home from './features/home/view/Home'
import Portfolio from './features/portfolio/components/Portfolio'
import Stocks from './features/stocks/components/Stocks'

Vue.use(Router)

export default new Router({
    // modo que nao utiliza o hash nas urls
    mode: "history",
    routes: [
        {path: '/', component: Home},
        {path: '/portfolio', component: Portfolio },
        {path: '/stocks', component: Stocks },
    ]
})