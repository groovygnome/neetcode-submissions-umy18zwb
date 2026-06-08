class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length;
        let parents = new Map();
        let ranks = new Map();

        for(let i = 0; i < nums.length; i++){
            parents.set(nums[i], nums[i]);
            ranks.set(nums[i], 1);
        }

        for(let i = 0; i < nums.length; i++){
            if(parents.get(nums[i]+1) != undefined){
                let c = nums[i];
                let p = nums[i]+1;

                let cRoot = this.findRoot(c, parents);
                let pRoot = this.findRoot(p, parents);

                console.log('c: ' + c + ' cRoot: ' + cRoot);
                console.log('p: ' + p + ' pRoot: ' + pRoot);
                console.log('vvvvvvvvv');
                if(cRoot === pRoot) continue;
                if(ranks.get(pRoot) < ranks.get(cRoot)){
                    parents.set(pRoot, cRoot);
                    ranks.set(cRoot, ranks.get(cRoot)+ranks.get(pRoot));
                } else if(ranks.get(pRoot) > ranks.get(cRoot)){
                    parents.set(cRoot, pRoot);
                    ranks.set(pRoot, ranks.get(cRoot)+ranks.get(pRoot));
                } else if(ranks.get(pRoot) === ranks.get(cRoot)){
                    parents.set(pRoot, cRoot);
                    ranks.set(cRoot, ranks.get(cRoot)+ranks.get(pRoot));
                }
            }
        }

        console.log(parents);
        console.log(ranks);

        return (Math.max(...ranks.values().toArray()));
    }

    findRoot(num, parents){
        while(num != parents.get(num)){
            parents.set(num, parents.get(parents.get(num)));
            num = parents.get(num);
        }

        return num;
    }
}
