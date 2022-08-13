export default {
    getRecord(stocks, stockId) {
        return stocks.find(element => element.id == stockId)
    }
}