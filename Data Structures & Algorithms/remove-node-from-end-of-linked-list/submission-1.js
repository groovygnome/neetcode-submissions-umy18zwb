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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let i = 0;
        let curr = head;
        while(curr){
            curr = curr.next;
            i++;
        }
        curr = head;
        i -= n;
        if(i === 0){
            head = head.next;
            return head;
        }
        i--;
        while(i > 0 && curr.next){
            curr = curr.next;
            i--;
        }
        curr.next = curr.next.next;
        return head;
    }
}
