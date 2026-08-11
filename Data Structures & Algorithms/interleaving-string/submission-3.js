class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if(s1.length + s2.length !== s3.length) return false;
        let dp = new Array(s1.length + 1).fill().map(() => Array(s2.length + 1).fill(false));

        dp[0][0] = true;

        for(let i = 1; i < s1.length+1; i++){
            dp[i][0] = (dp[i-1][0] && s3.charAt(i-1) === s1.charAt(i-1));
        }

        for(let j = 1; j < s2.length+1; j++){
            dp[0][j] = (dp[0][j-1] && s3.charAt(j-1) === s2.charAt(j-1));
        }

        console.log(dp);

            for (let i = 1; i < s1.length + 1; i++) {
                for (let j = 1; j < s2.length + 1; j++) {
                    let ans1 = (dp[i-1][j] && s1.charAt(i - 1) === s3.charAt(i+j-1));
                    let ans2 = (dp[i][j-1] && s2.charAt(j - 1) === s3.charAt(i+j-1));
                    dp[i][j] = ans1 || ans2;
                }
        }
        return dp[s1.length][s2.length];
    }
}
