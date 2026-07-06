class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        let prereqMap = new Map();
        for(let i = 0; i < numCourses; i++){
            prereqMap.set(i, []);
        }
        for(let i = 0; i < prerequisites.length; i++){
            let array = prereqMap.get(prerequisites[i][1]);
            array.push(prerequisites[i][0]);
            prereqMap.set(prerequisites[i][1], array);
        }

        let answer = [];
        for(let i = 0; i < queries.length; i++){
            answer.push(this.dfs(queries[i][1], queries[i][0], prereqMap));
        }

        return answer;

    }

    dfs(curr, dest, prereqMap, path = new Set(), answer = false){
        if(path.has(curr)) return answer;
        if(curr === dest) return true;

        path.add(curr);

        let neighbors = prereqMap.get(curr);
        for(let neighbor of neighbors){
            answer = answer || this.dfs(neighbor, dest, prereqMap, path, answer);
        }

        return answer;
    }
}
