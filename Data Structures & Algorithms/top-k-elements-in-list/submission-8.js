class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numCount = new Map();
        for(let i = 0; i < nums.length; i++){
            if(!numCount.get(nums[i])) numCount.set(nums[i], 0);
            numCount.set(nums[i], numCount.get(nums[i])+1);
        }

        let countArray = [];
        for(let i = 0; i <= nums.length; i++){
            countArray.push([]);
        }
        numCount.forEach((val, key) => {
            countArray[val].push(key);
        })
        
        let answer = [];

        for(let i = countArray.length-1; i > 0; i--){
            if(countArray[i].length != 0){
                for(let j = 0; j < countArray[i].length; j++){
                    if(answer.length === k) return answer;
                    answer.push(countArray[i][j]);
                }
            }
        }
        return answer;

    }
}
