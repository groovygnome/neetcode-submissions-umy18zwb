class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        let L = 0;
        let R = height.length-1;
        let leftMax = height[L];
        let rightMax = height[R];
        while(L < R){
            if(leftMax < rightMax){
                L++;
                leftMax = Math.max(height[L], leftMax);
                totalWater += leftMax - height[L];
            } else{
                R--;
                rightMax = Math.max(height[R], rightMax);
                totalWater += rightMax - height[R];
            }
        }

        return totalWater;
    }
}
