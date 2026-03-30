/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs, start = 0, end = pairs.length-1) {
        if((end - start) + 1 <= 1){
            return pairs;
        }

        let middle = Math.floor((start + end)/2);
        this.mergeSort(pairs, start, middle);
        this.mergeSort(pairs, middle+1, end);

        this.merge(pairs, start, middle, end);

        return pairs;
    }

    merge(pairs, start, middle, end){
        let arr = pairs.slice();
        let left = start;
        let curr = start;
        let right = middle+1;
        while(left <= middle && right <= end){
            if((arr[left].key <= arr[right].key)){
                pairs[curr] = arr[left];
                left++;
            } else if(arr[left].key > arr[right].key){
                pairs[curr] = arr[right];
                right++;
            }
            curr++;
        }

        while(left <= middle){
            pairs[curr] = arr[left];
            left++;
            curr++;
        }

        while(right <= end){
            pairs[curr] = arr[right];
            right++;
            curr++;
        }
    }
}
