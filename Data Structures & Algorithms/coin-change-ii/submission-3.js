class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = new Array(amount+1).fill(0);

        dp[0] = 1;

        for(let i = 0; i < coins.length; i++){
            for(let j = 1; j < dp.length; j++){
                let temp = dp[j];
                dp[j] = 0;
                if(j-coins[i] > -1) {
                    dp[j] += dp[j-coins[i]];
                }
                dp[j] += temp;
            }
            
        }


        return dp[amount];
    }
}
