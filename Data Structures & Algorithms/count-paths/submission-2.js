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
                let total = 0;
                for(let t = c; t < n; t++){
                    total += answerArray[t];
                }
                answerArray[c] = total;
            }
        }
        return answerArray[0];
    }
}
