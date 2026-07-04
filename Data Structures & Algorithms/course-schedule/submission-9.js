class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let prereqMap = new Map();
        for(let i = 0; i < numCourses+1; i++){
            prereqMap.set(i, []);
        }
        for(let i = 0; i < prerequisites.length; i++){
            let array = prereqMap.get(prerequisites[i][0]);
            array.push(prerequisites[i][1]);
            prereqMap.set(prerequisites[i][0], array);
        }
        
        let visited = new Set();
        for(let i = 0; i < numCourses+1; i++){
            if(!this.dfs(i, prereqMap, visited)) return false;
        }

        return true;
    }

    dfs(curr, prereqMap, visited, path = new Set()){
        if(path.has(curr)) return false;
        if(visited.has(curr)) return true;
        visited.add(curr);
        path.add(curr);

        let neighbors = prereqMap.get(curr);
        for(let neighbor of neighbors){
            if(!this.dfs(neighbor, prereqMap, visited, path)) return false;
        }

        path.delete(curr);

        return true;
    }
}
