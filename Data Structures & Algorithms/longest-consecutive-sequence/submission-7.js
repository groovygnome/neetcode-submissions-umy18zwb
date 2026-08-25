class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        let unionFind = new UnionFind(nums);

        nums.forEach((num) => {
            unionFind.union(num, num+1);
            unionFind.union(num, num-1);
        });

        return unionFind.maxRank;
    }
}

class UnionFind{

    constructor(nums){
        this.par = new Map();
        this.rank = new Map();
        this.maxRank = 1;

        for(let i = 0; i < nums.length; i++){
            this.par.set(nums[i], nums[i]);
            this.rank.set(nums[i], 1);
        }
    }

    union(i, j){
        if(this.par.get(i) === undefined) return;
        if(this.par.get(j) === undefined) return;
        let iPar = this.find(i);
        let jPar = this.find(j);

        if(iPar === jPar) return;

        if(this.rank.get(iPar) > this.rank.get(jPar)){
            this.par.set(jPar, iPar);
            this.rank.set(iPar, this.rank.get(iPar) + this.rank.get(jPar));
            if(this.rank.get(iPar) > this.maxRank) this.maxRank = this.rank.get(iPar);
        } else{
            this.par.set(iPar, jPar);
            this.rank.set(jPar, this.rank.get(iPar) + this.rank.get(jPar));           
            if(this.rank.get(jPar) > this.maxRank) this.maxRank = this.rank.get(jPar);           
        }
    }

    find(i){
        let curr = i;
        while(curr != this.par.get(curr)){
            curr = this.par.get(curr);
        }
        return curr;
    }
}
