class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        this.quickSort(piles);

        let start = 1;
        let end = piles[piles.length-1];
        let fastest = piles[start];

        while(start <= end){
            let mid = Math.floor((end - start) / 2 + start);
            let time = 0;
            for(let i = 0; i < piles.length; i++){
                time += Math.ceil(piles[i]/mid);
            }
            if(time > h){
                start = mid + 1;
            } else if(time <= h){
                end = mid - 1;
                fastest = mid;
            }
        }
        return fastest;
        
    }

    quickSort(array, start = 0, end = array.length-1){
        if(end - start <= 0){
            return array;
        }

        let pivot = array[end];

        let j = start;

        for(let i = start; i <= end; i++){
            if(array[i] <= pivot){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                j++;
                if(i === end) j--;
            }
        }

        this.quickSort(array, start, j-1);
        this.quickSort(array, j+1, end);
    }
}
