class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length-1;
        let cols = grid[0].length-1;
        for(let row = 0; row <= rows; row++){
            for(let col = 0; col <= cols; col++){
                if(grid[row][col] === 0){
                    let queue = [[row, col]];
                    let distance = 0;
                    while(queue.length > 0){
                        let queueLength = queue.length;
                        let visited = new Set();
                        for(let i = 0; i < queueLength; i++){
                            let curr = queue.shift();
                            let r = curr[0];
                            let c = curr[1];
                            if(r < 0 || r > rows || c < 0 || c > cols ||
                               grid[r][c] === -1 || visited.has(r + '#' + c)){
                                continue;
                            }

                            visited.add(r + '#' + c);
                            if(distance <= grid[r][c]) grid[r][c] = distance;
                            else continue;


                            queue.push([r+1, c], [r-1, c], [r, c+1], [r, c-1]);
                        }
                        distance++;
                    }
                }
            }
        }

        return grid;


        
    }

}
