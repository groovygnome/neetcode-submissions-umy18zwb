class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.waysHelper(nums, target);
    }

    waysHelper(nums, target, curr = 0, visited = new Map()){
        if(target === 0 && curr === nums.length) return 1;
        else if(target != 0 && curr >= nums.length) return 0;
        if(visited.get(target + '#' + curr) != undefined) return visited.get(target + '#' + curr);

        let ans = this.waysHelper(nums, target-nums[curr], curr+1) + this.waysHelper(nums, target+nums[curr], curr+1)

        visited.set(target + '#' + curr, ans);

        return ans;
    }
}
