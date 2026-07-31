class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        return this.lcsHelper(text1, text2);   
    }

    lcsHelper(text1, text2, i1 = 0, i2 = 0, visited = new Map()){
        if(i1 >= text1.length || i2 >= text2.length) return 0;

        if(visited.get(i1 + '#' + i2) != undefined) return visited.get(i1 + '#' + i2);

        let lcs;
        if(text1.charAt(i1) === text2.charAt(i2)) lcs = 1 + this.lcsHelper(text1, text2, i1+1, i2+1, visited);
        else lcs = Math.max(this.lcsHelper(text1, text2, i1+1, i2, visited), this.lcsHelper(text1, text2, i1, i2+1, visited));

        visited.set(i1 + '#' + i2, lcs)

        return lcs;
    }
}
