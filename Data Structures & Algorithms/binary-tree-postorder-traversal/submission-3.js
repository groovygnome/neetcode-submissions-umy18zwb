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
        let stack = [[root, false]];

        while(stack.length > 0){
            let curr = stack.pop();
            if(curr[1]) answer.push(curr[0].val);
            else{
                stack.push([curr[0], true]);
                if(curr[0].right) {
                    stack.push([curr[0].right, false]);
                }
                if(curr[0].left){
                    stack.push([curr[0].left, false]);
                }
            }
        }

        return answer;

    }
}
