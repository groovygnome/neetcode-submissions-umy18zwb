class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     */
    minCost(costs) {
        let redMin = costs[0][0];
        let blueMin = costs[0][1];
        let greenMin = costs[0][2];

        for(let i = 1; i < costs.length; i++){
            let tempRed = costs[i][0] + Math.min(blueMin, greenMin);
            let tempBlue = costs[i][1] + Math.min(redMin, greenMin);
            let tempGreen = costs[i][2] + Math.min(redMin, blueMin);

            redMin = tempRed;
            blueMin = tempBlue;
            greenMin = tempGreen;
        }

        return Math.min(redMin, blueMin, greenMin);
    }
}
