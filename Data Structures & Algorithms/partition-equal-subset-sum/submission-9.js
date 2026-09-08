class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        nums.forEach((num) => total += num);
        if(total % 2 != 0) return false;
        else total = total/2;
        return this.partitionHelper(nums, total)
    }

    partitionHelper(nums, total, curr = 0, runningTotal = 0){
        if(curr >= nums.length || runningTotal > total) return false;

        let incl = runningTotal + nums[curr];
        if(incl > total){
            return this.partitionHelper(nums, total, curr+1, runningTotal);
        } else if(incl < total){
            return this.partitionHelper(nums, total, curr+1, incl) || this.partitionHelper(nums, total, curr+1, runningTotal);
        } else{
            return true;
        }
    }
}
