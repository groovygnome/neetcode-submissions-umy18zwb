class MinHeap {
    constructor() {
        this.heap = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.heap.length === 1){ 
            this.heap.push(val);
            return;
        }
        this.heap.push(val);

        let curr = this.heap.length-1;
        while(Math.floor(curr/2) > 0){
            let parent = Math.floor(curr/2);
            if(this.heap[curr] >= this.heap[parent]) break;
            if(this.heap[curr] < this.heap[parent]) {
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[parent];
                this.heap[parent] = temp;
            }
            curr = parent;
        }
        return;
    }

    pop() {
        if(this.heap.length === 1) return -1;
        if(this.heap.length === 2) return this.heap.pop();
        
        let ans = this.heap[1];
        this.heap[1] = this.heap.pop();

        let curr = 1;
        let left = curr*2;
        let right = left+1;
        let mIndex = left;
        if(right < this.heap.length && this.heap[right] < this.heap[left]) mIndex = right;
        while(left < this.heap.length){
            if(this.heap[curr] <= this.heap[mIndex]) break;
            if(this.heap[curr] > this.heap[mIndex]){
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[mIndex];
                this.heap[mIndex] = temp;
            }
            curr = mIndex;
            left = curr*2;
            right = left+1;
            mIndex = left;
            if(right < this.heap.length && this.heap[right] < this.heap[left]) mIndex = right;
        }
        return ans;
    }

    /**
     * @return {number}
    pop() {
        if(this.heap.length === 1){ 
            return -1;
        }
        if(this.heap.length === 2){
            return this.heap.pop();
        }
        let ans = this.heap[1];
        this.heap[1] = this.heap.pop();

        let curr = 1;
        while(curr*2 < this.heap.length){
            let left = curr*2;
            let right = left+1;
            let mIndex = left;
            if(right < this.heap.length && this.heap[right] < this.heap[left]) mIndex = right;

            if(this.heap[curr] <= this.heap[mIndex]) break;

            let temp = this.heap[curr];
            this.heap[curr] = this.heap[mIndex];
            this.heap[mIndex] = temp;

            curr = mIndex;
        }
        return ans;
    }
    */

    /**
     * @return {number}
     */
    top() {
        if(this.heap.length === 1){ 
            return -1;
        } else{
            return this.heap[1];
        }
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        if(nums.length === 0) return;

        nums.push(nums[0]);
        nums[0] = 0;

        let curr = Math.floor(nums.length/2);
        let left = curr*2;
        let right = left+1;
        let mIndex = left;
        if(nums[right] && nums[right] < nums[left]) mIndex = right;
        while(curr > 0){
            if(nums[mIndex] < nums[curr]){
                let temp = nums[curr];
                nums[curr] = nums[mIndex];
                nums[mIndex] = temp;
            }

            curr--;
            left = curr*2;
            right = left+1;
            mIndex = left;
            if(nums[right] && nums[right] < nums[left]) mIndex = right;
        }

        this.heap = nums;
    }
}
