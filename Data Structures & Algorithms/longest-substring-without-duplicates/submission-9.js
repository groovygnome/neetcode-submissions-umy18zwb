class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 1) return 1;
        let charSet = new Set();
        let L = 0;
        let R = 0;
        let maxLength = 0;

        while(R < s.length){
            if(charSet.has(s.charAt(R))){
                maxLength = Math.max(charSet.size, maxLength);
                while(L < R){
                    charSet.delete(s.charAt(L));
                    if(s.charAt(L++) === s.charAt(R)){
                        break;
                    }
                }
            }
            charSet.add(s.charAt(R));
            R++;
        }
        maxLength = Math.max(charSet.size, maxLength);
        return maxLength;
    }
}
