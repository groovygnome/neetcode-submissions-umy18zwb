class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        let paths = new Array(n).fill([]).map(x => Array(0));
        let maxProb = new MaxHeap();
        let answers = [];
        for(let i = 0; i < n; i++){
            answers.push(-1);
        }

        for(let i = 0; i < edges.length; i++){
            paths[edges[i][0]].push([edges[i][1], succProb[i]])
            paths[edges[i][1]].push([edges[i][0], succProb[i]])
        }


        maxProb.push(start_node, 1);


        while(maxProb.length() > 0){
            let curr = maxProb.pop();
            let node = curr[0];
            let prob = curr[1];
            if(answers[node] != -1 && prob <= answers[node]) continue;
            else answers[node] = prob;

            for(let i = 0; i < paths[node].length; i++){
                maxProb.push(paths[node][i][0], prob * paths[node][i][1]);
            }
        }

        if(answers[end_node] === -1) return 0
        else return answers[end_node];
    }
}

class MaxHeap {
    constructor(){
        this.array = [[-1,-1]];
    }

    push(node, prob){
        this.array.push([node, prob]);

        let curr = this.array.length-1;
        let parent = Math.floor(curr/2);
        while(parent > 0){
            if(this.array[curr][1] > this.array[parent][1]){
                let temp = this.array[curr];
                this.array[curr] = this.array[parent];
                this.array[parent] = temp;
                curr = parent;
                parent = Math.floor(curr/2);
            } else break;
        }
    }

    pop(){
        let ans = this.array[1];
        this.array[1] = this.array[this.array.length-1];
        this.array.pop();

        let curr = 1;
        let child = curr*2;
        while(child < this.array.length){
            if(child+1 < this.array.length){
                this.array[child][1] < this.array[child+1][1] ? child = child+1 : child = child;
            }
            if(this.array[child][1] > this.array[curr][1]){
                let temp = this.array[curr];
                this.array[curr] = this.array[child];
                this.array[child] = temp;
                curr = child;
                child = curr*2;
            } else break;
        }

        return ans;
    }

    length(){
        return this.array.length-1;
    }
}
