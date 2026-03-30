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
    inorderTraversal(root) {
        let route = [];
        let hasRight = [];
        let answer = [];

        let curr = root;

        while(curr != null){
            if(curr.right != null) hasRight.push(curr);
            if(curr.left != null){
                if(route[route.length-1] != curr) route.push(curr);
                curr = curr.left;
            } else if(curr.left === null){
                if(route[route.length-1] === curr) route.pop();
                while(hasRight.length > 0 && curr != hasRight[hasRight.length-1]){
                    answer.push(curr.val);
                    curr = route.pop();
                }
                answer.push(curr.val);
                hasRight.pop();
                curr = curr.right;
                route.push(curr);
            }
        }
        
        while(route.length > 0){
            let temp = route.pop();
            if(temp != null) answer.push(temp.val);
        }
        return answer;
    }
}
