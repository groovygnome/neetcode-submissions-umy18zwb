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
    postorderTraversal(root) {
        if(!root) return [];

        let answer = [];
        let stack = [root];
        let visited = [false];

        while(stack.length > 0){
            let curr = stack.pop();
            let visit = visited.pop();
            if(visit) answer.push(curr.val);
            else{
                stack.push(curr);
                visited.push(true);
                if(curr.right) {
                    stack.push(curr.right);
                    visited.push(false);
                }
                if(curr.left){
                    stack.push(curr.left);
                    visited.push(false);
                }
            }
        }

        return answer;

    }
}
