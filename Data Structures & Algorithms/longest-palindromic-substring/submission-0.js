class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let ans = "";

        for (let i = 0; i <= s.length; i++) {
            let l = i;
            let r = i;
            while (r < s.length && l > -1 && s[l] === s[r]) {
                if (r - l + 1 > ans.length) {
                    ans = s.slice(l, r+1);
                }
                r++;
                l--;
            }
            l = i;
            r = i + 1;
            while (r < s.length && l > -1 && s[l] === s[r]) {
                if (r - l + 1 > ans.length) {
                    ans = s.slice(l, r + 1);
                }
                r++;
                l--;
            }
        }

        return ans;
    }
}
