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
     * @return {number[]}
     */
    inorderTraversal(root, answer = []) {
        if(root === null){
            return [];
        }
        
        this.inorderTraversal(root.left, answer);
        answer.push(root.val)
        this.inorderTraversal(root.right, answer);

        return answer;
    }
}
