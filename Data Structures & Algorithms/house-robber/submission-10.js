class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, alrVisited = new Map()) {
        if(i >= nums.length){
            return 0;
        }
        if(alrVisited.get(i) != undefined){
            return alrVisited.get(i);
        }


        alrVisited.set(i, Math.max(nums[i] + this.rob(nums, i+2, alrVisited), this.rob(nums, i+1, alrVisited)));

        return alrVisited.get(i);
    }
}
