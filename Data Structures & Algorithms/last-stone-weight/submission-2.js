class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        this.heapify(stones);
        console.log(stones);

        while(stones.length > 2){
            let stone1 = this.removeFromHeap(stones);
            let stone2 = this.removeFromHeap(stones);
            let diff = Math.abs(stone1-stone2);
            if(diff != 0 || stones.length === 1){
                this.addToHeap(stones, diff);
            }
        }
        

        return stones[1];

    }

    heapify(stones){
        stones.push(stones[0]);
        stones[0] = 0;

        let curr = Math.floor(stones.length/2);
        while(curr > 0){
            let i = curr;
            let leftIndex = i*2;
            let rightIndex = i*2+1;
            let maxdex = leftIndex;
            if(rightIndex < stones.length-1 && stones[rightIndex] > stones[leftIndex]) maxdex = rightIndex;
            while(i < stones.length && stones[i] < stones[maxdex]){
                let temp = stones[i];
                stones[i] = stones[maxdex];
                stones[maxdex] = temp;
                i = maxdex;
                leftIndex = i*2;
                rightIndex = i*2+1;
                maxdex = leftIndex;
                if(rightIndex < stones.length && stones[rightIndex] > stones[leftIndex]) maxdex = rightIndex;
            }
            curr--;
        }
        return stones;
    }

    addToHeap(stones, val){
        stones.push(val);
        let i = stones.length-1;
        let parent = Math.floor(i/2);

        while(i > 1 && stones[i] > stones[parent]){
            let temp = stones[i];
            stones[i] = stones[parent];
            stones[parent] = temp;
            i = parent;
            parent = Math.floor(i/2);
        }

        return stones;
    }

    removeFromHeap(stones){
        if(stones.length === 1){
            return -1;
        }
        if(stones.length === 2){
            return stones.pop();
        }

        let ans = stones[1];
        stones[1] = stones[stones.length-1];
        stones.pop();

        let i = 1;
        let leftIndex = i*2;
        let rightIndex = i*2+1;
        let maxdex = leftIndex;
        if(rightIndex < stones.length && stones[rightIndex] > stones[leftIndex]) maxdex = rightIndex;
        while(i < stones.length-1 && stones[i] < stones[maxdex]){
            let temp = stones[i];
            stones[i] = stones[maxdex];
            stones[maxdex] = temp;
            i = maxdex;
            leftIndex = i*2;
            rightIndex = i*2+1;
            maxdex = leftIndex;
            if(rightIndex < stones.length && stones[rightIndex] > stones[leftIndex]) maxdex = rightIndex;
        }

        return ans;

    }
}
