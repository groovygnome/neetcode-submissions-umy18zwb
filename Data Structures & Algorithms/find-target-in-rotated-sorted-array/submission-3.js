class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length-1;
        let min = 0;

        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start)
            if(nums[mid] < nums[min]) min = mid;

            if(nums[mid] > nums[end]){
                start = mid+1;
            } else if(nums[mid] <= nums[end]){
                end = mid-1;
            }
        }

        if(nums[min] === target) return min;
        
        start = 0;
        end = min;

        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start)
            if(nums[mid] === target) return mid;

            if(nums[mid] > target){
                end = mid-1;
            } else if(nums[mid] < target){
                start = mid+1;
            }
        }

        start = min;
        end = nums.length-1;

        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start)
            if(nums[mid] === target) return mid;

            if(nums[mid] > target){
                end = mid-1;
            } else if(nums[mid] < target){
                start = mid+1;
            }
        }

        return -1;
    }
}
