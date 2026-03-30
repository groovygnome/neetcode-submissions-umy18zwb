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
    preorderTraversal(root, ans = []) {
        if(!root) return [];


        ans.push(root.val);
        this.preorderTraversal(root.left, ans);
        this.preorderTraversal(root.right, ans);

        return ans;

    }
}
