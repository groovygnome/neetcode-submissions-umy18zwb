class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        let total = 0;
        stones.forEach((stone) => total += stone);
        let half = Math.floor(total/2);
        let workingArray = new Array(half+1).fill(0);   

        for(let i = stones.length; i > 0; i--){
            for(let j = workingArray.length; j > 0; j--){
                if(stones[i-1] <= j){
                    workingArray[j] = Math.max(workingArray[j], workingArray[j - stones[i-1]] + stones[i-1]);
                } else{
                    workingArray[j] = Math.max(workingArray[j], workingArray[j-1]);
                }

            }
        }

        let weight = workingArray[half];

        return total - (2*weight);
    }
}
