/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        if(!root) return [];

        let stack = [];
        let ans = [];
        let curr = root;

        while(curr || stack.length > 0){
            if(curr){
                if(curr.right) stack.push(curr.right);
                ans.push(curr.val);
                curr = curr.left;
            } else{
                curr = stack.pop();
            }
        }

        return ans;
    }
}
