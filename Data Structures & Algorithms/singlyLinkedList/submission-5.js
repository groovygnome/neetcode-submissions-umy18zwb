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
        let curr = this.head;
        let i = 0;

        while(i < index && curr != null){
            curr = curr.next;
            i++;
        }

        if(i === index && curr != null) return curr.value;
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        if(this.head === null){
            this.head = new Node(val, null);
            this.tail = this.head;
        } else{
            let temp = new Node(val, this.head);
            if(this.head.next === null) this.tail = this.head;
            this.head = temp;
        }
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if(this.head === null){
            this.head = new Node(val, null);
            this.tail = this.head;
        } else{
            this.tail.next = new Node(val, null);
            this.tail = this.tail.next;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        console.log(this.getValues());
        if(this.head === null){
            return false;
        }
        if(index === 0){
            this.head = this.head.next;
            return true;
        }
        console.log(this.getValues());
        let curr = this.head;
        let i = 0;

        while(i < index-1 && curr.next != null){
            curr = curr.next;
            i++;
        }

        if(i === index-1 && curr.next != null){
            if(curr.next === this.tail) this.tail = curr;
            curr.next = curr.next.next;
            console.log(this.getValues());
            return true;
        }
        return false;
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

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
