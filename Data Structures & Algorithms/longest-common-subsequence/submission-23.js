class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if(text1.length < text2.length) [text1, text2] = [text2, text1];
        let curr = new Array(text2.length+1).fill(0);
        let prev = new Array(text2.length+1).fill(0);


        for(let i = 1; i <= text1.length; i++){
            for(let j = 1; j <= text2.length; j++){
                if(text1.charAt(i-1) === text2.charAt(j-1)){
                    curr[j] = 1 + prev[j-1];
                } else{
                    curr[j] = Math.max(prev[j], curr[j-1]);
                }
            }
            let temp = curr;
            curr = prev;
            prev = temp;
        }

        return prev[text2.length];


    }
}
