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
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null){
            return head;
        }
        let cur = head;
        let stack = [];
        while(cur){
            stack.push(cur.val);
            cur = cur.next;
        }
        head = new ListNode(stack[stack.length-1], null);
        cur = head;
        for(let i = stack.length-2; i > -1; i--){
            cur.next = new ListNode(stack[i], null);
            cur = cur.next;
        }
        return head;

    }
}
