class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n, alrSolved = new Map()) {
        if(n === 1 || n === 2){
            return 1;
        }
        if(n === 0){
            return n;
        }
        if(alrSolved.get(n) != undefined){
            return alrSolved.get(n);
        }

        alrSolved.set(n, this.tribonacci(n-1, alrSolved) + this.tribonacci(n-2, alrSolved) + this.tribonacci(n-3, alrSolved));

        return alrSolved.get(n);
    }
}
