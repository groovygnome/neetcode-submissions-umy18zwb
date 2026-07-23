class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        return this.profitHelper(profit, weight, capacity);
    }

    profitHelper(profit, weight, cap, curr = 0, visited = new Map()){
        if(curr >= profit.length){
            return 0;
        }
        if(visited.get(curr + '#' + cap) != undefined) return visited.get(curr + '#' + cap);

        let p1 = this.profitHelper(profit, weight, cap, curr+1, visited);
        
        let p2 = 0;
        let tempCap = cap-weight[curr];
        if(tempCap >= 0){
            p2 = profit[curr] + this.profitHelper(profit, weight, tempCap, curr, visited); 
        }

        visited.set(curr + '#' + cap, Math.max(p1,p2));

        return Math.max(p1, p2);

    }
}
