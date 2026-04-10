class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let dimensions = rows*cols;

        let rottingArr = this.findRotting(grid, rows*cols);
        let rotting = rottingArr[0];
        let size = rottingArr[1];
        let visited = new Set();

        if(rotting.length === size && size === 0) return 0;
        if(rotting.length === 0 && size > 0) return -1;

        let minutes = 0;
        while(size > 0){
            let newRotting = [];
            let startingSize = size;
            let rottingLength = rotting.length;
            for(let i = 0; i < rottingLength; i++){
                let row = rotting[i][0];
                let col = rotting[i][1];
                visited.add(row + ',' + col);
                let neighbors = [[row, col+1],[row, col-1],[row+1, col],[row-1, col]];
                for(let j = 0; j < neighbors.length; j++){
                    let nRow = neighbors[j][0];
                    let nCol = neighbors[j][1];
                    if(nRow < 0 || nCol < 0 || nRow >= rows || nCol >= cols
                    || grid[nRow][nCol] === 0 || grid[nRow][nCol] === 2
                    || visited.has(nRow + ',' + nCol)){
                        continue;
                    } else{
                        grid[nRow][nCol] = 2;
                        newRotting.push([nRow, nCol]);
                        size--;
                    }
                }

            }
            if(startingSize === size) return -1;
            rotting = newRotting;
            minutes++;
        }

        return minutes;
    }

    findRotting(grid, size){
        let rotting = [];
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 2){ 
                    rotting.push([i,j]);
                    size--;
                } else if(grid[i][j] === 0){
                    size--;
                }
            }
        }
        
        return [rotting, size];

    }
}
