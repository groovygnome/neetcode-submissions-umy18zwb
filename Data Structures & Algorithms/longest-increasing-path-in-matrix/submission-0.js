class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let max = 0;
        let visited = {};
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                max = Math.max(max, this.pathHelper(matrix, i, j, visited));
            }
        }

        return max;
    }

    pathHelper(matrix, i, j, visited){
        if(visited[i + '#' + j] != undefined) return visited[i + '#' + j];

        let curr = matrix[i][j];
        let max = 1;
        if(i-1 >= 0 && matrix[i-1][j] > curr){
            max = Math.max(max, 1 + this.pathHelper(matrix, i-1, j, visited))
        }
        if(i+1 < matrix.length && matrix[i+1][j] > curr){
            max = Math.max(max, 1 + this.pathHelper(matrix, i+1, j, visited))
        }
        if(j-1 >= 0 && matrix[i][j-1] > curr){
            max = Math.max(max, 1 + this.pathHelper(matrix, i, j-1, visited))
        }
        if(j+1 < matrix[0].length && matrix[i][j+1] > curr){
            max = Math.max(max, 1 + this.pathHelper(matrix, i, j+1, visited))
        }

        visited[i + '#' + j] = max;

        return visited[i + '#' + j];
    }
}
