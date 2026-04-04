class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid, currRow = 0, currCol = 0, visited = new Set()) {
        let rows = grid.length;
        let cols = grid[0].length;
        let locString = currRow + ',' + currCol;
        if(currRow < 0 || currCol < 0 || currRow > rows-1 || currCol > cols-1) return 0;
        if(grid[currRow][currCol] === 1 || visited.has(locString)) return 0;
        if(currRow === rows-1 && currCol === cols-1) return 1;

        visited.add(locString);

        let count = 0;
        count += this.countPaths(grid, currRow+1, currCol, visited);
        count += this.countPaths(grid, currRow-1, currCol, visited);
        count += this.countPaths(grid, currRow, currCol+1, visited);
        count += this.countPaths(grid, currRow, currCol-1, visited);

        visited.delete(locString);

        return count;

    }
}
