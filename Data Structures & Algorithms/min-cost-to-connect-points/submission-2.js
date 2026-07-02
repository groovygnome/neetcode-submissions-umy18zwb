class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
       let minHeap = new MinHeap();
       let unions = new UnionFind(points.length);
       for(let i = 0; i < points.length; i++){
            for(let j = i+1; j < points.length; j++){
                minHeap.push((Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])), i, j);
            }
       }

       console.log(minHeap);

        let totalCost = 0;
        let mst = []
        while(minHeap.length() > 0){
            let curr = minHeap.pop();
            let cost = curr[0];
            let src = curr[1];
            let dest = curr[2];

            if(!unions.union(src, dest)) continue;

            totalCost += cost;
            mst.push([src, dest]);
       }

       return totalCost;
    }
}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1, -1]];
    }

    push(val, source, dest){
        this.heap.push([val, source, dest]);

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

class UnionFind{
    constructor(n){
        this.parents = new Map();
        for(let i = 0; i < n; i++){
            this.parents.set(i, i);
        }
    }

    find(n){
        let curr = n;
        while(curr != this.parents.get(curr)){
            this.parents.set(curr, this.parents.get(this.parents.get(curr)));
            curr = this.parents.get(curr);
        }

        return curr;
    }

    union(n1, n2){
        let p1 = this.find(n1);
        let p2 = this.find(n2);

        if(p1 === p2) return false;

        this.parents.set(p1, p2);
        return true;
    }
}
