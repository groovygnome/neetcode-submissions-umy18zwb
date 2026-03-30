class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let answer = [];
        candidates = candidates.sort((a,b) => a - b);
        console.log(candidates);
        this.sumHelper(candidates, target, answer);
        return answer;
    }

    sumHelper(candidates, target, answer, curr = [], i = 0){
        if(target === 0) return answer.push(curr);
        if(i === candidates.length || target < 0) return;

        this.sumHelper(candidates, target-candidates[i], answer, [...curr, candidates[i]], i+1);
        while(candidates[i] === candidates[i+1]){
            i++;
        }
        this.sumHelper(candidates, target, answer, [...curr], i+1);
    }
}
