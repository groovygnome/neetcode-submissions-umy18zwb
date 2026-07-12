class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let workingMatrix = Array.from({ length: nums.length + 1 }, () => ({}));

        workingMatrix[0][0] = 1;

        for(let i = 0; i < nums.length; i++){
            for(let total in workingMatrix[i]){
                total = Number(total);
                let count = workingMatrix[i][total];
                workingMatrix[i+1][total + nums[i]] =
                    (workingMatrix[i+1][total+nums[i]] || 0) + count;
                workingMatrix[i+1][total - nums[i]] =
                    (workingMatrix[i+1][total-nums[i]] || 0) + count;
            }
        }

        return workingMatrix[nums.length][target] || 0;
    }
}
