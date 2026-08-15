class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        let counted = new Set();

        for(let i = 0; i < s.length; i++){

            let l = i;
            let r = i;
            while(l > -1 && r < s.length && s[l] === s[r]){
                if(s[l] === s[r]){
                    count++;
                }
                l--;
                r++;
            }
            l = i;
            r = i+1;
            while(l > -1 && r < s.length && s[l] === s[r]){
                if(s[l] === s[r]){
                    count++;
                }
                l--;
                r++;
            }
        }
        return count;
    }
}
