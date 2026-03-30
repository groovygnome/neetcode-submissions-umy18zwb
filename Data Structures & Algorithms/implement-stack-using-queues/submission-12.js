class Node{
    constructor(prev, next, val) {
        this.prev = prev;
        this.next = next;
        this.val = val;
    }
}

class MyQueue{

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        if(!this.head && !this.tail){
            let newNode = new Node(null, null, val);
            this.head = newNode;
            this.tail = newNode;
        } else{
            let newNode = new Node(this.tail, null, val);
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
    }

    pop(){
        if(!this.head){
            return;
        } else if(!this.head.next){
            let temp = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        } else{
            let temp = this.tail.val;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return temp;
        }
    }

    peek(){
        if(!this.head){
            return null;
        } else{
            return this.head.val;
        }
    }

    size(){
        return this.length;
    }

    isEmpty(){
        if(this.head){
            return false;
        } else{
            return true;
        }
    }
}

class MyStack {
    constructor() {
        this.queue = new MyQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.enqueue(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let length = this.queue.size();
        let temp = null;
        console.log(this.queue);
        console.log('----------');
        for(let i = 0; i < length; i++){
            temp = this.queue.pop();
            console.log(this.queue);
            console.log('----------');
            this.push(temp);
        }
        console.log(this.queue);
            console.log('----------');
        temp = this.queue.pop();
        return temp;
    }

    /**
     * @return {number}
     */
    top() {
        let length = this.queue.size();
        let temp = null;
        for(let i = 0; i < length; i++){
            temp = this.queue.pop();
            this.push(temp);
        }
        return temp;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
