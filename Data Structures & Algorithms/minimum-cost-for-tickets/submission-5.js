class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        let n = days.length;
        let dp = new Array(n + 1).fill(0);

        for(let i = n - 1; i >= 0; i--){
            dp[i] = Infinity;
            let j = 1;
            [1, 7, 30].forEach((d, idx) =>{
                while(j < n && days[j] < days[i] + d){
                    j++;
                }
                dp[i] = Math.min(dp[i], costs[idx] + dp[j]);
            })
        }

        return dp[0];
        
    }
}
