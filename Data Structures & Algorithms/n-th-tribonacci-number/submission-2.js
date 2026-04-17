class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        let answerArr = [0, 1, 1];

        for(let i = 3; i <= n; i++){
            answerArr.push(answerArr[i-3] + answerArr[i-2] + answerArr[i-1]);
        }

        return answerArr[n];

    }
}
