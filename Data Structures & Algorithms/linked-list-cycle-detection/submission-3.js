/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head, visited = new Map()) {
        if(head){
            if(visited.get(head) != undefined) return true;
            else {
                visited.set(head, head.val);
                return this.hasCycle(head.next, visited);
            }
        } else{
            return false;
        }
    }
}
