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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        return this.lcaHelper(root, p, q);
    }

    lcaHelper(root, p, q){
        console.log(root);
        if(root === null || !root) return;
        if(p.val < root.val && q.val < root.val){
            return this.lcaHelper(root.left, p, q);
        } else if(p.val > root.val && q.val > root.val){
            return this.lcaHelper(root.right, p, q);
        } else if((p.val <= root.val && q.val >= root.val) || (p.val >= root.val && q.val <= root.val)){
            return root;
        }
    }
}
