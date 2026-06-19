class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length === 0) return [];
        let letterMap = new Map();
        let ans = [];
        letterMap.set('2', ['a', 'b', 'c']);
        letterMap.set('3', ['d', 'e', 'f']);
        letterMap.set('4', ['g', 'h', 'i']);
        letterMap.set('5', ['j', 'k', 'l']);
        letterMap.set('6', ['m', 'n', 'o']);
        letterMap.set('7', ['p', 'q', 'r', 's']);
        letterMap.set('8', ['t', 'u', 'v']);
        letterMap.set('9', ['w', 'x', 'y', 'z']);
        if(digits.length === 1) return letterMap.get(digits);
        
        let working = [];
        for(let i = 0; i < digits.length; i++){
            working.push(letterMap.get(digits.charAt(i)));
        }

        let arr1 = [];
        let arr2 = [];

        this.helper(0, working, ans);

        return ans;
    }

    helper(i, working, answer, curr = []){
        if(curr.length === working.length && curr[0] != undefined){
            answer.push([...curr].join(''));
            return;
        } else if(i >= working.length && curr.length < working.length){
            return;
        }

        for(let char of working[i]){
            curr.push(char);
            this.helper(i+1, working, answer, curr);
            curr.pop();
        }

    }
}
