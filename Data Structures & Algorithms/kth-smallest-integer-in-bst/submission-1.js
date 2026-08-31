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
    kthSmallest(root, k) {
        let minHeap = new MinHeap();
        this.smallestHelper(root, minHeap);

        let ans;
        for (let i = 0; i < k; i++) {
            ans = minHeap.pop();
        }
        return ans;
    }

    smallestHelper(curr, minHeap) {
        if (!curr) return;
        minHeap.push(curr.val);
        this.smallestHelper(curr.left, minHeap);
        this.smallestHelper(curr.right, minHeap);
    }
}

class MinHeap {
    constructor() {
        this.heap = [-1];
    }

    push(val) {
        this.heap.push(val);
        let curr = this.heap.length - 1;
        let p = Math.floor(curr / 2);
        while (p > 0) {
            if (this.heap[curr] < this.heap[p]) {
                [this.heap[curr], this.heap[p]] = [this.heap[p], this.heap[curr]];
                curr = p;
                p = Math.floor(curr / 2);
            } else break;
        }
    }

    pop() {
        let ans = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];
        let curr = 1;
        let l = curr * 2;
        let r = l + 1;
        while (l < this.heap.length) {
            let swap = l;
            if (r < this.heap.length && this.heap[r] < this.heap[l]) swap = r;
            if (this.heap[swap] < this.heap[curr]) {
                [this.heap[curr], this.heap[swap]] = [this.heap[swap], this.heap[curr]];
                curr = swap;
                l = swap * 2;
                r = l + 1;
            } else break;
        }

        return ans;
    }
}
