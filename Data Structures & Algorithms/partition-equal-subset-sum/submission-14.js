class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0;
        nums.forEach((num) => total += num);
        if(total % 2 != 0) return false;
        else total = total/2;

        let dp = new Array(nums.length+1).fill().map(() => Array(total+1).fill(false));

        dp[0][0] = true;

        for(let i = 1; i < dp.length; i++){
            for(let j = 1; j < dp[0].length; j++){
                if(nums[i-1] === j){
                    dp[i][j] = true;
                } else if(nums[i-1] < j){
                    dp[i][j] = dp[i-1][j-nums[i-1]] || dp[i-1][j];
                }
            }
        }

        return dp[nums.length][total];
    }

}
