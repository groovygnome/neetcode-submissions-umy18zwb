class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        return (Number(digits.join(''))+1).toString().split('');
    }
}
