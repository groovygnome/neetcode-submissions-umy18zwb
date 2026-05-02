class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let maxSum = nums[0];
        let minSum = nums[0];
        let currMaxSum = 0;
        let currMinSum = 0;
        let total = 0;

        for(let num of nums){
            currMaxSum = Math.max(currMaxSum + num, num);
            currMinSum = Math.min(currMinSum + num, num);
            total += num;
            maxSum = Math.max(maxSum, currMaxSum);
            minSum = Math.min(minSum, currMinSum);
        }

        minSum = total-minSum;

        if(minSum === 0) return maxSum;
        else if(maxSum === 0) return minSum;
        else return Math.max(minSum, maxSum);
    }
}
