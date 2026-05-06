class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = 100001;
        let L = 0;
        let R = 0;
        let runningTotal = 0;
        let size = 0;

        while(R < nums.length){
            runningTotal += nums[R];
            size++;
            if(runningTotal >= target){
                while(runningTotal - nums[L] >= target){
                    runningTotal -= nums[L];
                    size--;
                    L++;
                }
                minLength = Math.min(size, minLength);
            }
            R++;
        }
        if(minLength === 100001) return 0;
        else return minLength;
    }
}
