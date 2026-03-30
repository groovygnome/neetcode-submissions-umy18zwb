class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        this.heapify(nums);
        console.log(nums);

        while(k > 1){
            this.popHeap(nums);
            k--;
        }

        return this.popHeap(nums);
    }

    heapify(nums){
        nums.push(nums[0]);
        nums[0] = 0;

        let curr = Math.floor(nums.length/2);

        while(curr > 0){
            let i = curr;

            let leftIndex = i*2;
            let rightIndex = leftIndex + 1;
            let maxdex = leftIndex;
            if(rightIndex < nums.length && nums[rightIndex] > nums[leftIndex]) maxdex = rightIndex;
            while(maxdex < nums.length && nums[i] < nums[maxdex]){
                let temp = nums[i];
                nums[i] = nums[maxdex];
                nums[maxdex] = temp;

                i = maxdex;
                leftIndex = i*2;
                rightIndex = leftIndex+1;
                maxdex = leftIndex;
                if(rightIndex < nums.length && nums[rightIndex] > nums[leftIndex]) maxdex = rightIndex;
            }
            curr--;
        }
        return nums;
    }

    popHeap(nums){
        if(nums.length === 1){
            return -1;
        }
        if(nums.length === 2){
            return nums.pop();
        }

        let ans = nums[1];
        nums[1] = nums[nums.length-1];
        nums.pop();

        let i = 1;
        let leftIndex = i*2;
        let rightIndex = leftIndex+1;
        let maxdex = leftIndex;
        if(rightIndex < nums.length && nums[rightIndex] > nums[leftIndex]) maxdex = rightIndex;
        while(maxdex < nums.length && nums[i] < nums[maxdex]){
            let temp = nums[i];
            nums[i] = nums[maxdex];
            nums[maxdex] = temp;

            i = maxdex;
            leftIndex = i*2;
            rightIndex = leftIndex+1;
            maxdex = leftIndex;
            if(rightIndex < nums.length && nums[rightIndex] > nums[leftIndex]) maxdex = rightIndex;
            }
        return ans;       
    }    
}
