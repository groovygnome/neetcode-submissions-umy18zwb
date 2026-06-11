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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.curr = root;
        this.queue = [root];

        while(this.curr.left != null){
            this.curr = this.curr.left;
            this.queue.push(this.curr);
        }
    }

    /**
     * @return {number}
     */
    next() {
        let next = this.queue.pop();
        if(next.right != null){
            let nextNext = next.right;
            while(nextNext != null){
                this.queue.push(nextNext);
                nextNext = nextNext.left;
            }
        }
        return next.val;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.queue.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
