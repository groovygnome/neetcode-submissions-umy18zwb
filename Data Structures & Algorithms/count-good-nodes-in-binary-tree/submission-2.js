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
    goodNodes(root) {
        return this.goodHelper(root);
    }

    goodHelper(curr, max = curr.val){
        if(!curr) return 0;
        if(curr.val >= max) return 1 + this.goodHelper(curr.left, curr.val) + this.goodHelper(curr.right, curr.val);
        else return this.goodHelper(curr.left, max) + this.goodHelper(curr.right, max);
    }
}
