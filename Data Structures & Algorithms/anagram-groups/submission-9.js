class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answers = new Map();
        for(let i = 0; i < strs.length; i++){
            let charCount = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++){
                charCount[strs[i].charCodeAt(j) % 26] += 1;
            }
            let sortStr = charCount.join('#');
            if(!answers.get(sortStr)) answers.set(sortStr, []);
            answers.get(sortStr).push(strs[i]);
        }
        return answers.values().toArray();
    }
}