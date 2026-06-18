class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let answer = [];
        this.sumHelper(0, nums, target, answer);
        return answer;
    }

    sumHelper(i, nums, target, answer, curr = []){
        if(target === 0){
            answer.push([...curr]);
            return;
        } else if(i >= nums.length && target > 0 || target < 0){
            return;
        }

        curr.push(nums[i]);
        this.sumHelper(i, nums, target-nums[i], answer, curr);
        curr.pop();
        this.sumHelper(i+1, nums, target, answer, curr);
    }
}
