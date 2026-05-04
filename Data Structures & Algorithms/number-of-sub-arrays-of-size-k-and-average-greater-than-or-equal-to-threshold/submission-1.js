class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let answer = 0;
        let currTotal = 0;
        let L = 0;
        let thresh = threshold*k;

        for(let i = 0; i < k; i++){
            currTotal += arr[i];
        }

        if(currTotal >= thresh) answer++;

        for(let R = k; R < arr.length; R++){
            currTotal -= arr[L];
            currTotal += arr[R];
            if(currTotal >= thresh){
                answer++;
            }
            L++;
        }

        return answer;
    }
}
