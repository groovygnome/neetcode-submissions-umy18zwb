class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        nums.forEach(num => total += num);
        if(total % 2 != 0) return false;
        return this.partHelper(nums, total);
    }

    partHelper(nums, total, sum = 0, curr = 0, visited = new Map()){
        if(sum === total/2) return true;
        else if(curr > nums.length && sum != Math.floor(total/2)) return false;
        if(visited.get(curr + '#' + sum) != undefined) return visited.get(curr + '#' + sum);
        visited.set(curr + '#' + sum, (sum === total/2))

        let ans1 = this.partHelper(nums, total, sum, curr+1, visited);

        let ans2 = this.partHelper(nums, total, sum + nums[curr], curr+1, visited);

        return ans1 || ans2;
    }
}
