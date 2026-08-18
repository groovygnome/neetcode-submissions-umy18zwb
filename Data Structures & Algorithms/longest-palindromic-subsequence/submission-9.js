class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        let dp = new Array(s.length+1).fill().map(() => Array(s.length+1).fill(0));

        for(let i = 1; i < s.length+1; i++){
            dp[i][i] = 1;
        }


        for(let i = s.length; i > 0; i--){
            for(let j = i+1; j < s.length+1; j++){
                if(s[i-1] === s[j-1]) dp[i][j] = 2 + dp[i+1][j-1];
                else dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }

        return dp[1][s.length];
    }

   }

