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
        let max;
        let min;
        let minLength = Math.min(text1.length-1, text2.length-1);
        let maxLength = Math.max(text1.length-1, text2.length-1);
        if(minLength === text2.length-1){
            max = text1;
            min = text2;
        } else{
            max = text2;
            min = text1;
        }
        let ansArray = new Array(minLength+1).fill(0);
        
        for(let r = maxLength; r >= 0; r--){
            let tempArray = new Array(ansArray.length).fill(0);
            for(let c = minLength; c >= 0; c--){
                if(max.charAt(r) === min.charAt(c)){
                    tempArray[c] = 1;
                    if(r != maxLength && c != minLength) tempArray[c] += ansArray[c+1];
                } else{
                    if(r === maxLength && c === minLength) tempArray[c] = 0;
                    else if(r === maxLength) tempArray[c] = tempArray[c+1];
                    else if(c === minLength) tempArray[c] = ansArray[c];
                    else tempArray[c] = Math.max(tempArray[c+1], ansArray[c]);
                }
            }
            ansArray = tempArray;
            console.log(ansArray);

        }
        return ansArray[0];
    }
}
