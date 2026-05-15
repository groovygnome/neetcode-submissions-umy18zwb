class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 1 && strs[0] === '') return '😒'
        else if(strs.length > 0) return strs.join('😂');
        else return '';
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '😒') return [''];
        else if(str.length > 0) return str.split('😂');
        else return [];
    }
}
