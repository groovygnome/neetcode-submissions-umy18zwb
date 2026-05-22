class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preProduct = [nums[0]]
        let postProduct = Array(nums.length).fill(0);
        postProduct[nums.length-1] = nums[nums.length-1];
        for(let i = 1; i < nums.length; i++){
            let newProd = preProduct[i-1] * nums[i];
            preProduct.push(newProd);
        }

        for(let i = nums.length-2; i > -1; i--){
            postProduct[i] = postProduct[i+1] * nums[i];
        }

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && i < nums.length-1) nums[i] = preProduct[i-1] * postProduct[i+1];
            else if(i === 0) nums[i] = postProduct[i+1];
            else if(i === nums.length-1) nums[i] = preProduct[i-1];
        }

        return nums;
    }
}
