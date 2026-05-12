class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let L = 0;
        let R = nums.length-1;
        while(L < R){
            if(nums[L] + nums[R] > target){
                R--;
            } else if(nums[L] + nums[R] < target){
                L++;
            } else if(nums[L] + nums[R] === target){
                return [L+1, R+1];
            }
        }
    }
}
