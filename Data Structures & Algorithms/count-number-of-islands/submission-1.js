class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let answer = 0;
        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === '1'){
                    answer++;
                    this.destroyIsland(grid, r, c);
                }
            }
        }


        return answer;

    }

    destroyIsland(grid, row, col){
        let rows = grid.length;
        let cols = grid[0].length;
        if(row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') return;
        grid[row][col] = '0';

        this.destroyIsland(grid, row+1, col);
        this.destroyIsland(grid, row-1, col);
        this.destroyIsland(grid, row, col+1);
        this.destroyIsland(grid, row, col-1);
    }
}
