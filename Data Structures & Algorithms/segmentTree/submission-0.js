class SegmentTree {
    /**
     * @param {number[]} nums
     */
    constructor(nums, L = 0, R = nums.length-1, sum = 0) {
        if(L === R){
            this.L = L;
            this.R = R;
            this.left = null;
            this.right = null;
            this.sum = nums[L];
            return;
        }
        this.L = L;
        this.R = R;
        let M = Math.floor((L + R) / 2);
        this.left = new SegmentTree(nums, L, M);
        this.right = new SegmentTree(nums, M+1, R);
        this.sum = this.left.sum + this.right.sum;
    }

    /**
     * @param {number} index
     * @param {number} val
     */
    update(index, val) {
        if(index === this.L && index === this.R){
            this.sum = val;
            return;
        }
        let M = Math.floor((this.L + this.R) / 2);
        if(index <= M){
            this.left.update(index,val);
        } else if(index > M){
            this.right.update(index,val);
        }
        this.sum = this.left.sum + this.right.sum;
    }

    /**
     * @param {number} L
     * @param {number} R
     * @returns {number}
     */
    query(L, R) {
        if(this.L === L && this.R === R){
            return this.sum;
        }

        let M = Math.floor((this.L+this.R) / 2)
        if(L > M){
            return this.right.query(L, R);
        } else if(R <= M){
            return this.left.query(L, R);
        } else{
            return (this.left.query(L, M) + this.right.query(M+1, R));
        }
    }
}
