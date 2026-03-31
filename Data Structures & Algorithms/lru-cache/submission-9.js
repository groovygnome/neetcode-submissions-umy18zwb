class Node{
    constructor(val, key, next = null, prev = null){
        this.val = val;
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
    
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = null;
        this.tail = null;
        this.cmdNum = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        this.cmdNum++;
        if(this.cache.get(key)){
            let curr = this.cache.get(key);
            if(curr != this.tail){
                if(curr.prev) curr.prev.next = curr.next;
                if(curr.next) curr.next.prev = curr.prev;
                if(curr === this.head) this.head = this.head.next;
                this.tail.next = curr;
                curr.prev = this.tail;
                curr.next = null;
                this.tail = this.tail.next;
            }
            return curr.val;
        } else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(!this.cache.get(key)){
            let newNode = new Node(value, key);
            if(this.head === null){
                this.head = newNode;
                this.tail = newNode;
            } else if(this.tail === this.head){
                this.tail.next = newNode;
                this.tail = this.tail.next
                this.tail.prev = this.head;
                this.head.next = this.tail;
            } else{
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = this.tail.next;
            }
            this.cache.set(key, newNode);
        } else {
            let curr = this.cache.get(key);
            if(curr != this.tail){
                if(curr.prev) curr.prev.next = curr.next;
                if(curr.next) curr.next.prev = curr.prev;
                if(curr === this.head) this.head = this.head.next;
                this.tail.next = curr;
                curr.prev = this.tail;
                curr.next = null;
                this.tail = this.tail.next;
            }
            curr.val = value;
        }
        if(this.cache.size > this.capacity){
            this.printLL();
            this.head = this.head.next;
            this.cache.delete(this.head.prev.key);
            this.head.prev = null;
            this.printLL();
        }
    }

    printLL(){
        let curr = this.head;
        let ans = 'COMMANDS: ' + this.cmdNum + ' | ';
        while(curr){
            if(curr === this.head) ans += '(HEAD)';
            if(curr === this.tail) ans += '(TAIL)';
            ans += curr.val + '->';
            curr = curr.next;
        }
        ans += 'null';
        console.log(ans);
    }
}
