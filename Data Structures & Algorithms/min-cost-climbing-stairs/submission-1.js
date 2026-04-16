class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost, i = -1, memo = new Map()) {
        if(cost.length === 2){
            return Math.min(cost[0], cost[1]);
        }
        if(cost.length - i <= 2){
            return cost[i];
        }
        if(memo.get(i) != undefined){
            return memo.get(i);
        }

        let stepCost = cost[i];
        if(i === -1) stepCost = 0;

        memo.set(i, stepCost + Math.min(this.minCostClimbingStairs(cost, i+1, memo), this.minCostClimbingStairs(cost, i+2, memo)));
        
        return memo.get(i);
    }
}
