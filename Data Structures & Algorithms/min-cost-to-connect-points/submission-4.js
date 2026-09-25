class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        if(points.length <= 1) return 0;
        let costs = {};
        for(let i = 0; i < points.length; i++){
            for(let j = i+1; j < points.length; j++){
                if(!costs[i]) costs[i] = [];
                if(!costs[j]) costs[j] = [];
                costs[i].push([j, (Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]) ) ])
                 costs[j].push([i, (Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1]) ) ])               
            }
        }

        let minHeap = new MinHeap();
        let visited = {};
        minHeap.push(0, 0);
        let total = 0;
        while(minHeap.length() > 0){
            let curr = minHeap.pop();
            let point = curr[0];
            let cost = curr[1];
            if(visited[point] != undefined) continue;
            visited[point] = cost;
            total += cost;
            let paths = costs[point];
            for(let path of paths){
                minHeap.push(path[0], path[1]);
            }
        }
        return total;
    }

}

class MinHeap {
    constructor(){
        this.heap = [[-1, -1]];
    }

    push(point, cost){
        this.heap.push([point, cost]);
        
        let C = this.heap.length-1;
        let P = Math.floor(C/2);
        while(P > 0){
            if(this.heap[C][1] < this.heap[P][1]){
                [this.heap[C], this.heap[P]] = [this.heap[P], this.heap[C]];
                C = P;
                P = Math.floor(C/2);
            } else break;
        }
    }

    pop(){
        let ans = this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();

        let C = 1;
        let L = C*2;
        let R = L+1;
        while(L < this.heap.length){
            let S = L;
            if(R < this.heap.length && this.heap[R][1] < this.heap[L][1]) S = R;
            if(this.heap[S][1] < this.heap[C][1]){
                [this.heap[C], this.heap[S]] = [this.heap[S], this.heap[C]];
                C = S;
                L = C*2;
                R = L+1;
            } else break;
        }


        return ans;
    }

    length(){
        return this.heap.length-1;
    }
}
