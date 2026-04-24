class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2, i = 0, j = 0, memo = new Map()) {
        if(text1.length === 0 || text2.length === 0){
            return 0;
        }
        if(i === text1.length || j === text2.length){
            return 0;
        }
        if(memo.get((i + '#' + j)) != undefined){
            return memo.get((i + '#' + j));
        }
        if(text1.charAt(i) === text2.charAt(j)){
            memo.set((i + '#' + j), 1 + this.longestCommonSubsequence(text1, text2, i+1, j+1, memo));
        } else{
            memo.set((i + '#' + j), Math.max(0 + this.longestCommonSubsequence(text1, text2, i+1, j, memo), 0 + this.longestCommonSubsequence(text1, text2, i, j+1, memo)));
        }

        return memo.get((i + '#' + j));
    }
}
