class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        let minTotal = this.findMST(n, edges)

        let pseudo = [];
        let crit = [];
        for(let i = 0; i < edges.length; i++){
            let exclTotal = this.findMST(n, edges, i);
            if(exclTotal > minTotal || exclTotal === -1) crit.push(i);
            else{
                let pseudoTotal = this.findMST(n, edges, i, true);
                if(pseudoTotal === minTotal) pseudo.push(i);
            }
        }

        return [crit, pseudo];
    }

    findMST(n, edges, excl = -1, incl = false){
        let mst = [];
        let totalCost = 0;
        let unions = new UnionFind(n);
        if(incl){
            let src = edges[excl][0];
            let dest = edges[excl][1];
            mst.push([src, dest]);
            totalCost += edges[excl][2];
            unions.union(src, dest);
        }

        let minHeap = new MinHeap();
        for(let i = 0; i < edges.length; i++){
            if(i === excl) continue;
            let edge = edges[i];
            let src = edge[0];
            let dest = edge[1];
            let cost = edge[2];

            minHeap.push(src, cost, dest);
        }

        while(mst.length < n-1 && minHeap.length() > 0){
            let curr = minHeap.pop();
            let src = curr[0];
            let cost = curr[1];
            let dest = curr[2];

            if(!unions.union(src, dest)) {
                continue;
            }

            totalCost += cost;
            mst.push([src, dest]);
        }


        if(mst.length === n-1) return totalCost;
        else return -1;
    }
}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1, -1]];
    }

    push(source, val, dest){
        this.heap.push([source, val, dest]);

        let curr = this.heap.length-1;
        let parent = Math.floor(curr/2);
        while(parent > 0){
            if(this.heap[curr][1] < this.heap[parent][1]){
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
            if(rightChild < this.heap.length) this.heap[leftChild][1] < this.heap[rightChild][1] ? swap = leftChild : swap = rightChild;
            if(this.heap[swap][1] < this.heap[curr][1]){
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
        let r1 = this.find(n1);
        let r2 = this.find(n2);

        if(r1 === r2) return false;

        this.parents.set(r1, r2);
        return true;
    }
}

