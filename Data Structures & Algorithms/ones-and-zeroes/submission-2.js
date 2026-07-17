class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        return this.maxHelper(strs, m, n)
    }

    maxHelper(strs, m, n, curr = 0, size = 0, visited = new Map()){
        if(m < 0 || n < 0) return -1;
        if(curr >= strs.length) return size;
        if(visited.get(m + '#' + n + '#' + curr + '#' + size) != undefined) return visited.get(m + '#' + n + '#' + curr + '#' + size);

        let counts = this.count(strs[curr]);
        let count0 = counts[0];
        let count1 = counts[1];

        let maxInclude = this.maxHelper(strs, m-count0, n-count1, curr+1, size+1, visited);
        let maxExclude = this.maxHelper(strs, m, n, curr+1, size, visited);

        visited.set(m + '#' + n + '#' + curr + '#' + size, Math.max(maxInclude, maxExclude));

        return Math.max(maxInclude, maxExclude);
    }

    count(str){
        let arr = str.split('');
        let count1 = arr.filter(x => x==='1').length;
        let count0 = arr.length-count1;

        return [count0, count1];
    }
}
