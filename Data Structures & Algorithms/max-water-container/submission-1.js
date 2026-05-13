class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0;
        let R = heights.length-1;
        let maxWater = 0;

        while(L < R){
            if(maxWater < (Math.min(heights[R], heights[L]) * (R - L))){
                maxWater = (Math.min(heights[R], heights[L]) * (R - L));
            }
            if(heights[L] <= heights[R]){
                L++;
            } else if(heights[L] > heights[R]){
                R--;
            }
        }

        return maxWater;
    }
}
