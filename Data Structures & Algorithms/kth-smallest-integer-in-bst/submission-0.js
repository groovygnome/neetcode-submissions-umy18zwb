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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k, sortedArray = []) {
        if(root === null){
            return null;
        }

        this.kthSmallest(root.left, k, sortedArray);
        sortedArray.push(root.val);
        this.kthSmallest(root.right, k, sortedArray);

        console.log(sortedArray);
        return sortedArray[k-1];
    }
}
