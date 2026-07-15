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
        let workingArr = new Array(total+1).fill(false);
        workingArr[0] = true;
        for(let i = nums.length; i >= 1; i--){
            for(let j = total; j >= 1; j--){
                if(nums[i-1] <= j){
                    workingArr[j] = workingArr[j] || workingArr[j - nums[i - 1]];
                } else{
                    workingArr[j] = workingArr[j];
                }
            }
        }
        return workingArr[total];
    }
}
