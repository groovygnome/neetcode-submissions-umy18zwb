class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        let totalCost = this.findMSTWeight(-1, n, edges);
        let crit = [];
        let pseudoCrit = [];

        for(let i = 0; i < edges.length; i++){
            let exclCost = this.findMSTWeight(i, n, edges);
            if(exclCost === -1 || exclCost > totalCost) crit.push(i);
            else if(exclCost === totalCost){
                let pseudoCost = this.findMSTWeight(-1, n, edges, [edges[i][0], edges[i][1], edges[i][2]]);
                console.log(pseudoCost);
                if(pseudoCost === exclCost) pseudoCrit.push(i);
            }
        }

        return [crit, pseudoCrit];
    }

    findMSTWeight(index, n, edges, pseudo = []){
        let edgeArr = new Array(n).fill().map((x) => new Array())
        for(let i = 0; i < edges.length; i++){
            if(i != index){
                edgeArr[edges[i][0]].push([edges[i][1], edges[i][2]]);
                edgeArr[edges[i][1]].push([edges[i][0], edges[i][2]]);
            }
        }

        let minHeap = new MinHeap();
        let visited = new Map();
        let totalCost = 0;

        if(pseudo.length > 0){
            for(let i = 0; i < 2; i++){
                visited.set(pseudo[i], 0);
                for(let j = 0; j < edgeArr[pseudo[i]].length; j++){
                    minHeap.push(edgeArr[pseudo[i]][j][0], edgeArr[pseudo[i]][j][1]);
                }
            }
            totalCost += pseudo[2];
        } else minHeap.push(0, 0);

        while(minHeap.length() > 0){
            let curr = minHeap.pop();
            let source = curr[0];
            let cost = curr[1];

            if(visited.get(source) === undefined){
                visited.set(source, cost);
                totalCost += cost;
            } else{
                continue;
            }

            for(let i = 0; i < edgeArr[source].length; i++){
                minHeap.push(edgeArr[source][i][0], edgeArr[source][i][1]);
            }
        }


        if(visited.size === n) return totalCost;
        else return -1;
    }
}

class MinHeap{
    constructor(){
        this.heap = [[-1, -1]];
    }

    push(source, val){
        this.heap.push([source, val]);

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
