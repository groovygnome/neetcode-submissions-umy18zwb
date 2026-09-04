class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let length = (matrix.length * matrix[0].length)-1;
        let start = 0;
        let end = length;
        let mid = Math.floor((start+end)/2);
        while(start <= end){
            let startVal = matrix[Math.floor(start/matrix[0].length)][start%matrix[0].length]
            let endVal = matrix[Math.floor(end/matrix[0].length)][end%matrix[0].length]
            let midVal = matrix[Math.floor(mid/matrix[0].length)][mid%matrix[0].length]
            if(target === startVal || target === midVal || target === endVal) return true;
            else if(start === end) return false;
            else if(target < midVal) end = mid;
            else if(target > midVal) start = mid+1;
            else return false;
            mid = Math.floor((start+end)/2);
        }

        return false;

    }
}
