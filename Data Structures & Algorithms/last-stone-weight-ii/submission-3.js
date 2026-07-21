class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        let total = 0;
        stones.forEach((stone) => total += stone);
        let half = Math.floor(total/2);
        let workingArray = new Array(stones.length+1).fill().map(() => Array(half+1).fill(0));   

        for(let i = 1; i < workingArray.length; i++){
            for(let j = 1; j < workingArray[0].length; j++){
                if(stones[i-1] <= j){
                    let temp = workingArray[i-1][j - stones[i-1]] + stones[i-1];
                    if(temp > j) temp = 0;
                    workingArray[i][j] = Math.max(workingArray[i-1][j], temp, stones[i-1]);
                } else{
                    workingArray[i][j] = Math.max(workingArray[i-1][j], workingArray[i][j-1]);
                }

            }
        }

        let weight = workingArray[stones.length][half];

        return total - (2*weight);
    }
}
