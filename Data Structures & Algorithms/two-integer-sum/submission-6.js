class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if((nums[i] + nums[j]) === target) return [i,j];
            }
        }
        return false;
        */

        let ansMap = {};
        nums.forEach((num, index) => {
            ansMap[num] = index;
        });

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];

            if(ansMap[diff] !== undefined && ansMap[diff] !== i){
                return [i, ansMap[diff]];
            }
            
        }
        return [];

        

    }
}
