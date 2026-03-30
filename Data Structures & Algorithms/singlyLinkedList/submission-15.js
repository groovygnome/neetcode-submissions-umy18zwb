class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        console.log(this.getValues());
        if(this.head === null) return -1;
        let curr = this.head;
        let i = 0;

        while(i < index && curr != null){
            curr = curr.next;
            i++;
        }

        if(curr === null) return -1;
        return curr.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val, this.head);
        if(this.head === null) {
            this.tail = newNode;
        }
        this.head = newNode;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if(this.head === null) {
            this.insertHead(val);
        } else{
            let newNode = new Node(val, null);
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(this.head === null) return false;
        if(index === 0){ 
            this.head = this.head.next;
            return true;
        }

        let i = 0;
        let curr = this.head;

        while(i < index-1 && curr.next != null){
            curr = curr.next;
            i++;
        }

        if(curr.next != null) {
            if(this.tail === curr.next){
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        } else{
            return false;
        }
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let result = [];

        let curr = this.head;

        while(curr != null){
            result.push(curr.value);
            curr = curr.next;
        }

        return result;
    }
}

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
