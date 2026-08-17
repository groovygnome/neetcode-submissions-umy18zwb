class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        return this.subSeqHelper(s);
    }

    subSeqHelper(s, i = 0, j = s.length-1, visited = new Map()){
        if(i === j) return 1;
        if(i > j) return 0;

        if(visited.get(i + '#' + j) != undefined) return visited.get(i + '#' + j);

        if(s[i] === s[j]) visited.set(i + '#' + j, 2 + this.subSeqHelper(s, i+1, j-1, visited));
        else visited.set(i + '#' + j, Math.max(this.subSeqHelper(s, i+1, j, visited), this.subSeqHelper(s, i, j-1, visited)));

        return visited.get(i + '#' + j);
    }

    palHelper(s) {
        let length = 0;

        for (let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;
            while (l > -1 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > length) {
                    length = r - l + 1;
                }
                l--;
                r++;
            }
            l = i;
            r = i + 1;
            while (l > -1 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > length) {
                    length = r - l + 1;
                }
                l--;
                r++;
            }
        }

        return length;
    }
}
