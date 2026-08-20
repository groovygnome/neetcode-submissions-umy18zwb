class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = {};
        for (let i = 0; i < nums.length; i++) {
            if(!countMap[nums[i]]) countMap[nums[i]] = 0;
            countMap[nums[i]]++;
        }

        let maxHeap = new MaxHeap(k);

        for(let [key, val] of Object.entries(countMap)){
            maxHeap.push([Number(key), val]);
        }

        let ans = [];

        for(let i = 0; i < k; i++){
            ans.push(maxHeap.pop());
        }

        return ans;
    }
}

class MaxHeap{
    constructor(capacity){
        this.arr = [[-1,-1]];
        this.capacity = capacity;
    }

    push(entry){
        this.arr.push(entry);
        let curr = this.arr.length-1;
        while(curr > 1){
            let parent = Math.floor(curr/2);
            if(this.arr[parent][1] < this.arr[curr][1]){
                let tmp = this.arr[curr];
                this.arr[curr] = this.arr[parent];
                this.arr[parent] = tmp;
                curr = parent;
            } else break;
        }
    }

    pop(){
        let ans = this.arr[1][0];
        this.arr[1] = this.arr[this.arr.length-1];
        this.arr.pop();
        let curr = 1;
        let l = curr*2;
        let r = l+1;
        while(l < this.arr.length){
            let swap = l;
            if(r < this.arr.length && this.arr[r][1] > this.arr[l][1]) swap = r;
            if(this.arr[curr][1] < this.arr[swap][1]){
                let temp = this.arr[curr];
                this.arr[curr] = this.arr[swap];
                this.arr[swap] = temp;
                curr = swap;
                l = curr*2;
                r = l+1;
            } else break;
        }

        return ans;
    }
}
