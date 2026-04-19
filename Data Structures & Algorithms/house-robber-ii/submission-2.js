class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 3){
            return Math.max(...nums);
        }
        
        let rob1 = nums[0];
        let rob2 = Math.max(nums[0], nums[1]);

        for(let i = 2; i < nums.length-1; i++){
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        let answer1 = rob2;

        rob1 = nums[1];
        rob2 = Math.max(nums[1], nums[2]);

        for(let i = 2; i+1 < nums.length; i++){
            let temp = Math.max(rob1 + nums[i+1], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        let answer2 = rob2;

        return Math.max(answer1, answer2);
    }
}
