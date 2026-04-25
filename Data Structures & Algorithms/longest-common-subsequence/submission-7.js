class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if(text1.length === 0 || text2.length === 0){
            return 0;
        }
        let ansArray = new Array(text1.length).fill().map(() => new Array(text2.length).fill(0));
        
        for(let r = ansArray.length-1; r >= 0; r--){
            for(let c = ansArray[0].length-1; c >= 0; c--){
                if(text1.charAt(r) === text2.charAt(c)){
                    ansArray[r][c] = 1;
                    if(r != ansArray.length-1 && c != ansArray[0].length-1) ansArray[r][c] += ansArray[r+1][c+1];
                } else{
                    if(r === ansArray.length-1 && c === ansArray[0].length-1) ansArray[r][c] = 0;
                    else if(r === ansArray.length-1) ansArray[r][c] = ansArray[r][c+1];
                    else if(c === ansArray[0].length-1) ansArray[r][c] = ansArray[r+1][c];
                    else ansArray[r][c] = Math.max(ansArray[r][c+1], ansArray[r+1][c]);
                }
            }

        }
        return ansArray[0][0];
    }
}
