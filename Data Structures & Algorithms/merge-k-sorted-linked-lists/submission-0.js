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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let mergedList = [];
        for(let list of lists){
            while(list != null){
                mergedList.push(list.val);
                list = list.next;
            }
        }

        this.mergeSort(mergedList);
        console.log(mergedList.length === 0);
        
        if(mergedList.length === 0){
            return new ListNode([], null);
        }

        let newList = new ListNode(mergedList[0], null);
        let curr = newList;
        for(let i = 1; i < mergedList.length; i++){
            console.log(mergedList[i]);
            let newNode = new ListNode(mergedList[i], null);
            curr.next = newNode;
            curr = curr.next;
        }
        console.log(newList);
        return newList;
    }

    mergeSort(list, start = 0, end = list.length){
        if((end-start)+1 <= 1){
            return list;
        }

        let middle = Math.floor((start + end) / 2);
        this.mergeSort(list, start, middle);
        this.mergeSort(list, middle+1, end);
        this.merge(list, start, middle, end);

        return list;
    }

    merge(list, start, middle, end){
        let leftList = list.slice(start, middle+1);
        let rightList = list.slice(middle+1, end+1);

        let i = 0;
        let j = 0;
        let k = start;

        while(i <= leftList.length-1 && j <= rightList.length-1){
            if(leftList[i] <= rightList[j]){
                list[k] = leftList[i];
                i++;
            } else if(leftList[i] > rightList[j]){
                list[k] = rightList[j];
                j++;
            }
            k++;
        }

        while(i <= leftList.length-1){
            list[k] = leftList[i];
            i++;
            k++;
        }

        while(j <= rightList.length-1){
            list[k] = rightList[j];
            j++;
            k++;
        }

    }
}
