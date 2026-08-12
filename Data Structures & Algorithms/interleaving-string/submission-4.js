class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;
        let curr = new Array(s2.length + 1);
        let prev = new Array(s2.length + 1);

        prev[0] = true;

        for (let j = 1; j < s2.length + 1; j++) {
            prev[j] = prev[j - 1] && s3.charAt(j - 1) === s2.charAt(j - 1);
        }

        for (let i = 1; i < s1.length + 1; i++) {
            curr[0] = prev[0] && s3.charAt(i-1) === s1.charAt(i-1); 
            for (let j = 1; j < s2.length + 1; j++) {
                let ans1 = prev[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
                let ans2 = curr[j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
                curr[j] = ans1 || ans2;
            }
            [curr, prev] = [prev, curr];
        }
        return prev[s2.length];
    }
}
