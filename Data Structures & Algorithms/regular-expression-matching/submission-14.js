class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        return this.matchHelper(s, p);
    }

    matchHelper(s, p, currS = 0, currP = 0, visited = {}) {
        if (visited[currS + "#" + currP] != undefined) return visited[currS + "#" + currP];
        if (currS >= s.length && currP >= p.length) return true;
        else if (currP >= p.length) return false;

        let match = currS < s.length && (s[currS] === p[currP] || p[currP] === ".");

        if (currP < p.length - 1 && p[currP + 1] === "*") {
            visited[currS + "#" + currP] =
                true &&
                (this.matchHelper(s, p, currS, currP + 2, visited) ||
                    (match && this.matchHelper(s, p, currS + 1, currP, visited)));
        } else if (match) {
            visited[currS + "#" + currP] =
                true && this.matchHelper(s, p, currS + 1, currP + 1, visited);
        } else {
            visited[currS + "#" + currP] = false;
        }

        return visited[currS + "#" + currP];
    }
}
