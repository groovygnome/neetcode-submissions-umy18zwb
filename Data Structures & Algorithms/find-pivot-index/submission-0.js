class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let prefixSum = [nums[0]];
        let postfixSum = Array(nums.length-1).fill(0);
        postfixSum.push(nums[nums.length-1]);
        let L = 1;
        let R = nums.length-2;
        while(L < nums.length){
            prefixSum.push(nums[L] + prefixSum[L-1]);
            postfixSum[R] = nums[R] + postfixSum[R+1];
            L++;
            R--;
        }

        for(let i = 0; i < nums.length; i++){
            if(prefixSum[i] === postfixSum[i]) return i;
        }

        return -1;
    }
}
