/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        let shortestPaths = {};
        for(let i = 0; i < n; i++){
            shortestPaths[i] = -1;
        }
        let minHeap = new MinHeap();

        minHeap.push(0,src);
        while(minHeap.length() > 0){
            let currNode = minHeap.pop();
            let curr = currNode[1];
            let cost = currNode[0];
            if(shortestPaths[curr] != -1 && cost > shortestPaths[curr]) continue;
            let i = 0;
            while(i < edges.length){
                if(edges[i][0] === curr){
                    let currEdge = edges[i];
                    minHeap.push(cost + currEdge[2], currEdge[1]);
                }
                i++;
            }
            if(shortestPaths[curr] === -1){
                shortestPaths[curr] = cost;
            } else{
                if(shortestPaths[curr] > cost) shortestPaths[curr] = cost;
            }
        }

        return shortestPaths;
    }
}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1]];
    }

    push(val, node){
        this.heap.push([val, node]);
        let curr = this.heap.length-1;
        while(Math.floor(curr/2) != 0 && this.heap[curr][0] < this.heap[Math.floor(curr/2)][0]){
            let temp = this.heap[curr];
            this.heap[curr] = this.heap[Math.floor(curr/2)];
            this.heap[Math.floor(curr/2)] = temp;
            curr = Math.floor(curr/2);
        }
    }

    pop(){
        let ans = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();

        let curr = 1;
        while(curr*2 < this.heap.length){
            let swap = curr*2;
            if(curr*2+1 < this.heap.length){
                this.heap[swap][0] < this.heap[curr*2+1][0] ? swap = swap : swap = curr*2+1;
            }
            if(this.heap[curr][0] > this.heap[swap][0]){
                let temp = this.heap[curr];
                this.heap[curr] = this.heap[swap];
                this.heap[swap] = temp;
                curr = swap;
            } else break;
        }

        return ans;
    }

    length(){
        return this.heap.length-1;
    }
}
