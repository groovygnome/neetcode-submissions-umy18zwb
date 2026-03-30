class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix.length-1;

        while(start <= end){
            console.log('start :' + start);
            console.log('end :' + end);
            let mid = Math.floor((end - start) / 2 + start);
            console.log('mid :' + mid);
            if(matrix[mid][0] > target){
                end = mid - 1;
            } else if(matrix[mid][matrix[mid].length-1] < target){
                start = mid + 1;
            } else{
                return this.binarySearch(matrix[mid], target);
            }
        }
        return false;

    }

    binarySearch(array, target){
        console.log('hi');
        let start = 0;
        let end = array.length-1;

        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start);
            if(array[mid] < target){
                start = mid+1;
            } else if(array[mid] > target){
                end = mid-1;
            } else if(array[mid] === target){
                return true;
            }
        }
        return false;
    }
}
