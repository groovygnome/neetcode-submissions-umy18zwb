class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length < 2) return nums.length;
        let L = 1;
        let R = 1;
        while(R < nums.length){
            if(nums[R] != nums[R-1]){
                nums[L] = nums[R];
                L++;
            }
            R++;
        }
        return L;

    }
}
