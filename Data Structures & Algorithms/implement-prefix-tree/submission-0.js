class PrefixTree {
    constructor() {
        this.root = [new Map(), false];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let wordStr = word.split('');
        let curr = this.root;
        for(let i = 0; i < wordStr.length; i++){
            if(curr[0].get(wordStr[i]) === undefined) curr[0].set(wordStr[i], [new Map(), false]);
            curr = curr[0].get(wordStr[i]);
        }

        curr[1] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let wordStr = word.split('');
        let curr = this.root;
        let i = 0;
        while(curr && i < wordStr.length){
            if(curr[0].get(wordStr[i]) === undefined) return false;
            else curr = curr[0].get(wordStr[i]);
            i++;
        }

        if(i === wordStr.length && curr[1]) return true;
        else return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let prefStr = prefix.split('');
        let curr = this.root;
        let i = 0;
        while(curr && i < prefStr.length){
            if(curr[0].get(prefStr[i]) === undefined) return false;
            else curr = curr[0].get(prefStr[i]);
            i++;
        }

        if(i === prefStr.length) return true;
        else return false;
    }
}
