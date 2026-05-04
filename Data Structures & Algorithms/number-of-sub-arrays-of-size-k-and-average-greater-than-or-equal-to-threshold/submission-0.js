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

        for(let i = 0; i < k; i++){
            currTotal += arr[i];
        }

        if(Math.floor(currTotal/k) >= threshold) answer++;

        for(let R = k; R < arr.length; R++){
            currTotal -= arr[L];
            currTotal += arr[R];
            if(Math.floor(currTotal/k) >= threshold){
                answer++;
            }
            L++;
        }

        return answer;
    }
}
