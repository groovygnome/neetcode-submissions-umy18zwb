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
        if(!root) return null;
        if(root.val === p && root.val === q) return root;

        let isCurr = (root.val === p.val) || (root.val === q.val);
        
        let inLeft = this.lowestCommonAncestor(root.left, p, q);
        let inRight = this.lowestCommonAncestor(root.right, p, q);

        console.log(root.val + ' ' + isCurr + ' ' + inLeft + ' ' + inRight);

        if(typeof inLeft === 'object'  && inLeft != null) return inLeft;
        if(typeof inRight === 'object' && inRight != null) return inRight;
        
        if(isCurr && inLeft || isCurr && inRight || inRight && inLeft){
            return root;
        }

        return isCurr || inLeft || inRight;
        

    }
}
