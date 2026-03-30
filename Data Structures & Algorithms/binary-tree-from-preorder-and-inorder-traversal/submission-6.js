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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder, start = 0, end = inorder.length-1) {
        if(preorder.length === 0 || inorder.length === 0){
            return null;
        }
        let root = new TreeNode(preorder[start]);
        let mid = inorder.indexOf(preorder[start]);

        root.left = this.buildTree(preorder.slice(1, mid+1), inorder.slice(0,mid));
        root.right = this.buildTree(preorder.slice(mid+1, end+1), inorder.slice(mid+1, end+1));

        return root;
        

    }
}
