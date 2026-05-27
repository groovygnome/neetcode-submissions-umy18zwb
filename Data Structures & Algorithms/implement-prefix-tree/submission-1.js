class PrefixTree {
    constructor() {
        this.root = [new Map(), false];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            if(curr[0].get(word.charAt(i)) === undefined) curr[0].set(word.charAt(i), [new Map(), false]);
            curr = curr[0].get(word.charAt(i));
        }

        curr[1] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        let i = 0;
        while(curr && i < word.length){
            if(curr[0].get(word.charAt(i)) === undefined) return false;
            else curr = curr[0].get(word.charAt(i));
            i++;
        }

        if(i === word.length && curr[1]) return true;
        else return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        let i = 0;
        while(curr && i < prefix.length){
            if(curr[0].get(prefix.charAt(i)) === undefined) return false;
            else curr = curr[0].get(prefix.charAt(i));
            i++;
        }

        if(i === prefix.length) return true;
        else return false;
    }
}
