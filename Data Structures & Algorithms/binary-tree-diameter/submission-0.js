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
    diameterOfBinaryTree(root) {
        let max = [0];
        this.findDiameters(root, max);
        return max[0];
        
    }

    findDiameters(root, max){
        if(!root) return 0;

        let leftHeight = 1 + this.findDiameters(root.left,max);
        let rightHeight = 1 + this.findDiameters(root.right,max);

        let height = Math.max(leftHeight, rightHeight);
        console.log(root.val + ' ' + height);
        let answer = leftHeight + rightHeight -2;
        if(answer > max[0]) max[0] = answer;
        return height;
    }
}
