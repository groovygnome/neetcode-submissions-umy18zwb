class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length-1;
        
        let min = nums[0];
        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start);
            if(nums[mid] < min) min = nums[mid];

            if(nums[mid] < nums[end]){
                end = mid-1;
            } else if(nums[mid] >= nums[end]){
                start = mid+1;
            }

        }
        return min;
    }
}
