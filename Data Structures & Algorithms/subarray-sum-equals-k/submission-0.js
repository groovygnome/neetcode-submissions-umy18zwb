class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;

        let prefixSums = new Map();
        prefixSums.set(0, 1);

        for(let i = 0; i < nums.length; i++){
            curSum += nums[i];
            let diff = curSum - k;
            if(prefixSums.get(diff)) res += prefixSums.get(diff);
            if(prefixSums.get(curSum)){
                prefixSums.set(curSum, prefixSums.get(curSum)+1);
            } else {
                prefixSums.set(curSum, 1);
            }
        }

        return res;
    }
}
