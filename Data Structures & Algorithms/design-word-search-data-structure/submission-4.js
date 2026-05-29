class WordDictionary {
    constructor() {
        this.head = [new Map(), false];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.head;
        for(let i = 0; i < word.length; i++){
            if(curr[0].get(word.charAt(i)) === undefined) {
                curr[0].set(word.charAt(i), [new Map(), false]);
            }
            curr = curr[0].get(word.charAt(i))
        }
        curr[1] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, curr = this.head, i = 0) {
        let val = word.charAt(i);
        if(!curr) return false;
        if(i === word.length && curr[1]) return true;
        else if(i === word.length && !curr[1]) return false;

        if(val === '.'){
            //return true || curr[0].forEach((next) => this.search(word, next, i+1));
            for(let next of curr[0]){
                if(this.search(word, next[1], i+1)) return true;
            }
            return false;
        } else if(curr[0].get(val) != undefined){
            return true && this.search(word, curr[0].get(val), i+1)
        }

        return false;
    }
}
