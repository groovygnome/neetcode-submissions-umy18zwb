class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let workingMatrix = new Array(profit.length).fill().map(() => Array(capacity).fill(-1));
        for(let p = 0; p < profit.length; p++){
            workingMatrix[p][0] = 0;
        }

        for(let c = 0; c <= capacity; c++){
            if(weight[0] > c){
                workingMatrix[0][c] = 0;
            } else{
                workingMatrix[0][c] = profit[0];
            }
        }

        for(let p = 1; p < profit.length; p++){
            for(let c = 1; c <= capacity; c++){
                if(weight[p] > c){
                    workingMatrix[p][c] = workingMatrix[p-1][c];
                } else{
                    let prof = Math.max(profit[p] + workingMatrix[p-1][c-weight[p]], workingMatrix[p-1][c]);
                    workingMatrix[p][c] = prof;
                }
            }
        }


        return workingMatrix[profit.length-1][capacity];
    }
}
