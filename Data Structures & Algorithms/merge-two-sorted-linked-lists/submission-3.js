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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1;
        let cur2;
        let answer;
        if(!list1) return list2;
        if(!list2) return list1;
        if(list1.val <= list2.val){
            cur1 = list1;
            cur2 = list2;
            answer = list1;
        } else{
            cur1 = list2;
            cur2 = list1;
            answer = list2;
        }
        let prev = null;
        while(cur1 || cur2){
            let temp1;
            let temp2;
            if(cur1) temp1 = cur1.next;
            if(cur2) temp2 = cur2.next;
            if(!cur2 || ((cur1) && cur1.val <= cur2.val)){
                prev = cur1;
                cur1 = temp1;
            }else if(!cur1 || ((cur2) && cur1.val > cur2.val)){
                prev.next = cur2;
                cur2.next = cur1;
                prev = cur2;
                cur2 = temp2;
            }
        }
        return answer;
    }
}
