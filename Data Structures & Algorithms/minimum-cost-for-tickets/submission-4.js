class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        return this.ticketHelper(days, costs);
    }

    ticketHelper(days, costs, curr = 0, covered = 0, visited = new Map()){
        if(curr >= days.length){
            return 0;
        }

        if(visited.get(curr + '#' + covered) != undefined) return visited.get(curr + '#' + covered);

        let coveredUntil = days[curr]+1;
        let tempCurr = curr;
        while(days[tempCurr] < coveredUntil){
            tempCurr++;
        }
        let oneDay = costs[0] + this.ticketHelper(days, costs, tempCurr, coveredUntil, visited);

        coveredUntil = days[curr]+7;
        while(days[tempCurr] < coveredUntil){
            tempCurr++;
        }
        let sevenDay = costs[1] + this.ticketHelper(days, costs, tempCurr, coveredUntil, visited);
        

        coveredUntil = days[curr]+30;
        while(days[tempCurr] < coveredUntil){
            tempCurr++;
        }
        let thirtyDay = costs[2] + this.ticketHelper(days, costs, tempCurr, coveredUntil, visited);

        visited.set(curr + '#' + covered, Math.min(oneDay, sevenDay, thirtyDay));

        return Math.min(oneDay, sevenDay, thirtyDay);
    }
}
