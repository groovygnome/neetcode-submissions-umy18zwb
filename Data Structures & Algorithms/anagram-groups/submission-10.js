class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ansMap = {};
        for(let i = 0; i < strs.length; i++){
            let charArray = new Array(26).fill(0);
            for(let c = 0; c < strs[i].length; c++){
                charArray[strs[i].charCodeAt(c)-97] += 1;
            }
            if(ansMap[charArray] === undefined) ansMap[charArray] = [];
            ansMap[charArray].push(strs[i]);
        }

        return Object.values(ansMap);
    }
}