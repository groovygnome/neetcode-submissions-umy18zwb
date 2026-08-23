class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(val <= this.min) {
            this.min = val;
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack.pop();
        if(val === this.min){
            this.minStack.pop();
            if(this.minStack.length > 0) this.min = this.minStack[this.minStack.length-1];
            else this.min = Infinity;
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
