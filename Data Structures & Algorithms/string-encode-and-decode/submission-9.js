class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(let i = 0; i < strs.length; i++){
            encodedStr += strs[i] + '🫪';
        }

        console.log(encodedStr);

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];
        let l = 0;
        for(let r = 0; r < str.length; r++){
            if(str.charCodeAt(r) === 55358){
                decodedStrs.push(str.slice(l, r));
                l = r + 2;
            }
        }

        return decodedStrs;
    }
}
