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
        let count = [0];
        this.findGood(root, count);
        return count[0];
    }

    findGood(root, count, min = null){
        if(!root) return;

        if(root.val >= min || min === null){
            count[0]++;
            min = root.val;
        }

        this.findGood(root.left, count, min);
        this.findGood(root.right, count, min);
    }
}
