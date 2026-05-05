class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let L = 0;

        for(let R = 1; R < prices.length; R++){
            let localProfit = prices[R] - prices[L];
            if(prices[R] < prices[L]){
                L = R;
            } else{
                profit = Math.max(profit, localProfit);
            }
        }

        return profit;
    }
}
