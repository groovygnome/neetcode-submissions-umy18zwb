class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let dp = new Array(profit.length+1).fill().map(() => Array(capacity+1).fill(0));

        for(let i = 1; i <= profit.length; i++){
            for(let j = 1; j <= capacity; j++){
                if(weight[i-1] <= j){
                    dp[i][j] = Math.max(dp[i-1][j], profit[i-1] + Math.max(dp[i-1][j-weight[i-1]], dp[i][j-weight[i-1]]));
                } else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        return dp[profit.length][capacity]
    }
}
