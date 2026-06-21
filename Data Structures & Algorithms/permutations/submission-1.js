class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for(let p = 0; p < nums.length; p++){
            let nextPerms = [];
            for(let i = 0; i < perms.length; i++){
                for(let j = 0; j < perms[i].length+1; j++){
                    let pCopy = perms[i].slice();
                    pCopy.splice(j, 0, nums[p]);
                    nextPerms.push(pCopy);
                }
            }
            perms = nextPerms;
        }
        return perms;
    }
}
