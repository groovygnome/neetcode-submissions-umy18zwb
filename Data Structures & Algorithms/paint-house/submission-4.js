class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    minCost(costs, i = 0, skip = -1, memo = new Map()) {
        if(i >= costs.length){
            return 0;
        }
        if(costs.length === 1){
            return Math.min(...costs[0]);
        }
        if(memo.get(i + '#' + skip) != undefined){
            return memo.get(i + '#' + skip);
        }

        if(skip === -1){
            memo.set(i + '#' + skip, Math.min(
                costs[i][0] + this.minCost(costs, i+1, 0, memo), 
                costs[i][1] + this.minCost(costs, i+1, 1, memo), 
                costs[i][2] + this.minCost(costs, i+1, 2, memo)
            ));
        }

        if(skip === 0){
            memo.set(i + '#' + skip, Math.min(
                costs[i][1] + this.minCost(costs, i+1, 1, memo), 
                costs[i][2] + this.minCost(costs, i+1, 2, memo)
            ));
        }

        if(skip === 1){
            memo.set(i + '#' + skip, Math.min(
                costs[i][0] + this.minCost(costs, i+1, 0, memo), 
                costs[i][2] + this.minCost(costs, i+1, 2, memo)
            ));
        }

        if(skip === 2){
            memo.set(i + '#' + skip, Math.min(
                costs[i][0] + this.minCost(costs, i+1, 0, memo), 
                costs[i][1] + this.minCost(costs, i+1, 1, memo)
            ));
        }

        return memo.get(i + '#' + skip);
    }
}
