class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        let workingArray = new Array(m+1).fill().map(() => Array(n+1).fill(0));
        console.log(workingArray);
        
        for(let i = strs.length-1; i >= 0; i--){
            let count = this.count(strs[i]);
            let c0 = count[0];
            let c1 = count[1];
            for(let j = workingArray.length-1; j >= 0; j--){
                for(let k = workingArray[0].length-1; k >= 0; k--){
                    workingArray[j][k] = workingArray[j][k];
                    if(j >= c0 && k >= c1) workingArray[j][k] = Math.max(workingArray[j][k], 1 + workingArray[j-c0][k-c1])
                }
            }
        }
        return workingArray[m][n];
    }

    count(str){
        let arr = str.split('');
        let count1 = arr.filter(x => x==='1').length;
        let count0 = arr.length-count1;

        return [count0, count1];
    }
}
