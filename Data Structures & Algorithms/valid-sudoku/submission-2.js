class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let rowMap = { ".": 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
            for (let j = 0; j < board.length; j++) {
                let curr = board[i][j];
                if (curr === ".") continue;
                else rowMap[curr] += 1;
                if (rowMap[curr] > 1) return false;

            }

            let colMap = { ".": 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
            for (let j = 0; j < board.length; j++) {
                let curr = board[j][i];
                if (curr === ".") continue;
                else colMap[curr] += 1;
                if (colMap[curr] > 1) return false;
            }
        }

        let iMod = 0;
        let jMod = 0;
        for (let m = 0; m < 9; m++) {
            let ansMap = { ".": 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
            for (let i = iMod; i < iMod + 3; i++) {
                for (let j = jMod; j < jMod + 3; j++) {
                    let curr = board[i][j];
                    if (curr === ".") continue;
                    else ansMap[curr] += 1;
                    if (ansMap[curr] > 1) return false;
                }
            }
            iMod += 3;
            if (iMod >= 9) {
                iMod = 0;
                jMod += 3;
            }
        }

        return true;
    }
}
