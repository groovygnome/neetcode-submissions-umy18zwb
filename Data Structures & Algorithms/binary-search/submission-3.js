class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, start = 0, end = nums.length-1) {
        if(start > end){
            return -1;
        }
        let mid = Math.floor((end - start) / 2 + start);
        if(nums[mid] > target){
            return this.search(nums, target, start, mid-1);
        } else if(nums[mid] < target){
            return this.search(nums, target, mid+1, end);
        } else if(nums[mid] === target){
            return mid;
        }
    }
}
