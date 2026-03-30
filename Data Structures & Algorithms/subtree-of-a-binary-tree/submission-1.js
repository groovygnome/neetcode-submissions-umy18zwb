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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let answer = false;
        if(!root) return false;
        if(root.val === subRoot.val) answer = this.isEqual(root, subRoot);

        if(!answer){
        let left = this.isSubtree(root.left, subRoot);
        let right = this.isSubtree(root.right, subRoot);

        return left || right;
        } else{
            return answer;
        }
    }

    isEqual(p, q){
        if(!p && q || p && !q) return false;
        if(!p && !q) return true;
        
        let answer = p.val === q.val;

        let leftEq = this.isEqual(p.left, q.left);
        let rightEq = this.isEqual(p.right, q.right);

        return answer && leftEq && rightEq;
    }
}
