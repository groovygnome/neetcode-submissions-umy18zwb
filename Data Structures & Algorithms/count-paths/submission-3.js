class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let answerArray = new Array(n).fill(1);
        
        for(let r = m-1; r > 0; r--){
            for (let c = n-1; c >= 0; c--){
                if(c != n-1) answerArray[c] = answerArray[c] + answerArray[c+1];
            }
        }
        return answerArray[0];
    }
}
