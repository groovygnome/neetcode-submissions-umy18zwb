class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid, r = 0, c = 0, visited = new Set()) {
        let rows = grid.length-1;
        let cols = grid[0].length-1;
        if(r > rows || c > cols || r < 0 || c < 0 ||
            visited.has(r + '#' + c)){
            return 0;
        }

        let perimeter = 0;
        if(grid[r][c] === 1){
        if(r === 0) perimeter++;
        if(r === rows) perimeter++;
        if(c === 0) perimeter++;
        if(c === cols) perimeter++;
        if(r+1 >= 0 && r+1 <= rows && grid[r+1][c] === 0) perimeter++;
        if(r-1 >= 0 && r-1 <= rows && grid[r-1][c] === 0) perimeter++;
        if(c+1 >= 0 && c+1 <= cols && grid[r][c+1] === 0) perimeter++;
        if(c-1 >= 0 && c-1 <= cols && grid[r][c-1] === 0) perimeter++;
        }

        visited.add(r + '#' + c);

        return perimeter + this.islandPerimeter(grid, r+1, c, visited) + 
        this.islandPerimeter(grid, r-1, c, visited) + 
        this.islandPerimeter(grid, r, c+1, visited) + 
        this.islandPerimeter(grid, r, c-1, visited);
    }
}
