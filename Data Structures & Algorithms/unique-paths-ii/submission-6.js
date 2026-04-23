class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let rows = grid.length-1;
        let cols = grid[0].length-1;

        if(grid[rows][cols] === 1 || grid[0][0] === 1){
            return 0;
        }

        grid[rows][cols] = 1;

        for(let r = rows; r >= 0; r--){
            for(let c = cols; c >= 0; c--){
                if(r === rows && c === cols) continue;
                if(grid[r][c] === 1) grid[r][c] = 0;
                else{
                    let curr = 0;
                    if(r != rows) curr += grid[r+1][c];
                    if(c != cols) curr += grid[r][c+1];
                    grid[r][c] = curr;
                }
            }
        }

        return grid[0][0];

    }
}
