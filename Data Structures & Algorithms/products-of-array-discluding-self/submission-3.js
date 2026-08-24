class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProd = nums.slice();
        let postfixProd = nums.slice();
        for(let i = 1; i < nums.length; i++){
            prefixProd[i] *= prefixProd[i-1];
        }

        for(let i = nums.length-2; i > -1; i--){
            postfixProd[i] *= postfixProd[i+1];
        }

        let ans = nums.slice();
        ans[0] = postfixProd[1];
        ans[ans.length-1] = prefixProd[prefixProd.length-2];
        for(let i = 1; i < ans.length-1; i++){
            ans[i] = prefixProd[i-1] * postfixProd[i+1];
        }

        return ans;
    }
}
