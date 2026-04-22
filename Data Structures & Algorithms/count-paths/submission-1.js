class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let answerArray = [];
        for(let i = 0; i < n; i++){
            answerArray.push(1);
        }
        
        for(let r = m-1; r > 0; r--){
            for (let c = 0; c < n; c++){
                answerArray[c] = answerArray.slice(c).reduce((total, current) => total + current, 0);
            }
        }
        return answerArray[0];
    }
}
