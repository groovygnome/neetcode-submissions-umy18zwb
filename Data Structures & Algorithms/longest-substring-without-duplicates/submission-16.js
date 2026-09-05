class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let ansMap = {};
        let ans = 0;
        while(r < s.length){
            if(ansMap[s[r]] != undefined && ansMap[s[r]] >= l){
                l = ansMap[s[r]]+1;
                if(r < l) r = l;
            }
            ansMap[s[r]] = r;
            r++;
            ans = Math.max(ans, r-l);
        }

        return ans;
    }
}
