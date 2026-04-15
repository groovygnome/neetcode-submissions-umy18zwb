class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = new Map()) {
        if(n === 1) return 1;
        if(n === 2) return 2;
        let prev = 1;
        let curr = 2;
        let next = 1+2;
        for(let i = 3; i <= n; i++){
            next = prev + curr;
            prev = curr;
            curr = next;
        }

        return next;
    }
}
