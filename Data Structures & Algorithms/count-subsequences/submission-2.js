class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let curr = new Array(s.length+1).fill(0);
        let prev = new Array(s.length+1).fill(1);

        curr[0] = 0;


        for(let i = 1; i <= t.length; i++){
            curr[0] = 0;
            for(let j = 1; j <= s.length; j++){
                if(t.charAt(i-1) === s.charAt(j-1)){
                    curr[j] = prev[j-1] + curr[j-1];
                }else{
                    curr[j] = curr[j-1];
                }
            }
            [curr, prev] = [prev, curr]
        }

        return prev[s.length];
    }
}
