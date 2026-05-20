class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sums = [nums[0]];
        for(let i = 1; i < nums.length; i++){
            this.sums.push(this.sums[i-1] + nums[i]);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if(left === 0) return this.sums[right];
        else{
            return this.sums[right]-this.sums[left-1];
        }
    }
}
