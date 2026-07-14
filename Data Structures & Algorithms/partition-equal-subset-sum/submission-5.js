class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        nums.forEach(num => total += num);
        if(total % 2 != 0) return false;
        total = total/2;
        let workingMatrix = new Array(nums.length+1).fill().map(() => Array(total+1).fill(false));
        for(let i = 0; i < workingMatrix.length; i++) workingMatrix[i][0] = true;
        for(let i = 1; i <= nums.length; i++){
            for(let j = 1; j <= total; j++){
                if(nums[i-1] <= j){
                    workingMatrix[i][j] = workingMatrix[i-1][j] || workingMatrix[i - 1][j - nums[i - 1]];
                } else{
                    workingMatrix[i][j] = workingMatrix[i-1][j];
                }
            }
        }
        return workingMatrix[nums.length][total];
    }
}
