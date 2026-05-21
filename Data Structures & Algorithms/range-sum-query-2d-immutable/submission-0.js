class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.sumMatrix = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
        this.sumMatrix[matrix.length-1][matrix[0].length-1] = matrix[matrix.length-1][matrix[0].length-1];
        for(let i = matrix.length-1; i >= 0; i--){
            for(let j = matrix[0].length-1; j >= 0; j--){
                let curr = matrix[i][j];
                if(i != matrix.length-1) curr +=  this.sumMatrix[i+1][j];
                if(j != matrix[0].length-1) curr += this.sumMatrix[i][j+1];
                if(i != matrix.length-1 && j != matrix[0].length-1) curr -= this.sumMatrix[i+1][j+1];
                this.sumMatrix[i][j] = curr;
            }   
        }

    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let bottom = 0;
        let right = 0;
        let bottomRight = 0;
        if(col2 != this.sumMatrix[0].length-1) bottom = this.sumMatrix[row1][col2+1];
        if(row2 != this.sumMatrix.length-1) right = this.sumMatrix[row2+1][col1];
        if(row2 != this.sumMatrix.length-1 && col2 != this.sumMatrix[0].length-1) bottomRight = this.sumMatrix[row2+1][col2+1];
        return this.sumMatrix[row1][col1] - bottom - right + bottomRight;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
