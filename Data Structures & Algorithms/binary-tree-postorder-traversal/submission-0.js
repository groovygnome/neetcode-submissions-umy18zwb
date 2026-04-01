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
    postorderTraversal(root, answer = []) {
        if(!root) return [];

        this.postorderTraversal(root.left, answer);
        this.postorderTraversal(root.right, answer);
        answer.push(root.val);

        return answer;
    }
}
