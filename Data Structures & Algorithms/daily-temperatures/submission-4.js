class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        let stack = [];
        let ans = new Array(temps.length).fill(0);
        
        for(let i = ans.length-1; i > -1; i--){
            if(stack.length === 0) ans[i] = 0;
            while(stack.length > 0 && stack[stack.length-1][0] <= temps[i]) stack.pop();
            if(stack.length > 0 && stack[stack.length-1][0] > temps[i]) ans[i] = stack[stack.length-1][1] - i;
            stack.push([temps[i], i]);
        }

        return ans;
    }
}
