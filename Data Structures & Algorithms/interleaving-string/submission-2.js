class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        return this.interleaveHelper(s1, s2, s3);
    }

    interleaveHelper(s1, s2, s3, curr1 = 0, curr2 = 0, curr3 = 0, visited = new Map()){
        if(curr1 === s1.length && curr2 === s2.length && curr3 === s3.length) return true;

        if(visited.get(curr1 + '#' + curr2 + '#' + curr3) != undefined) return visited.get(curr1 + '#' + curr2 + '#' + curr3);

        let ans = false;

        if(s1.charAt(curr1) === s3.charAt(curr3) && curr1 < s1.length) ans = this.interleaveHelper(s1, s2, s3, curr1+1, curr2, curr3+1, visited);
        if(s2.charAt(curr2) === s3.charAt(curr3) && curr2 < s2.length) ans = ans || this.interleaveHelper(s1, s2, s3, curr1, curr2+1, curr3+1, visited);
        
        visited.set(curr1 + '#' + curr2 + '#' + curr3, ans);

        return ans;
    }
}
