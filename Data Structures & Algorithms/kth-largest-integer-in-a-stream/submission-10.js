class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.max = null;
        this.heap = [0, null];
        this.limit = k+1;

        nums.forEach((num) => this.add(num));
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.heap[1] === null){
            this.heap[1] = val;
            this.max = val;
        } else if(this.heap.length < this.limit){
            this.addHeap(val);
        }else if(this.heap.length === this.limit && (val > this.max || val > this.heap[1])){
            this.popHeap();
            this.addHeap(val);
        }
        if(val > this.max) this.max = val;
        console.log(this.heap);
        return this.heap[1];
    }

    addHeap(val){
        this.heap.push(val);
        let i = this.heap.length-1;
        let parentIndex = Math.floor(i/2);
        while(parentIndex >= 1){
            if(this.heap[parentIndex] > this.heap[i]){
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
            }
        i = parentIndex;
        parentIndex = Math.floor(i/2);
        }
    }

    popHeap(){
        console.log('1 ' + this.heap);
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();
        console.log('2 ' + this.heap);
        let i = 1;
        let leftIndex = i*2;
        let rightIndex = i*2+1;
        while(leftIndex <= this.heap.length-1){
            if(this.heap[i] <= this.heap[leftIndex] && rightIndex > this.heap.length-1){
                break;
            }
            if(this.heap[i] <= this.heap[leftIndex] && this.heap[i] <= this.heap[rightIndex]){
                break;
            }
            if(rightIndex > this.heap.length-1 && this.heap[i] >= this.heap[leftIndex]){
                let temp = this.heap[leftIndex];
                this.heap[leftIndex] = this.heap[i];
                this.heap[i] = temp;
                i = leftIndex;
            }
            else if(rightIndex > this.heap.length-1 || (this.heap[i] >= this.heap[leftIndex] && this.heap[leftIndex] <= this.heap[rightIndex])){
                let temp = this.heap[leftIndex];
                this.heap[leftIndex] = this.heap[i];
                this.heap[i] = temp;
                i = leftIndex;
            } else if(this.heap[i] > this.heap[rightIndex] && this.heap[rightIndex] <= this.heap[leftIndex]){
                let temp = this.heap[rightIndex];
                this.heap[rightIndex] = this.heap[i];
                this.heap[i] = temp;
                i = rightIndex;
            }
        leftIndex = i*2;
        rightIndex = i*2+1;
        }
        console.log('3 ' + this.heap);
    }
}
