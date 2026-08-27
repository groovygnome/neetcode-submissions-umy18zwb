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
        if(!root) return [];

        let queue = [];
        let ans = [];
        queue.push([root, 0]);
        while(queue.length > 0){
            let curr = queue.shift();
            let node = curr[0];
            let level = curr[1];
            if(ans.length < level+1) ans.push([]);
            ans[level].push(node.val);
            if(node.left) queue.push([node.left, level+1]);
            if(node.right) queue.push([node.right, level+1]);
        }

        return ans;
    }
}
