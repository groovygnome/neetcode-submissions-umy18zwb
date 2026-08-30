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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.validateHelper(root);
    }

    validateHelper(curr, min = -Infinity, max = Infinity){
        if(!curr) return true;
        if(curr.val > min && curr.val < max) return true && this.validateHelper(curr.left, min, curr.val) && this.validateHelper(curr.right, curr.val, max);
        else return false;
    }
}
