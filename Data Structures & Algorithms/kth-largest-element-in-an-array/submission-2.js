class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new Heap(true);
        for(let num of nums){
            maxHeap.push(num);
        }

        for(let i = 1; i < k; i++){
            maxHeap.pop();
        }

        

        return maxHeap.pop();
    }
}

class Heap {
    constructor(max) {
        this.max = max;
        this.heap = [-1];
    }

    push(val) {
        this.heap.push(val);
        let curr = this.heap.length - 1;
        let p = Math.floor(curr / 2);
        while (p > 0) {
            if (this.max) {
                if (this.heap[p] < this.heap[curr]) {
                    [this.heap[p], this.heap[curr]] = [this.heap[curr], this.heap[p]];
                    curr = p;
                    p = Math.floor(curr / 2);
                } else break;
            } else {
                if (this.heap[p] > this.heap[curr]) {
                    [this.heap[p], this.heap[curr]] = [this.heap[curr], this.heap[p]];
                    curr = p;
                    p = Math.floor(curr / 2);
                } else break;
            }
        }
    }

    pop() {
        let ans = this.heap[1];
        this.heap[1] = this.heap.pop();
        let curr = 1;
        let l = curr*2;
        let r = l+1;
        while (l < this.heap.length) {
            if (this.max) {
                let swap = l;
                if(r < this.heap.length && this.heap[r] > this.heap[l]) swap = r;
                if (this.heap[swap] > this.heap[curr]) {
                    [this.heap[swap], this.heap[curr]] = [this.heap[curr], this.heap[swap]];
                    curr = swap;
                    l = curr*2;
                    r = l+1;
                } else break;
            } else {
                let swap = l;
                if(r < this.heap.length && this.heap[r] < this.heap[l]) swap = r;
                if (this.heap[swap] < this.heap[curr]) {
                    [this.heap[swap], this.heap[curr]] = [this.heap[curr], this.heap[swap]];
                    curr = swap;
                    l = curr*2;
                    r = l+1;
                } else break;
            }
        }

        return ans;
    }
}
