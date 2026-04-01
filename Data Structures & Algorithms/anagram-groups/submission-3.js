class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answers = new Map();
        for(let i = 0; i < strs.length; i++){
            let strArray = strs[i].split('');
            strArray.sort();
            let sortStr = strArray.join('');
            if(answers.get(sortStr)) answers.get(sortStr).push(strs[i]);
            if(!answers.get(sortStr)) answers.set(sortStr, [strs[i]]);
        }
        return answers.values().toArray();
    }
}