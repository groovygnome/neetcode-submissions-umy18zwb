class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let answers = new Set();
        let answer = 0;
        let curr = n;
        while(!answers.has(curr)){
            answers.add(curr);
            curr = curr.toString().split('');
            for(let i = 0; i < curr.length; i++){
                answer += Number(curr[i]**2);
            }
            if(answer === 1) return true;
            curr = answer;
            console.log(curr);
            answer = 0;
        }

        return false;
    }
}
