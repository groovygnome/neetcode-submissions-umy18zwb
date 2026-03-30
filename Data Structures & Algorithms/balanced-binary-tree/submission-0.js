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
    isBalanced(root) {
        if(root === null){
            return true;
        }

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);

        let balanced = Math.abs(leftHeight - rightHeight) <= 1;

        let childrenBalanced = balanced && this.isBalanced(root.left) && this.isBalanced(root.right);

        return childrenBalanced;
    }

    height(root, height = 1){
        if(root === null){
            return 0;
        }
        if(root.left === null && root.right === null){
            return 1;
        }

        let leftHeight = height + this.height(root.left, height);
        let rightHeight = height + this.height(root.right, height);

        if (leftHeight > rightHeight) height = leftHeight;
        if (rightHeight >= leftHeight) height = rightHeight;

        return height;
        
    }
}
