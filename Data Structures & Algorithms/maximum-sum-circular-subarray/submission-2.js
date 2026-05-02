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
            if(currMaxSum + num < num) currMaxSum = 0;
            if(currMinSum + num > num) currMinSum = 0;
            currMaxSum += num;
            currMinSum += num;
            total += num;
            if(currMaxSum > maxSum) maxSum = currMaxSum;
            if(currMinSum < minSum) minSum = currMinSum;
        }

        minSum = total-minSum;

        if(minSum === 0) return maxSum;
        else if(maxSum === 0) return minSum;
        else return Math.max(minSum, maxSum);
    }
}
