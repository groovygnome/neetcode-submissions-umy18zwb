class Pair{
    constructor(key, val){
        this.key = key;
        this.val = val;
    }
}

class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.hashMap = new Array(this.capacity).fill(null);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let newEntry = new Pair(key, value);
        let index = key % this.capacity;
        if(!this.hashMap[index]){
            this.hashMap[index] = newEntry;
            this.size++;
        } else{
            if(this.hashMap[index].key === -1){
                this.hashMap[index] = newEntry;
                this.size++;
            }
            for(let i = index; i < this.hashMap.length; i++){
                if(!this.hashMap[i]){
                    this.hashMap[i] = newEntry;
                    this.size++;
                    break;
                } else if(this.hashMap[i].key === -1){
                    this.hashMap[i] = newEntry;
                    this.size++;
                    break;
                } else if(this.hashMap[i].key === key){
                    this.hashMap[i].val = value;
                    break;
                }
            }
        }

        if(this.size >= Math.floor(this.capacity/2)){
            this.resize();
        }
    }

    resize(){
        this.capacity *= 2;
        this.size = 0;
        let newMap = new Array(this.capacity).fill(null);
        let temp = this.hashMap;
        this.hashMap = newMap;
        for(let i = 0; i < temp.length; i++){
            if(temp[i]) this.insert(temp[i].key, temp[i].val);
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = key % this.capacity;
        for(let i = index; this.hashMap[i]; i++){
            if(this.hashMap[i].key === key){
                return this.hashMap[i].val;
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let index = key % this.capacity;
        for(let i = index; i < this.hashMap.length; i++){
            if(!this.hashMap[i]) return false;
            if(this.hashMap[i].key === key){
                this.hashMap[i].key = -1;
                this.hashMap[i].val = -1;
                this.size--;
                console.log(this.hashMap);
                return true;
            }
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
