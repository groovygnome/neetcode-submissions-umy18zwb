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
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;

        let leftHeight = 1 + this.maxDepth(root.left);
        let rightHeight = 1 + this.maxDepth(root.right);

        let answer;
        leftHeight >= rightHeight ? answer = leftHeight : answer = rightHeight;
        return answer;
    }
}
