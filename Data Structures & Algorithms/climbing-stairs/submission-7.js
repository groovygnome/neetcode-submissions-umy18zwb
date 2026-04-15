class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = new Map()) {
        let stepArray = [0, 1, 2];
        for(let i = 3; i <= n; i++){
            stepArray.push(stepArray[i-1] + stepArray[i-2]);
        }

        return stepArray[n];
    }
}
