class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let ans = [];
        this.helper(1, n, k, ans);
        return ans;
    }

    helper(i, n, k, ans, curr = []){
        if(i > n && curr.length === k){
            ans.push([...curr]);
            return;
        } else if(i > n && curr.length != k){
            return;
        }

        curr.push(i);
        this.helper(i+1, n, k, ans, curr);
        curr.pop();
        this.helper(i+1, n, k, ans, curr);
    }
}
