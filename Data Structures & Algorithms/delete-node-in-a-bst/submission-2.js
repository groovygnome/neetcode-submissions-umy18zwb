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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(root === null) return null;
        if(root.val === key){
            if(root.left != null && root.right != null){
                let succ = this.findNext(root).val;
                this.deleteNode(root, succ);
                root.val = succ;
            } else if(root.left === null && root.right != null){
                root = root.right;
            } else if(root.left != null && root.right === null){
                root = root.left;
            } else if(root.left === null && root.right === null){
                root = null;
            }
            return root;
        }

        if(key > root.val){
            root.right = this.deleteNode(root.right, key);
        } else if(key < root.val){
            root.left = this.deleteNode(root.left, key);
        }

        return root;

    }

    findNext(root) {
        let curr = root.right;

        while(curr.left != null){
            curr = curr.left;
        }

        return curr;
    }
}
