import Vue from 'vue'

export default {
    // carregar os dados das ações
    loadData({commit}) {
        Vue.prototype.$http('data.json').then(resp => {
            const data = resp.dara
            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        });
    }
}