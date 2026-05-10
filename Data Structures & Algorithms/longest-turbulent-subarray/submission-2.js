class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if(arr.length <= 1) return arr.length;
        let L = 0;
        let R = 1;
        let lessThan = null;
        let maxLength = 0;


        while(R < arr.length){
            if(lessThan === null){
                if(arr[R-1] < arr[R]) lessThan = true;
                else if(arr[R-1] > arr[R]) lessThan = false;
                else{
                    lessThan = null;
                    L = R;
                }
                R++;
            } else if(lessThan === true){
                if(arr[R-1] > arr[R]){ 
                    lessThan = false;
                    R++;
                } else{
                    lessThan = null;
                    L = R-1;
                }
            } else if(lessThan === false){
                if(arr[R-1] < arr[R]){
                    lessThan = true;
                    R++;
                } else{
                    lessThan = null;
                    L = R-1;
                }
            }
            maxLength = Math.max(maxLength, R - L);

        }
        return maxLength;
    }
}
