class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let answer = [];
        let curr = [];
        this.helper(0, nums, curr, answer);
        return answer;
    }

    helper(i, nums, curr, answer){
        if(i >= nums.length){
            answer.push([...curr]);
            return;
        }

        curr.push(nums[i]);
        this.helper(i+1, nums, curr, answer);
        curr.pop();
        this.helper(i+1, nums, curr, answer);
    }
}
