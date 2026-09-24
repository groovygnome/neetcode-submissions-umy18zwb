class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let adjList = {};
        for(let time of times){
            if(!adjList[time[0]]) adjList[time[0]] = [];
            if(!adjList[time[1]]) adjList[time[1]] = [];
            adjList[time[0]].push([time[1], time[2]]);
        }

        let visited = new Map();
        let minHeap = new MinHeap();
        minHeap.push(k, 0);
        while(visited.size < n && minHeap.length() > 0){
            let curr = minHeap.pop();
            if(visited.get(curr[0]) === undefined) visited.set(curr[0], curr[1]);
            else continue;
            let vertices = adjList[curr[0]];
            for(let vertice of vertices){
                minHeap.push(vertice[0], vertice[1] + curr[1]);
            }
        }


        if(visited.size < n) return -1;
        return Math.max(...visited.values());
    }

}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1]];
    }

    push(node, cost){
        this.heap.push([node, cost]);
        let curr = this.heap.length-1;
        let parent = Math.floor(curr/2);

        while(parent > 0){
            if(this.heap[curr][1] < this.heap[parent][1]){
                [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
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
        let L = curr*2;
        let R = L+1;
        while(L < this.heap.length){
            let swap = L;
            if(R < this.heap.length && this.heap[R][1] < this.heap[L][1]) swap = R;
            if(this.heap[swap][1] < this.heap[curr][1]){
                [this.heap[curr], this.heap[swap]] = [this.heap[swap], this.heap[curr]];
                curr = swap;
                L = curr*2;
                R = L+1;
            } else break;
        }

        return ans;
    }

    length(){
        return this.heap.length-1;
    }
}
