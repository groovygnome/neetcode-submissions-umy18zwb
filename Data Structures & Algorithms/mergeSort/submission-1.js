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
    mergeSort(pairs, start = 0, end = pairs.length - 1) {
        if((end - start)+1 <= 1){
            return pairs;
        }

        let middle = Math.floor((end + start)/2);

        this.mergeSort(pairs, start, middle);
        this.mergeSort(pairs, middle+1, end);
        this.merge(pairs, start, middle, end);

        return pairs;
        

    }

    merge(pairs, start, middle, end){
        let left = pairs.slice(start, middle+1);
        let right = pairs.slice(middle+1, end+1);
        let i = 0;
        let j = 0;
        let k = start;
        while(i != left.length && j != right.length){
            if(left[i].key <= right[j].key){
                pairs[k] = left[i];
                k++;
                i++;
            } else if(left[i].key > right[j].key){
                pairs[k] = right[j];
                k++;
                j++;
            }
        }

        while(j != right.length){
            pairs[k] = right[j];
            j++;
            k++;
        }

        while(i != left.length){
            pairs[k] = left[i];
            i++;
            k++;
        }

        return pairs;
    }
}
