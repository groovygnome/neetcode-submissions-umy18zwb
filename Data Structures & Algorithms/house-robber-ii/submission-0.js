class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length <= 3){
            return Math.max(...nums);
        }
        
        let answerArr = [nums[0]];

        if(nums[0] > nums[1]) answerArr.push(nums[0]);
        else answerArr.push(nums[1]);

        for(let i = 2; i < nums.length-1; i++){
            answerArr.push(Math.max(answerArr[i-2] + nums[i], answerArr[i-1]));
        }

        let answer1 = answerArr[answerArr.length-1];

        answerArr = [nums[1]];
        if(nums[1] > nums[2]) answerArr.push(nums[1]);
        else answerArr.push(nums[2]);

        for(let i = 2; i+1 < nums.length; i++){
            answerArr.push(Math.max(answerArr[i-2] + nums[i+1], answerArr[i-1]));
        }

        console.log(answerArr);

        let answer2 = answerArr[answerArr.length-1];

        return Math.max(answer1, answer2);
    }
}
