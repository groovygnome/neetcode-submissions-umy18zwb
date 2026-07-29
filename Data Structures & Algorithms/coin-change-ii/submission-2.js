class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(coins.length+1).fill().map(() => Array(amount+1).fill(0));

        for(let i = 0; i < dp.length; i++) dp[i][0] = 1;

        for(let i = 1; i < dp.length; i++){
            for(let j = 1; j < dp[0].length; j++){
                if(j-coins[i-1] > -1) {
                    dp[i][j] += dp[i][j-coins[i-1]];
                }
                dp[i][j] += dp[i-1][j];
            }
            
        }


        return dp[coins.length][amount];
    }
}
