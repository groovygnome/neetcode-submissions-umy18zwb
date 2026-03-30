class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        let checkStack = [];
        let curr = temperatures[0];
        let j = 0;
        for(let i = 0; i <= temperatures.length; i++){
            if(i === temperatures.length && j < temperatures.length){
                result.push(0);
                checkStack = [];
                j++;
                i = j;
                curr = temperatures[j]
            }
            if(temperatures[i] > curr){
                result.push(checkStack.length)
                checkStack = [];
                j++;
                i = j;
                curr = temperatures[j];
            }
            checkStack.push(temperatures[i]);
        }

        while(result.length < temperatures.length){
            result.push(0);
        }

        return result;
    }
}
