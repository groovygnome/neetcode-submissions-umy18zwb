class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;
        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 1){
                    let area = this.destroyAndCountIsland(grid, r, c);
                    console.log(area);
                    if(area > maxArea) maxArea = area;
                }
            }
        }

        return maxArea;
    }

    destroyAndCountIsland(grid, row, col){
        let rows = grid.length;
        let cols = grid[0].length;
        if(row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) return 0;
        grid[row][col] = 0;

        let currArea = 1;

        currArea += this.destroyAndCountIsland(grid, row+1, col);
        currArea += this.destroyAndCountIsland(grid, row-1, col);
        currArea += this.destroyAndCountIsland(grid, row, col+1);
        currArea += this.destroyAndCountIsland(grid, row, col-1);

        return currArea;

    }
}
