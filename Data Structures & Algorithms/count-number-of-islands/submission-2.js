class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let ans = 0;

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === '1'){
                    ans++;
                    this.destroyIsland(grid, i, j);
                }
            }
        }
        return ans;
    }

    destroyIsland(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0')
            return 0;
        if (grid[i][j] === "1") {
            grid[i][j] = "0";
            return (
                this.destroyIsland(grid, i + 1, j) +
                this.destroyIsland(grid, i - 1, j) +
                this.destroyIsland(grid, i, j + 1) +
                this.destroyIsland(grid, i, j - 1)
            );
        }
    }
}
