class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if(n < 2){
            return n;
        }
        let answerArr = [0, 1, 1];

        for(let i = 3; i <= n; i++){
            let nextStep = answerArr[0] + answerArr[1] + answerArr[2];
            answerArr[0] = answerArr[1];
            answerArr[1] = answerArr[2];
            answerArr[2] = nextStep;

        }

        return answerArr[2];

    }
}
