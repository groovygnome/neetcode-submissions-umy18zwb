class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let minHeap = new MinHeap();
        let timesMap = {};
        let answer = [-1];
        for(let i = 1; i <= n; i++){
            timesMap[i] = [];
            answer.push(-1);
        }
        for(let i = 0; i < times.length; i++){
            let source = times[i][0];
            let dest = times[i][1];
            let cost = times[i][2];

            timesMap[source].push([dest, cost]);
        }

        minHeap.push(k, 0);

        while(minHeap.length() > 0){
            let curr = minHeap.pop();
            let node = curr[0];
            let cost = curr[1];
            if(answer[node] != -1 && cost >= answer[node]) continue;
            else if(answer[node] > cost || answer[node] === -1) answer[node] = cost;

            for(let i = 0; i < timesMap[node].length; i++){
                minHeap.push(timesMap[node][i][0], cost + timesMap[node][i][1])
            }

        }

        let max = -1;
        for(let i = 1; i <= n; i++){
            if(answer[i] === -1) return -1;
            else if(answer[i] > max) max = answer[i];
        }
        
        return max;

    }
}

class MinHeap{
    constructor(){
        this.array = [[-1, -1]];
    }

    push(node, cost){
        this.array.push([node, cost]);
        let curr = this.array.length-1;
        while(Math.floor(curr/2) > 0){
            if(this.array[Math.floor(curr/2)][1] > this.array[curr][1]){
                let swap = this.array[curr];
                this.array[curr] = this.array[Math.floor(curr/2)];
                this.array[Math.floor(curr/2)] = swap;
                curr = Math.floor(curr/2);
            } else break;
        }
    }

    pop(){
        let ans = this.array[1];
        this.array[1] = this.array[this.array.length-1];
        this.array.pop();

        let curr = 1;
        while(curr*2 < this.array.length){
            let swap = curr*2;
            if(curr*2+1 < this.array.length){
                this.array[curr*2+1][1] < this.array[swap][1] ? swap = curr*2+1 : swap = swap; 
            }
            if(this.array[curr][1] > this.array[swap][1]){
                let temp = this.array[curr];
                this.array[curr] = this.array[swap];
                this.array[swap] = temp;
                curr = swap;
            } else break;
        }

        return ans;
    }

    length(){
        return this.array.length-1;
    }
}
