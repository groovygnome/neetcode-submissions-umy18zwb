class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length != n-1) return false;
        let tree = {};
        for (let edge of edges) {
            if (tree[edge[0]] === undefined) tree[edge[0]] = [];
            if (tree[edge[1]] === undefined) tree[edge[1]] = [];
            tree[edge[0]].push(edge[1]);
            tree[edge[1]].push(edge[0]);
        }


        let queue = [0];
        let visited = new Set([0]);
        let nodesNum = 0;
        while (queue.length > 0 && nodesNum <= n) {
            let next = queue.shift();
            let curr = tree[next];
            nodesNum++;
            if(curr === undefined) continue;
            for (let node of curr) {
                if(!visited.has(node)){
                    queue.push(node);
                    visited.add(node);
                }
            }
        }

        console.log(nodesNum);

        if(nodesNum === n) return true;
        else return false;
    }
}
