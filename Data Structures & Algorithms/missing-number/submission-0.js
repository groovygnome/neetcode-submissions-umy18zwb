class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let ans = nums.length;
        for(let i = 0; i < nums.length; i++){
            ans = ans ^ i;
            ans = ans ^ nums[i];
        }

        return ans;
    }
}
