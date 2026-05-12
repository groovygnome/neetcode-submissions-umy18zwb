class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length < 2) return nums.length;
        let L = 0;
        let R = 1;
        while(R < nums.length){
            while(nums[L] === nums[R]){
                nums.splice(R, 1);
                
            }
            L++;
            R = L + 1;
        }
        return nums.length;

    }
}
