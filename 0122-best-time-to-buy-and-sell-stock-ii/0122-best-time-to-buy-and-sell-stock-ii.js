/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 하나의 주식만 홀드할 수 있다
    // i, i-1 만 생각하면 된다!

    let profit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};