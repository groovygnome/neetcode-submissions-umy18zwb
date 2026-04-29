class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let rows = grid.length-1;
        let cols = grid[0].length-1;
        let visited = new Set();
        let queue = [[0,0]];
        let perimeter = 0;

        while(queue.length > 0){
            let queueLength = queue.length;
            for(let i = 0; i < queueLength; i++){
                let curr = queue.shift();
                let r = curr[0];
                let c = curr[1];
                if(r > rows || c > cols || r < 0 || c < 0 ||
                    visited.has(r + '#' + c)){
                    continue;
                }
                visited.add(r + '#' + c);
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
                queue.push([r+1, c], [r-1, c], [r, c+1], [r, c-1]);
            }
        }

        return perimeter;

    }
}
