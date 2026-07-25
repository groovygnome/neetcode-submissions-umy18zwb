class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let dp = new Array(capacity+1).fill(0);

        for(let i = 1; i <= profit.length; i++){
            for(let j = 1; j <= capacity; j++){
                if(weight[i-1] <= j){
                    dp[j] = Math.max(dp[j], profit[i-1] + dp[j-weight[i-1]]);
                }
            }
        }

        return dp[capacity];
    }
}
