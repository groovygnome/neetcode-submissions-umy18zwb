class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length <= 1) return s.length;
        let charCounts = new Map();
        let L = 0;
        let R = 0;
        let length = 0;
        let maxFreq = 0;

        while(R < s.length){
            if(charCounts.get(s.charAt(R)) === undefined){
                charCounts.set(s.charAt(R), 1);
                if (maxFreq === 0) maxFreq = 1;
            } else{
                charCounts.set(s.charAt(R), charCounts.get(s.charAt(R))+1);
                maxFreq = Math.max(maxFreq, charCounts.get(s.charAt(R)));
            }
            R++;
            length++;
            while(length - maxFreq > k){
                charCounts.set(s.charAt(L), charCounts.get(s.charAt(L))-1);
                L++;
                length--;
            }

        }

        return length;
    }
}
