class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] === 0){
                    this.mapTreasure(grid, r, c);
                }
            }
        }

        return grid;


        
    }

    mapTreasure(grid, r, c, distance = 0){
        let rows = grid.length-1;
        let cols = grid[0].length-1;
        if(r < 0 || r > rows || c < 0 || c > cols ||
           grid[r][c] === -1){
            return;
        }

        if(distance <= grid[r][c]) grid[r][c] = distance;
        else return;

        this.mapTreasure(grid, r+1, c, distance+1);
        this.mapTreasure(grid, r-1, c, distance+1);
        this.mapTreasure(grid, r, c+1, distance+1);
        this.mapTreasure(grid, r, c-1, distance+1);
    }
}
