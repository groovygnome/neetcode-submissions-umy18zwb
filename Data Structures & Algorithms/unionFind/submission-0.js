class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parents = new Map();
        this.ranks = new Map();
        this.length = n;

        for(let i = 0; i < n; i++){
            this.parents.set(i, i);
            this.ranks.set(i, 1);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.parents.get(x);
        while(p != this.parents.get(p)){
            this.parents.set(p, this.parents.get(this.parents.get(p)));
            p = this.parents.get(p);
        }
        return p;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);

        while(p1 != this.parents.get(p1)) p1 = this.parents.get(p1);
        while(p2 != this.parents.get(p2)) p2 = this.parents.get(p2);

        return p1 === p2;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);

        if(p1 === p2) return false;

        if(this.ranks.get(p1) > this.ranks.get(p2)){
            this.parents.set(p2, p1);
        } else{
            this.parents.set(p1, p2);
            if(this.ranks.get(p1) === this.ranks.get(p2)){
                this.ranks.set(p2, this.ranks.get(p2)+1);
            }
        }
        this.length--;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.length;
    }
}
