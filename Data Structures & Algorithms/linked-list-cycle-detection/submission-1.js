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
    hasCycle(head, visited = new Set()) {
        if(head){
            if(visited.has(head)) return true;
            else {
                visited.add(head);
                return this.hasCycle(head.next, visited);
            }
        } else{
            return false;
        }
    }
}
