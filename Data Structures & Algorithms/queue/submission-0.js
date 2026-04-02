class Node {
    constructor(val, next = null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if(!this.head) return true;
        return false;
    }

    /**
     * @param {number} value
     */
    append(value) {
        if(this.isEmpty()){
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
        } else{
            let newNode = new Node(value, null, this.tail);
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        if(this.isEmpty()){
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
        } else{
            let newNode = new Node(value, this.head);
            this.head.prev = newNode;
            this.head = this.head.prev;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()){
            return -1;
        } else{
            let temp = this.tail;
            if(this.tail.prev){
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else{
                this.tail = null;
                this.head = null;
            }
            return temp.val;
        }
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.isEmpty()){
            return -1;
        } else{
            let temp = this.head;
            if(this.head.next){
                this.head = this.head.next;
                this.head.prev = null;
            } else{
                this.head = null;
                this.tail = null;
            }
            return temp.val;
        }
    }
}
