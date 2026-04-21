class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 2){
            return Math.max(...nums);
        }

        let rob1 = nums[0];
        let rob2 = Math.max(nums[0], nums[1]);

        for(let i = 2; i < nums.length; i++){
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
