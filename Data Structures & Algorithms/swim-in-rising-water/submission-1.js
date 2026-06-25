class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        let waterPath = new MinHeap();
        let answer = {};

        waterPath.push(grid[0][0], 0, 0);

        while(waterPath.length() > 0){
            let curr = waterPath.pop();
            let cost = curr[0];
            let r = curr[1];
            let c = curr[2];

            if(answer[r + '#' + c] != undefined && cost >= answer[r + '#' + c]) continue;
            else answer[r + '#' + c] = cost;

            if(r < grid.length-1) waterPath.push(Math.max(grid[r][c], grid[r+1][c], cost), r+1, c);
            if(r > 0) waterPath.push(Math.max(grid[r][c], grid[r-1][c], cost), r-1, c);
            if(c < grid[0].length-1) waterPath.push(Math.max(grid[r][c], grid[r][c+1], cost), r, c+1);
            if(c > 0) waterPath.push(Math.max(grid[r][c], grid[r][c-1], cost), r, c-1);
        }

        return answer[(grid.length-1) + '#' + (grid[0].length-1)];

    }
}

class MinHeap {
    constructor(){
        this.array = [[-1,-1,-1]];
    }

    push(cost, r, c){
        this.array.push([cost, r, c]);
        let curr = this.array.length-1;
        let parent = Math.floor(curr/2);
        while(parent > 0){
            if(this.array[curr][0] < this.array[parent][0]){
                let temp = this.array[curr];
                this.array[curr] = this.array[parent];
                this.array[parent] = temp;
                curr = parent;
                parent = Math.floor(curr/2);
            } else return;
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
                this.array[child][0] > this.array[child+1][0] ? child = child+1 : child = child;
            }

            if(this.array[curr][0] > this.array[child][0]){
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
