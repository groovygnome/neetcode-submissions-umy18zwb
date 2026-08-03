class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        return this.distanceHelper(word1, word2);
    }

    distanceHelper(word1, word2, w1 = 0, w2 = 0, visited = new Map()){
        if(word1 === word2) return 0;

        if(visited.get(word1) != undefined) return visited.get(word1);

        let ans;

        if(word1.charAt(w1) === word2.charAt(w2)) ans = this.distanceHelper(word1, word2, w1+1, w2+1, visited);
        else if(w1 >= word1.length && w2 < word2.length){
            ans = 1 + this.distanceHelper(word1.slice().concat(word2.charAt(w2)), word2, w1, w2, visited);
        } else if(w1 < word1.length && w2 >= word2.length){
            ans = 1 + this.distanceHelper(word1.slice(0, w1).concat(word1.slice(w1+1)), word2, w1, w2, visited);
        } else if(w1 >= word1.length && w2 >= word2.length) ans = Infinity;
        else ans = 1 + Math.min(
            this.distanceHelper(word1.slice(0, w1).concat(word2.charAt(w2).concat(word1.slice(w1))), word2, w1, w2, visited), 
            this.distanceHelper(word1.slice(0, w1).concat(word1.slice(w1+1)), word2, w1, w2, visited), 
            this.distanceHelper(word1.slice(0, w1).concat(word2.charAt(w2).concat(word1.slice(w1+1))), word2, w1, w2, visited)
        )

        visited.set(word1, ans);

        return ans;
    }
}
