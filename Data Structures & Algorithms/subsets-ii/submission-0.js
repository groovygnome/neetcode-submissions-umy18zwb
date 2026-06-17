class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        let ans = []
        this.helper(0, nums, ans);
        return ans;
    }

    helper(i, nums, ans, curr = []){
        if(i >= nums.length){
            ans.push([...curr]);
            return;
        }

        curr.push(nums[i]);
        this.helper(i+1, nums, ans, curr);

        curr.pop();
        while(i+1 < nums.length && nums[i] === nums[i+1]) i++;
        this.helper(i+1, nums, ans, curr);
    }
}
