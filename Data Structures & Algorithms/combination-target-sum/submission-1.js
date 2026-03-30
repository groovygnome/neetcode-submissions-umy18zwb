class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let answer = [];
        this.sumHelper(nums, target, answer);
        return answer;
    }

    sumHelper(nums, target, answer, curr = [], i = 0){
        if(target === 0) return answer.push(curr);
        if(i === nums.length) return;
        if(target < 0) return;

        this.sumHelper(nums, target, answer, [...curr], i+1);
        this.sumHelper(nums, target - nums[i], answer, [...curr, nums[i]], i);
    }
}
