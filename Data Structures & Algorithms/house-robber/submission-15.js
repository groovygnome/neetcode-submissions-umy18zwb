class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return this.houseHelper(nums);
    }

    houseHelper(nums, curr = 0, visited = {}){
        if(curr >= nums.length) return 0;

        if(visited[curr] != undefined) return visited[curr];

        visited[curr] = Math.max(nums[curr] + this.houseHelper(nums, curr+2, visited), this.houseHelper(nums, curr+1, visited));

        return visited[curr];
    }
}
