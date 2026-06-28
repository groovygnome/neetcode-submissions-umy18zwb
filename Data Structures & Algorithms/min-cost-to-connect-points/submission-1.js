class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let costs = new Array(points.length).fill([]).map(x => new Array(0));
        for(let i = 0; i < points.length; i++){
            for(let j = i+1; j < points.length; j++){
                costs[i].push([(Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])), j])
                costs[j].push([(Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])), i])
            }
        }
        

        let pointsHeap = new MinHeap();
        let visited = new Map();
        pointsHeap.push(0,0);
        let totalCost = 0;
        while(pointsHeap.length() > 0){
            let curr = pointsHeap.pop();
            let cost = curr[0];
            let src = curr[1];

            if(visited.get(src) === undefined) {
                visited.set(src, cost);
                totalCost += cost;
            } else continue;

            for(let i = 0; i < costs[src].length; i++){
                pointsHeap.push(costs[src][i][0], costs[src][i][1]);
            }
        }

        return totalCost;
    }
}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1, -1]];
    }

    push(val, source){
        this.heap.push([val, source]);

        let curr = this.heap.length-1;
        let parent = Math.floor(curr/2);
        while(parent > 0){
            if(this.heap[parent][0] > this.heap[curr][0]){
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

    length(){
        return this.heap.length-1;
    }
}
