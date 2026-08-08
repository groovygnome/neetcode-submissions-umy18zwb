class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let dp = new Array(t.length+1).fill().map(() => Array(s.length+1).fill(0));

        for(let i = 0; i <= t.length; i++){
            if(i === 0){
                for(let j = 0; j <= s.length; j++){
                    dp[i][j] = 1;
                }
            } 
            dp[i][0] = 0;
        }

        dp[0][0] = 1;


        for(let i = 1; i <= t.length; i++){
            for(let j = 1; j <= s.length; j++){
                if(t.charAt(i-1) === s.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1] + dp[i][j-1];
                }else{
                    dp[i][j] = dp[i][j-1];
                }
            }
        }

        console.log(dp);

        return dp[t.length][s.length];
    }
}
