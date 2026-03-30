class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
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

        */

        let dupMap = new Map();
        for(let num of nums){
            if(dupMap.has(num)){
                dupMap[num] += 1;
                return true;
            } else{
                dupMap.set(num, 1);
            }
        }
        return false;

    }
}
