class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let parents = new Map();
        let ranks = new Map();

        for(let i = 0; i < n; i++){
            parents.set(i,i);
            ranks.set(i, 1);
        }

        for(let i = 0; i < edges.length; i++){
            let a = edges[i][0];
            let b = edges[i][1];

            let aRoot = this.findRoot(a, parents);
            let bRoot = this.findRoot(b, parents);

            if(ranks.get(aRoot) < ranks.get(bRoot)){
                parents.set(aRoot, bRoot);
            } else if(ranks.get(aRoot) > ranks.get(bRoot)){
                parents.set(bRoot,aRoot);
            } else if(ranks.get(aRoot) === ranks.get(bRoot)){
                    parents.set(aRoot,bRoot);
                    ranks.set(aRoot, ranks.get(aRoot)+1);
            }
        }

        let answer = new Set();

        for(let i = 0; i < n; i++){
            answer.add(this.findRoot(i, parents));
        }

        return answer.size;

    }

    findRoot(curr, parents){
        while(curr != parents.get(curr)){
            parents.set(curr, parents.get(parents.get(curr)));
            curr = parents.get(curr);
        }

        return curr;
    }
}
