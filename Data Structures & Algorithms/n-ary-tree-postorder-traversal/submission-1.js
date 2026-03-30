/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root, answer = []) {
        if(!root) return [];

        root.children.forEach((child) => this.postorder(child, answer));
        answer.push(root.val);
        return answer;
    }
}
