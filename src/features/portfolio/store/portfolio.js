import utilsStocks from '@/features/portfolio/utils/aux_stocks.js'

export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice}) {
           const record = utilsStocks.getRecord(state.stocks, stockId);
           if(record) {
               // CASO TENHA AÇÃO, ADICIONA QUANTIDADE EM CARTEIRA
               record.quantity += quantity
           } else {
               // ADICIONA UMA NOVA AÇÃO NA CARTEIRA
               state.stocks.push({
                   id: stockId,
                   quantity: quantity
               })
           }

           /* DIMINUIR A QUANTIDADE DE VALOR DO SALDO 
                BASEADO PELA COMPRA
           */
           state.funds -= stockPrice * quantity
        },
        sellStock(state, {stockId, quantity, stockPrice}) {
            const record = utilsStocks.getRecord(state.stocks, stockId);
            if(record && record.quantity > quantity) {
                // DIMINUI A QUANTIDADE DE AÇÕES EM CARTEIRA
                record.quantity -= quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            // AUMENTA O SALDO DA CARTEIRA APÓS A VENDA
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds 
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = utilsStocks.getRecord(getters.stocks, stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price,
                }
            })
        },
        funds(state) {
            return state.funds;
        }
    }
}