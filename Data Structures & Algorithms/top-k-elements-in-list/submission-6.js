class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numCount = new Map();
        for(let i = 0; i < nums.length; i++){
            if(!numCount.get(nums[i])) numCount.set(nums[i], 0);
            numCount.set(nums[i], numCount.get(nums[i])+1);
        }

        let entries = numCount.entries().toArray();
        this.heapify(entries);

        let answer = [];

        while(k > 0){
            answer.push(this.pop(entries));
            k--;
        }

        return answer;
    }

    heapify(nums){
        nums.push(nums[0]);
        nums[0] = [0,0];


        let curr = Math.floor((nums.length-1)/2);
        while(curr > 0){
            let left = curr*2;
            let right = left+1;
            let maxDex = left;
            if(right < nums.length && nums[right][1] > nums[left][1]) maxDex = right;
            if(nums[curr][1] >= nums[maxDex][1]){
                curr--;
                continue;
            }
            let temp = nums[maxDex];
            nums[maxDex] = nums[curr];
            nums[curr] = temp;

            this.checkChild(nums, maxDex);

            curr--;
        }

    }

    checkChild(nums, start){
        let curr = start;
        while(curr*2 < nums.length){
            let left = curr*2;
            let right = left+1;
            let maxDex = left;
            if(right < nums.length && nums[right][1] > nums[left][1]) maxDex = right;
            if(nums[curr][1] >= nums[maxDex][1]){
                break
            }
            let temp = nums[maxDex];
            nums[maxDex] = nums[curr];
            nums[curr] = temp;

            curr = maxDex;
        }
    }

    pop(nums){
        if(nums.length <= 1) return -1;
        if(nums.length === 2) return nums.pop()[0];

        let ans = nums[1]
        nums[1] = nums.pop();

        let curr = 1;
        while(curr*2 < nums.length){
            let left = curr*2;
            let right = left+1;
            let maxDex = left;
            if(right < nums.length && nums[right][1] > nums[left][1]) maxDex = right;
            if(nums[curr][1] >= nums[maxDex][1]) break;
            let temp = nums[curr];
            nums[curr] = nums[maxDex];
            nums[maxDex] = temp;
            curr = maxDex;
        }
        return ans[0];
    }
}
