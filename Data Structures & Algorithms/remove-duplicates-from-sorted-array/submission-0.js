class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let uniqueNums = [];
        for(let i = 0; i < nums.length; i++){
            let found = false;
            for(let j = i+1; j < nums.length; j++){
                if(nums[i] === nums[j]){
                    nums.splice(j,1);
                    j--;
                }
            }
        }
        console.log(nums);
        return nums.length;

    }
}
