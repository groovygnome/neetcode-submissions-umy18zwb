class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let parents = new Map();
        let rank = new Map();

        for (let i = 1; i < edges.length + 1; i++) {
            parents.set(i, i);
        }

        let ans = [0, 0];

        for (let i = 0; i < edges.length; i++) {
            let p = edges[i][0];
            let c = edges[i][1];

            let pRoot = this.findRoot(p, parents);
            let cRoot = this.findRoot(c, parents);

            if (pRoot != cRoot) {
                parents.set(pRoot, cRoot);
            } else {
                ans = edges[i];
            }
        }

        return ans;
    }

    findRoot(curr, parents) {
        while (curr != parents.get(curr)) {
            parents.set(curr, parents.get(parents.get(curr)));
            curr = parents.get(curr);
        }

        return curr;
    }
}
