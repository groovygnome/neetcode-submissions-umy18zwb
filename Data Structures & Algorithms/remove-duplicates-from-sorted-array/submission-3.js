class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length < 2) return nums.length;
        let L = 0;
        let R = 0;
        while(R < nums.length){
            nums[L] = nums[R];
            while(R < nums.length && nums[L] === nums[R]){
                R++;
            }
            L++;
        }
        return L;

    }
}
