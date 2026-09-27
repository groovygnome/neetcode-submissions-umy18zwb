class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let treasure = new Queue();
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 0){
                    treasure.enqueue([i, j]);
                }
            }
        }

        while(treasure.size() > 0){
            let currCoords = treasure.dequeue();
            let i = currCoords[0];
            let j = currCoords[1];
            if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === -1) continue;
            if(i+1 < grid.length && grid[i][j]+1 < grid[i+1][j]){
                grid[i+1][j] = grid[i][j]+1;
                treasure.enqueue([i+1, j]);
            }
            if(i-1 >= 0 && grid[i][j]+1 < grid[i-1][j]){ 
                grid[i-1][j] = grid[i][j]+1
                treasure.enqueue([i-1, j]);
            }
            if(j+1 < grid[0].length && grid[i][j]+1 < grid[i][j+1]){
                grid[i][j+1] = grid[i][j]+1;
                treasure.enqueue([i, j+1]);
            }
            if(j-1 >= 0 && grid[i][j]+1 < grid[i][j-1]){
                grid[i][j-1] = grid[i][j]+1;
                treasure.enqueue([i, j-1]);
            }
            
        }

        return grid;
    }
}
