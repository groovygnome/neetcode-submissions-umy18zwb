class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answers = [];
        for(let i = 0; i < strs.length; i++){
            let answer = [];
            answer.push(strs[i]);
            for(let j = i + 1; j < strs.length; j++){
                if(this.isAnagram(strs[i], strs[j])){
                    answer.push(strs[j]);
                    strs.splice(j, 1);
                    j--;
                }
            }
            answers.push(answer);
        }
        return answers;

    }

    isAnagram(iStr, jStr){
        if(iStr.length !== jStr.length) return false;
        let iArray = iStr.split('');
        let jArray = jStr.split('');

        for(let i = 0; i < iStr.length; i++){
            let inArray = false;
            for(let j = 0; j < jStr.length; j++){
                if(iArray[i] === jArray[j]){
                    inArray = true;
                    jArray.splice(j, 1);
                    break;
                }
            }
            if(!inArray) return false;
        }
        return true;
    }
}
