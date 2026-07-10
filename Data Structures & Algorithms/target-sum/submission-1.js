class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.waysHelper(nums, target);
    }

    waysHelper(nums, target, curr = 0){
        if(target === 0 && curr === nums.length) return 1;
        else if(target != 0 && curr >= nums.length) return 0;

        return this.waysHelper(nums, target-nums[curr], curr+1) + this.waysHelper(nums, target+nums[curr], curr+1);
    }
}
