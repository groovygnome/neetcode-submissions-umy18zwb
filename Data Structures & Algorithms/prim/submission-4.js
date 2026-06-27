/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        let visited = new Map();
        let edgesArr = new Array(n).fill([]).map(arr => new Array(0));
        for(let i = 0; i < edges.length; i++){
            edgesArr[edges[i][0]].push([edges[i][1], edges[i][2]]);
            edgesArr[edges[i][1]].push([edges[i][0], edges[i][2]]);
        }

        let minHeap = new MinHeap();
        minHeap.push(0, 0, 0)

        let totalCost = 0;
        while(minHeap.length() > 0){
            let curr = minHeap.pop();
            let cost = curr[0];
            let src = curr[1];

            if(visited.get(src) === undefined) {
                totalCost += cost;
                visited.set(src, cost);
            } else continue;

            for(let i = 0; i < edgesArr[src].length; i++){
                minHeap.push(edgesArr[src][i][1], edgesArr[src][i][0]);
            }
        }

        if(visited.size === n) return totalCost;
        else return -1;
    }
}

class MinHeap {
    constructor(){
        this.heap = [[-1, -1, -1]];
    }

    length(){
        return this.heap.length-1;
    }

    push(cost, src){
        this.heap.push([cost, src]);
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
        let swap = leftChild;
        while(leftChild < this.heap.length){
            let rightChild = leftChild+1;
            if(rightChild < this.heap.length) this.heap[rightChild][0] < this.heap[leftChild][0] ? swap = rightChild : swap = leftChild;
            if(this.heap[swap][0] < this.heap[curr][0]){
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[swap];
                this.heap[swap] = temp;
                curr = swap;
                leftChild = curr*2;
            } else break;
        }

        return ans;
    }
}
