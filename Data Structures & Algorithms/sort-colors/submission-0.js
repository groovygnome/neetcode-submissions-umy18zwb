class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let colors = [0, 0, 0];
        for(let num of nums){
            colors[num]++;
        }
        
        let i = 0;
        for(let j = 0; j <= colors.length; j++){
            let k = 0;
            let color;
            if(j === 0) color = 'red';
            if(j === 1) color = 'white';
            if(j === 2) color = 'blue';
            while(k < colors[j]){
                nums[i] = j;
                i++;
                k++;
            }
        }
        return nums;
    }
}
