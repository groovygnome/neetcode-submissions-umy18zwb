class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = new Map()) {
        if(n < 0){
            return 0;
        }
        if(n === 0){
            return 1;
        }
        console.log(memo.get(n));
        if(memo.get(n) != undefined){
            return memo.get(n);
        }
        memo.set(n, (this.climbStairs(n-1, memo) + this.climbStairs(n-2, memo)))
        return memo.get(n);
    }
}
