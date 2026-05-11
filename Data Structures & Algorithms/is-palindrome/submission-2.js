class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0;
        let R = s.length-1;
        s = s.toLowerCase();
48-57
        while(L < R){
            while(s.charCodeAt(L) < 48 || 
            (s.charCodeAt(L) < 97 && s.charCodeAt(L) > 57) || 
            s.charCodeAt(L) > 122) L++;
            while(s.charCodeAt(R) < 48 || 
            (s.charCodeAt(R) < 97 && s.charCodeAt(R) > 57) || 
            s.charCodeAt(R) > 122) R--;
            if(s.charAt(L) != s.charAt(R)){
                return false;
            }
            L++;
            R--;
        }

        return true;
    }
}
