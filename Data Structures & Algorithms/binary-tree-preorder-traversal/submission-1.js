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
        if (!root) return [];
        let working = [];
        while (root || working.length != 0) {
            if(root){
                ans.push(root.val);
                if(root.right) working.push(root.right);
                root = root.left;
            } else if(!root){
                root = working.pop();
            }
        }

        return ans;
    }
}
