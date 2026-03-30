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
    quickSort(pairs, start = 0, end = pairs.length-1) {
        if((end - start) <= 0){
            return pairs;
        }

        let pivotIndex = Math.floor(Math.random() * (end - start) + start);
        //let pivotIndex = end;
        let pivot = pairs[end];


        let i = start;
        let j = start;
        while(i <= end){
            if(pairs[i].key < pivot.key || i === end){
                if(i === end) pivotIndex = j;
                let temp = pairs[i];
                pairs[i] = pairs[j];
                pairs[j] = temp;
                j++;
            }
            i++;
        }

        this.quickSort(pairs, start, pivotIndex-1);
        this.quickSort(pairs, pivotIndex+1, end);

        return pairs;

    }
}
