class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupArray = [];
        for(let num of nums){
            if(dupArray.includes(num)){
                return true;
            } else{
                dupArray.push(num);
            }
        }
        console.log(dupArray);
        return false;

    }
}
