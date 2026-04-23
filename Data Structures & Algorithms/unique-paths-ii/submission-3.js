class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let rows = grid.length-1;
        let cols = grid[0].length-1;

        let answerArr = new Array(cols).fill(0);
        answerArr.push(1);
        console.log(answerArr);

        for(let r = rows; r >= 0; r--){
            for(let c = cols; c >= 0; c--){
                if(grid[r][c] === 1) answerArr[c] = 0;
                else{
                    let curr = 0;
                    if(r != rows) curr += answerArr[c];
                    if(c != cols) curr += answerArr[c+1];
                    if(r === rows && c === cols) curr = 1;
                    answerArr[c] = curr;
                }
            }
        }

        return answerArr[0];

    }
}
