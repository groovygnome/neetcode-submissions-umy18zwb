class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if(grid[0][0] === 1) return -1;
        let rows = grid.length;
        let cols = grid[0].length;

        let visited = new Set();
        let queue = [];

        visited.add('0,0');
        queue.push([0,0]);

        let length = 0;
        while(queue.length > 0){
            let queueLength = queue.length;
            for(let i = 0; i < queueLength; i++){
                let curr = queue.shift();
                let row = curr[0];
                let col = curr[1];

                if(row === rows-1 && col === cols-1){
                    return ++length;
                }

                let neighbors = [[row-1,col-1],[row-1,col],[row-1,col+1],
                                 [row, col-1],             [row, col+1],
                                 [row+1, col-1],[row+1, col],[row+1, col+1]];
                for(let neighbor of neighbors){
                    let r = neighbor[0];
                    let c = neighbor[1];
                    if(r < 0 || c < 0 || r >= rows || c >= cols
                    || grid[r][c] === 1 || visited.has(r + ',' + c)){
                        continue;
                    } else{
                        visited.add(r + ',' + c);
                        queue.push([r,c]);
                    }
                }
            }
            length++;
        }

        return -1;

    }
}
