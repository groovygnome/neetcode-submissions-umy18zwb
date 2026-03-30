class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        this.quickSort(position, speed);
        let result = 0;

        let time = [];

        for(let i = 0; i < position.length; i++){
            time.push((((target-position[i])/speed[i])));
        }
        console.log('pos : ' + position);
        console.log('speed : ' + speed);
        console.log('time : ' + time);

        let max = time.pop();
        result++;

        while(time.length != 0){
            if(time[time.length-1] > max){
                max = time[time.length-1];
                result++;
            }
            time.pop();
        }

        return result;
    }

    quickSort(array1, array2, start = 0, end = array1.length-1){
        if(end-start <= 0){
            return [array1, array2];
        }

        let pivot = array1[end];

        let j = start;
        for(let i = start; i <= end; i++){
            if(array1[i] <= pivot){
                let temp = array1[j];
                array1[j] = array1[i];
                array1[i] = temp;
                temp = array2[j];
                array2[j] = array2[i];
                array2[i] = temp;
                if(i !== end) j++;
            }
        }

        this.quickSort(array1, array2, start, j-1);
        this.quickSort(array1, array2, j+1, end);
    }
}
