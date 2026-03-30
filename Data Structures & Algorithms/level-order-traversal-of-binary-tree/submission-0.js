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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [];
        let answer = [];
        if(root != null){
            queue.push(root);
        }

        while(queue.length != 0){
            let levelLength = queue.length;
            let valQueue = [];
            while(levelLength > 0){
                let curr = queue.shift();
                valQueue.push(curr.val);
                levelLength--;
                if(curr.left != null){
                    queue.push(curr.left);
                }
                if(curr.right != null){
                    queue.push(curr.right);
                }
            }
            answer.push(valQueue);
        }

        return answer;


    }
}
