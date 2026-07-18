class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        let workingArray = new Array(strs.length+1).fill().map(() => Array(m+1).fill().map(() => Array(n+1).fill(0)));
        
        for(let i = 1; i < workingArray.length; i++){
            let count = this.count(strs[i-1]);
            let c0 = count[0];
            let c1 = count[1];
            for(let j = 0; j < workingArray[0].length; j++){
                for(let k = 0; k < workingArray[0][0].length; k++){
                    workingArray[i][j][k] = workingArray[i-1][j][k];
                    if(j >= c0 && k >= c1) workingArray[i][j][k] = Math.max(workingArray[i][j][k], 1 + workingArray[i-1][j-c0][k-c1])
                }
            }
        }
        return workingArray[strs.length][m][n];
    }

    count(str){
        let arr = str.split('');
        let count1 = arr.filter(x => x==='1').length;
        let count0 = arr.length-count1;

        return [count0, count1];
    }
}
