class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let answer = [];
        this.helper(0, nums, [], answer);
        return answer;
    }

    helper(i, nums, curr, answer){
        if(i >= nums.length){
            answer.push(curr);
            return;
        }

        this.helper(i+1, nums, [...curr, nums[i]], answer);
        this.helper(i+1, nums, curr, answer);
    }
}
