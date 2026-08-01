class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dp = new Array(text1.length+1).fill().map(() => new Array(text2.length+1).fill(0));

        for(let i = 1; i < dp.length; i++){
            for(let j = 1; j < dp[0].length; j++){
                if(text1.charAt(i-1) === text2.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1]+1;
                } else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        console.log(dp);

        return dp[text1.length][text2.length];


    }
}
