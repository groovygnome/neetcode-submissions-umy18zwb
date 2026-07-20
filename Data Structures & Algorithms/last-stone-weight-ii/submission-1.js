class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        let total = 0;
        stones.forEach((stone) => total += stone);
        let half = total/2;
        let weight = this.stoneHelper(stones, half);
        return total - (2*weight);
    }

    stoneHelper(stones, half, curr = 0, currSum = 0, visited = new Map()){
        if(currSum > half) return 0;
        if(curr >= stones.length) return currSum;
        if(visited.get(curr + '#' + currSum) != undefined) return visited.get(curr + '#' + currSum);

        let noSmash = this.stoneHelper(stones, half, curr+1, currSum, visited);

        let smash = this.stoneHelper(stones, half, curr+1, currSum+stones[curr], visited);

        let answer = Math.max(noSmash, smash);
        visited.set(curr + '#' + currSum, answer);

        return answer;
    }
}
