class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(val < this.min) this.min = val;
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop();
        if(val === this.min){
            this.min = Infinity;
            this.stack.forEach((num) => {if(num < this.min) this.min = num});
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
