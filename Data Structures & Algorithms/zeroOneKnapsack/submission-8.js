class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let workingMatrix = new Array(profit.length).fill(-1);

        for(let c = 0; c <= capacity; c++){
            if(weight[0] > c){
                workingMatrix[c] = 0;
            } else{
                workingMatrix[c] = profit[0];
            }
        }

        for(let p = 1; p < profit.length; p++){
            for(let c = capacity; c > 0; c--){
                if(weight[p] <= c){
                    workingMatrix[c] = Math.max(profit[p] + workingMatrix[c-weight[p]], workingMatrix[c]);
                }
            }
        }

        return workingMatrix[capacity];
    }
}
