import stocks from '@/core/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        // setar os stocks vindo do json
        setStocks(state, stocks) {
            state.stocks = stocks;
        },
        // gerar o valor de uma nova ação a cada final do dia
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))
            });
        }
    },
    actions: {
        buyStock({commit}, order) {
            commit('buyStock', order)
        },
        initStocks({commit}) {
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}