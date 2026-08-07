class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        return this.distinctHelper(s, t);
    }

    distinctHelper(s, t, sCurr = 0, tCurr = 0, visited = new Map()) {
        if (sCurr > s.length || tCurr > t.length) return 0;
        else if (tCurr === t.length) return 1;

        if(visited.get(sCurr + '#' + tCurr) != undefined) return visited.get(sCurr + '#' + tCurr)

        if (s.charAt(sCurr) === t.charAt(tCurr)) {
            visited.set(sCurr + '#' + tCurr, this.distinctHelper(s, t, sCurr + 1, tCurr + 1, visited) + this.distinctHelper(s, t, sCurr + 1, tCurr, visited));
        } else  visited.set(sCurr + '#' + tCurr, this.distinctHelper(s, t, sCurr + 1, tCurr, visited));

        return visited.get(sCurr + '#' + tCurr);
    }
}
