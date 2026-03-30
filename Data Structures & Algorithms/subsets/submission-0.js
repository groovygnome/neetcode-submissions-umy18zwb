class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let answer = [];
        this.subsetsHelper(nums, answer);
        console.log(answer);
        return answer;
    }

    subsetsHelper(nums, answer, curr = [], i = 0){
        if(i >= nums.length) return answer.push(curr);


        //answer.push([...curr]);
        this.subsetsHelper(nums, answer, [...curr], i+1);
        curr.push(nums[i]);
        //answer.push([...curr]);
        this.subsetsHelper(nums, answer, [...curr], i+1);

    }
}
