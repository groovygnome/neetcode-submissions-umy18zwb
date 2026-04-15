class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = new Map()) {
        if(n === 1) return 1;
        if(n === 2) return 2;
        let stepArray = [1, 2];
        for(let i = 3; i <= n; i++){
            let temp = (stepArray[0] + stepArray[1]);
            stepArray[0] = stepArray[1];
            stepArray[1] = temp;
        }

        return stepArray[1];
    }
}
