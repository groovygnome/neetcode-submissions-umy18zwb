class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        return this.permuteHelper(nums);
    }

    permuteHelper(nums, i = 0){
        if(i === nums.length) {
            return [[]]
        }
        
        let curr = [];
        let perms = this.permuteHelper(nums, i+1);
        for(let p = 0; p < perms.length; p++){
            for(let j = 0; j < perms[p].length+1; j++){
                let pCopy = perms[p].slice();
                pCopy.splice(j, 0, nums[i]);
                curr.push(pCopy);
            }
        }
        return curr;
    }
}
