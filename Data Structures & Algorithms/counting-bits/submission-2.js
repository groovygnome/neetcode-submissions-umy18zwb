class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if(n === 0) return [0];
        let count = [0, 1];
        while(count.length <= n){
            if((count.length % 2) === 0) count.push(count[Math.round(count.length/2)]);
            else count.push(count[Math.floor(count.length/2)] + 1);
        }

        return count;
    }
}
