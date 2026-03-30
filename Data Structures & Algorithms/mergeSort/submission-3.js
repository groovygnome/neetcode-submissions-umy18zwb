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
        if ((end - start) <= 0){
            return pairs;
        }

        let middle = Math.floor((end + start) /2);

        this.mergeSort(pairs, start, middle);
        this.mergeSort(pairs, middle+1, end);
        this.merge(pairs, start, middle, end);

        return pairs;
    }

    merge(pairs, start, middle, end){
        let copy = pairs.slice();
        let i = start;
        let j = middle+1;
        let k = start;
        while(i <= middle && j <= end ){
            if(copy[i].key <= copy[j].key){
                pairs[k] = copy[i];
                i++;
            } else if(copy[i].key > copy[j].key){
                pairs[k] = copy[j];
                j++;
            }
            k++;
        }

        while(i <= middle){
            pairs[k] = copy[i];
            i++;
            k++;
        }

        while(j <= end){
            pairs[k] = copy[j];
            j++;
            k++;
        }
    }
}
