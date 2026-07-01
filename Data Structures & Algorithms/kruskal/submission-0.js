/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number}
     * @param {Array<Array<number>>}
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        let minHeap = new MinHeap();

        for(let i = 0; i < edges.length; i++){
            minHeap.push(edges[i][2], edges[i][0], edges[i][1]);
        }

        let unionFind = new UnionFind(n);
        let mst = [];
        let totalCost = 0;
        while(mst.length < n-1 && minHeap.length() > 0){
            let curr = minHeap.pop();
            let cost = curr[0];
            let n1 = curr[1];
            let n2 = curr[2];
            if(!unionFind.union(n1, n2)){
                continue;
            }
            mst.push([n1, n2]);
            totalCost += cost;
        }

        if(mst.length < n-1) return -1;
        else return totalCost;
    }
}

class MinHeap {
    constructor(){
        this.heap = [[-1, -1, -1]];
    }

    push(val, n1, n2){
        this.heap.push([val, n1, n2]);

        let curr = this.heap.length-1;
        let parent = Math.floor(curr/2);
        while(parent > 0){
            if(this.heap[curr][0] < this.heap[parent][0]){
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[parent];
                this.heap[parent] = temp;
                curr = parent;
                parent = Math.floor(curr/2);
            } else break;
        }
    }

    pop(){
        let ans = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();

        let curr = 1;
        let leftChild = curr*2;
        while(leftChild < this.heap.length){
            let rightChild = leftChild+1;
            let swap = leftChild;
            if(rightChild < this.heap.length) this.heap[leftChild][0] > this.heap[rightChild][0] ? swap = rightChild : swap = leftChild;
            if(this.heap[curr][0] > this.heap[swap][0]){
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[swap];
                this.heap[swap] = temp;
                curr = swap;
                leftChild = curr*2;
            } else break;
        }

        return ans;
    }

    length(){
        return this.heap.length-1;
    }
}

class UnionFind{
    constructor(n){
        this.parents = new Map();
        for(let i = 0; i < n; i++){
            this.parents.set(i,i);
        }
    }

    union(n1, n2){
        let p1 = this.find(n1);
        let p2 = this.find(n2);
        
        if(p1 === p2) return false;

        this.parents.set(p1, p2);

        return true;

    }

    find(n){
        let curr = n;
        while(curr != this.parents.get(curr)){
            curr = this.parents.get(curr);
        }

        return curr;
    }
}
