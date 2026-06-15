class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let minCapital = new Heap(true);

        for(let i = 0; i < capital.length; i++){
            minCapital.push(i, capital[i]);
        }

        let maxProfit = new Heap(false);

        for(let i = 0; i < k; i++){
            for(let j = 0; j < profits.length; j++){
                if(minCapital.array.length > 1 && minCapital.array[1][1] <= w){
                    let prospect = minCapital.pop();
                    maxProfit.push(prospect[0], profits[prospect[0]]);
                }
            }
            if(maxProfit.array.length > 1) w += maxProfit.pop()[1];
        }


        return w;
    }
}

class Heap{
    constructor(min){
        this.array = [[-1, 0]];
        this.min = min;
    }

    push(index, val){
        if(this.array.length === 1) return this.array.push([index, val]);

        this.array.push([index, val]);
        let curr = this.array.length-1;
        if(this.min){
            while(Math.floor(curr/2) > 0){
                if(this.array[curr][1] < this.array[Math.floor(curr/2)][1]){
                    let tmp = this.array[curr];
                    this.array[curr] = this.array[Math.floor(curr/2)]
                    this.array[Math.floor(curr/2)] = tmp;
                    curr = Math.floor(curr/2);
                } else break;
            }
        } else if(!this.min){
            while(Math.floor(curr/2) > 0){
                if(this.array[curr][1] > this.array[Math.floor(curr/2)][1]){
                    let tmp = this.array[curr];
                    this.array[curr] = this.array[Math.floor(curr/2)]
                    this.array[Math.floor(curr/2)] = tmp;
                    curr = Math.floor(curr/2);
                } else break;
            }
        }
    }

    pop(){
        if(this.array.length === 2) return this.array.pop();

        let ans = this.array[1];
        this.array[1] = this.array[this.array.length-1];
        this.array.pop();
        let curr = 1;
        if(this.min){
            while(curr*2 < this.array.length){
                let swap = curr*2;
                if(curr*2+1 < this.array.length && this.array[swap][1] > this.array[swap+1][1]){
                    swap = curr*2+1;
                }
                if(this.array[curr][1] > this.array[swap][1]){
                    let temp = this.array[curr];
                    this.array[curr] = this.array[swap];
                    this.array[swap] = temp;
                    curr = swap;
                } else break;
            }
        } else if(!this.min){
            while(curr*2 < this.array.length){
                let swap = curr*2;
                if(curr*2+1 < this.array.length && this.array[swap][1] < this.array[swap+1][1]){
                    swap = curr*2+1;
                }                
                if(this.array[curr][1] < this.array[swap][1]){
                    let temp = this.array[curr];
                    this.array[curr] = this.array[swap];
                    this.array[swap] = temp;
                    curr = swap;
                } else break;
            }
        }

        return ans;
    }
}
