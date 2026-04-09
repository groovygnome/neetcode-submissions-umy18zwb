class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visited = new Set();
        let queue = [];

        queue.push([0,0]);
        visited.add('0,0');

        let length = 0;
        while(queue.length > 0){
            let queueLength = queue.length;
            for(let i = 0; i < queueLength; i++){
                let coords = queue.shift();
                let row = coords[0];
                let col = coords[1];
                if(row === rows-1 && col === cols-1){
                    return length;
                }

                let neighbors = [[row, col+1], [row, col-1], [row+1, col], [row-1, col]];
                for(let neighbor of neighbors){
                    if(neighbor[0] < 0 || neighbor[1] < 0 
                    || neighbor[0] >= rows || neighbor[1] >= cols
                    || grid[neighbor[0]][neighbor[1]] === 1 || visited.has(neighbor[0] + ',' + neighbor[1])){
                        continue;
                    }else{
                        queue.push([neighbor[0], neighbor[1]]);
                        visited.add(neighbor[0] + ',' + neighbor[1]);
                    }
                }
            }
            length++;
        }
        return -1;
    }
}
