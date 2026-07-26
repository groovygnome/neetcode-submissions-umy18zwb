class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for (let i = 1; i < dp.length; i++) {
            for (let j = 0; j < coins.length; j++) {
                if (i - coins[j] >= 0) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }

        if(dp[amount] != Infinity) return dp[amount]
        else return -1;
    }
}
