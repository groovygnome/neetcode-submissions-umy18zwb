class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 2){
            return Math.max(...nums);
        }

        let robArray = [nums[0]];

        if(nums[0] > nums[1]) robArray.push(nums[0]);
        else robArray.push(nums[1]);

        for(let i = 2; i < nums.length; i++){
            robArray.push(Math.max(robArray[i-2] + nums[i], robArray[i-1]));
        }

        console.log(robArray);

        return robArray[robArray.length-1];
        
    }
}
