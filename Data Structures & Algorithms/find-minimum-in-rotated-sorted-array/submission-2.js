class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L = 0;
        let R = nums.length-1;
        let mid = Math.floor((L+R)/2);

        while(L < R){
            if(nums[mid] > nums[R]){
                L = mid+1;
            } else if(nums[mid] < nums[L]){
                R = mid;
            } else break
            mid = Math.floor((L+R)/2);
        }

        return nums[L];
    }
}
