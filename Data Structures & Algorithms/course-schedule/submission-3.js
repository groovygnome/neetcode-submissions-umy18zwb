class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let courseArr = [];

        for(let i = 0; i < numCourses; i++){
            courseArr.push([]);
        }

        for(let i = 0; i < prerequisites.length; i++){
            courseArr[prerequisites[i][0]].push(prerequisites[i][1]);
        }

        let answer = true;

        for(let i = 0; i < courseArr.length; i++){
            let currAnswer = this.dfs(courseArr, i);
            answer = answer && currAnswer;
        }

        return answer;
        
    }

    dfs(courseArr, curr, visited = new Set()){
        let currPrereqs = courseArr[curr];
        if(visited.has(curr)) return false;
        if(courseArr[curr] === true || (!visited.has(curr) && currPrereqs.length === 0)){
            courseArr[curr] = true;
            return true;
        }

        let answer = true;

        visited.add(curr);

        for(let prereq of currPrereqs){
            answer = answer && this.dfs(courseArr, prereq, visited);
        }

        visited.delete(curr);

        return answer;
    }
}
