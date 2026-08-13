class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        if (str1 === str2) return str1;

        let dp = new Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0));

        for (let i = 0; i <= str1.length; i++) {
            dp[i][0] = i;
        }

        for (let j = 0; j <= str2.length; j++) {
            dp[0][j] = j;
        }

        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                if (str1[i - 1] === str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
                else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        console.log(dp);

        let ans = [];
        let i = str1.length;
        let j = str2.length;
        while(i > 0 || j > 0){
            console.log('[' + i +',' + j + ']');
            if(j === 0){
                ans.unshift(str1[i-1]);
                i--;
                continue;
            } else if(i === 0){
                ans.unshift(str2[j-1]);
                j--;
                continue
            }
            if(str1[i-1] === str2[j-1]){ 
                ans.unshift(str1[i-1]);
                i--;
                j--;
            } else{
                let min = Math.min(dp[i-1][j], dp[i][j-1]);
                if(min === dp[i-1][j]){
                    ans.unshift(str1[i-1]);
                    i--;
                } else if(min === dp[i][j-1]){
                    ans.unshift(str2[j-1]);
                    j--;
                }
            }
        }

        return ans.join('');
    }
}
