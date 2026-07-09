class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        return this.profitHelper(0, profit, weight, capacity);
    }

    profitHelper(curr = 0, profit, weight, capacity, visited = new Map()){
        if(curr > profit.length-1){
            return 0;
        }
        if(visited.get(curr + '#' + capacity) != undefined) return visited.get(curr + '#' + capacity);

        let ans = this.profitHelper(curr+1, profit, weight, capacity, visited);

        let p = profit[curr];
        let w = weight[curr];
        if(capacity - w >= 0){
            let include = p + this.profitHelper(curr+1, profit, weight, capacity-w, visited);
            ans = Math.max(include, ans);
        }

        visited.set(curr + '#' + capacity, ans);

        return ans;
    }
}
