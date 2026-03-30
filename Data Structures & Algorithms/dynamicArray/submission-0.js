class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length < this.capacity){
            this.arr[this.length] = n;
            this.length++;
        } else{
            this.resize();
            this.arr[this.length] = n;
            this.length++;
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length--;
        let temp = this.arr[this.length];
        delete this.arr[this.length];
        return temp;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        let temp = new Array(this.capacity);
        for(let elem = 0; elem < this.length; elem++){
            temp[elem] = this.arr[elem];
        }
        this.arr = temp;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
