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
     * @return {number}
     */
    pairSum(head) {
        let slow = head;
        let fast = head;
        let prev = null;

        while(fast && fast.next){
            fast = fast.next.next;
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        let ans = 0;
        while(slow){
            ans = Math.max(ans, slow.val + prev.val);
            slow = slow.next;
            prev = prev.next;
        }

        return ans;
    }
}
