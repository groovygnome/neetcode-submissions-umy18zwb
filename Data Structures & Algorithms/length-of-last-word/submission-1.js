class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let strArray = s.split(' ');
        strArray = strArray.filter((word) => word.length != 0);
        return strArray[strArray.length-1].length;
    }
}
