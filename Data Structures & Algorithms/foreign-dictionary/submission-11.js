class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let letterMap = {};
        let indegree = {};

        for(let w = 0; w < words.length; w++){
            for(let c = 0; c < words[w].length; c++){
                letterMap[words[w].charAt(c)] = new Set();
                indegree[words[w].charAt(c)] = 0;
            }
        }


        for (let i = 0; i < words.length-1; i++) {
            let w1 = words[i];
            let w2 = words[i+1];
            let minLen = Math.min(w1.length, w2.length);
            if(w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) return '';

            for (let c = 0; c < minLen; c++) {
                let char1 = w1.charAt(c);
                let char2 = w2.charAt(c);
                if (w1.charAt(c) === w2.charAt(c)) continue;
                else {
                    if(!letterMap[char1].has(char2)){
                        letterMap[char1].add(char2);
                        indegree[char2] += 1;
                    }
                    break;
                }
            }
        }
        

        let q = new Queue();
        for(let c in indegree){
            if(indegree[c] === 0) {
                q.push(c);
            }
        }

        let ans = [];
        while(!q.isEmpty()){
            let curr = q.pop();
            ans.push(curr);
            for(let neighbor of letterMap[curr]) {
                indegree[neighbor] -= 1;
                if(indegree[neighbor] === 0){
                    q.push(neighbor);
                }
            }
        }

        if(ans.length !== Object.keys(indegree).length){
            return '';
        }

        return ans.join('');
        
    }

    dfs(curr, letterMap, visited, path = new Set(), answer = []){
        if(path.has(curr)) return [];
        if(visited.has(curr)) return answer;
        if(!letterMap[curr]){
            answer.push(curr);
            return answer;
        }
        path.add(curr);
        visited.add(curr);
        let neighbors = letterMap[curr].values();;
        for(let neighbor of neighbors){
            answer = this.dfs(neighbor, letterMap, visited, path, answer)
        }
        path.delete(curr);

        answer.push(curr);

        return answer;
    }
}
