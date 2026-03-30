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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if(!root) return false;

        targetSum -= root.val;

        if(targetSum === 0 && !root.left && !root.right){
            return true;
        } else{
            if(this.hasPathSum(root.left, targetSum)) return true;
            if(this.hasPathSum(root.right, targetSum)) return true;
        }

        targetSum += root.val;
        return false;

    }
}
