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
        let workingMatrix = new Array(total+1).fill(false);
        workingMatrix[0] = true;
        for(let i = nums.length+1; i > 0; i--){
            for(let j = total+1; j > 0; j--){
                if(j - nums[i-1] === 0){
                    workingMatrix[j] = true;
                } else{
                    workingMatrix[j] = workingMatrix[j-nums[i-1]] || workingMatrix[j];
                }
            }
        }
        return workingMatrix[total];
    }
}
