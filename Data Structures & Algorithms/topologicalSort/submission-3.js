class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        let edgesMap = new Map();
        for(let i = 0; i < n+1; i++){
            edgesMap.set(i, []);
        }
        for(let i = 0; i < edges.length; i++){
            let array = edgesMap.get(edges[i][0]);
            array.push(edges[i][1]);
            edgesMap.set(edges[i][0], array);
        }
        let visited = new Set();
        let ans = [];

        for(let i = 0; i < n; i++){
            if(!this.dfs(i, visited, edgesMap, ans)) return [];
        }

        ans.reverse();
        return ans;

    }

    dfs(curr, visited, edgesMap, ans, path = new Set()){
        if(path.has(curr)) return false;
        if(visited.has(curr)) return true;
        visited.add(curr);
        path.add(curr);

        let neighbors = edgesMap.get(curr);
        let valid = true;
        for(let neighbor of neighbors){
            valid = valid && this.dfs(neighbor, visited, edgesMap, ans, new Set(path.values()));
        }
        ans.push(curr);
        return valid;
    }
}
