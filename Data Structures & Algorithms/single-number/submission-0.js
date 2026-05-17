class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ans = 0;
        for(let i = 0; i < nums.length; i++){
            ans = ans ^ nums[i];
        }

        return ans;
    }
}
