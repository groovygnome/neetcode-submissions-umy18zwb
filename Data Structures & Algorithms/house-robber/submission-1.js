class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, n = 0, memo = new Map()) {
        if(n >= nums.length){
            return 0;
        }
        if(memo.get(n) != undefined){
            return memo.get(n);
        }

        let skip = this.rob(nums, n+1, memo);
        let include = nums[n] + this.rob(nums, n+2, memo);

        if(include >= skip){
            memo.set(n, include);
        } else{
            memo.set(n, skip);
        }
        
        return memo.get(n);
    }
}
