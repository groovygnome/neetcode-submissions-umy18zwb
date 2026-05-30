class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let head = [new Map(), false];
        let firstLetters = new Set();
        let answer = new Set();

        for(let word of words){
            this.insertWord(head, firstLetters, word);
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(firstLetters.has(board[r][c])) this.searchWords(board, r, c, head, answer, '');
            }
        }

        return answer.values().toArray();

    }

    searchWords(board, r, c, curr, answer, currWord = ''){
        let rows = board.length-1;
        let cols = board[0].length-1;
        if(r > rows || r < 0 || c > cols || c < 0 || curr === undefined || curr[0].get(board[r][c]) === undefined || board[r][c] === '#'){
            return;
        }

        let currChar = board[r][c];

        curr = curr[0].get(currChar);

        if(curr[1]) {
            answer.add(currWord + currChar);
            curr[1] = false;
        }

        board[r][c] = '#';

        this.searchWords(board, r+1, c, curr, answer, currWord + currChar);
        this.searchWords(board, r-1, c, curr, answer, currWord + currChar);
        this.searchWords(board, r, c+1, curr, answer, currWord + currChar);
        this.searchWords(board, r, c-1, curr, answer, currWord + currChar);

        board[r][c] = currChar;
    }

    insertWord(head, firstLetters, word){
        let curr = head;
        let i = 0;
        firstLetters.add(word.charAt(0));
        while(i < word.length){
            let char = word.charAt(i);
            if(curr[0].get(char) === undefined) curr[0].set(char, [new Map(), false]);
            curr = curr[0].get(char);

            i++;
        }
        curr[1] = true;
    }

}
