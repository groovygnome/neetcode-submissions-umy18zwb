class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        let rob1 = this.houseHelper(nums.slice(1, nums.length));
        let rob2 = this.houseHelper(nums.slice(0, nums.length-1));
        return Math.max(rob1, rob2);
    }

    houseHelper(nums, curr = 0, visited = {}){
        if(curr >= nums.length) return 0;

        if(visited[curr]) return visited[curr];

        visited[curr] = Math.max(nums[curr] + this.houseHelper(nums, curr+2, visited), this.houseHelper(nums, curr+1, visited));

        return visited[curr];
    }
}
