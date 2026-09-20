class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];
        return this.subsetsHelper(nums);
    }

    subsetsHelper(nums, curr = 0) {
        if (curr >= nums.length) return [[]];

        let rest = this.subsetsHelper(nums, curr+1);

        console.log(rest);

        let ans = [];

        for(let subset of rest){
            ans.push(subset);
            ans.push([nums[curr], ...subset]);
        }

        return ans;
    }
}
