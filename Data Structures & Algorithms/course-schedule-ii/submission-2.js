class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let coursesMap = new Map();
        for(let i = 0; i < numCourses; i++){
            coursesMap.set(i, []);
        }
        for(let i = 0; i < prerequisites.length; i++){
            let array = coursesMap.get(prerequisites[i][0]);
            array.push(prerequisites[i][1]);
            coursesMap.set(prerequisites[i][0], array);
        }

        let answer = [];
        let visited = new Set();
        for(let i = 0; i < numCourses; i++){
            if(!this.dfs(i, coursesMap, visited, answer)) return [];
        }

        return answer;
    }

    dfs(curr, coursesMap, visited, answer, path = new Set()){
        if(path.has(curr)) return false;
        if(visited.has(curr)) return true;
        visited.add(curr);

        path.add(curr);
        let neighbors = coursesMap.get(curr);
        for(let neighbor of neighbors){
            if(!this.dfs(neighbor, coursesMap, visited, answer, path)) return false;
        }
        path.delete(curr);
        answer.push(curr);
        return true;
    }
}
