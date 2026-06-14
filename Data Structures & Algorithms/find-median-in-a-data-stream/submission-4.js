class MedianFinder {
    constructor() {
        this.small = new Heap(false);
        this.large = new Heap(true);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.push(num);
        if(this.small.length() > 0 && this.large.length() > 0 && this.small.get(1) > this.large.get(1)){
            this.large.push(this.small.pop());
        }

        if(this.small.length() > this.large.length() + 1){
            this.large.push(this.small.pop());
        } else if(this.large.length() > this.small.length() + 1){
            this.small.push(this.large.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.small.length() > this.large.length()){
            return this.small.get(1);
        } else if(this.large.length() > this.small.length()){
            return this.large.get(1);
        }

        return (this.large.get(1) + this.small.get(1)) / 2.0;
    }
}

class Heap{

    constructor(min){
        this.array = [0];
        this.min = min;
    }

    push(val){
        if(this.array.length === 1) return this.array.push(val);

        this.array.push(val);
        let i = this.array.length-1;
        if(this.min){
            while(i > 1 && this.array[i] < this.array[Math.floor(i/2)]){
                let temp = this.array[i];
                this.array[i] = this.array[Math.floor(i/2)];
                this.array[Math.floor(i/2)] = temp;
                i = Math.floor(i/2)
            }
        } else{
            while(i > 1 && this.array[i] > this.array[Math.floor(i/2)]){
                let temp = this.array[i];
                this.array[i] = this.array[Math.floor(i/2)];
                this.array[Math.floor(i/2)] = temp;
                i = Math.floor(i/2)
            }
        }
    }

    pop(){
        let ans = this.array[1];
        this.array[1] = this.array[this.array.length-1];
        this.array.pop();
        let i = 1;
        if(this.min){
            while(i*2 < this.array.length){
                let swap;
                if(i*2+1 > this.array.length-1) swap = i*2;
                else this.array[i*2] === Math.min(this.array[i*2], this.array[i*2+1]) ? swap = i*2 : swap = i*2+1;
                if(this.array[i] > this.array[swap]){
                    let temp = this.array[i];
                    this.array[i] = this.array[swap];
                    this.array[swap] = temp;
                    i = swap;
                } else break;
             }
        } else{
            while(i*2 < this.array.length){
                let swap;
                if(i*2+1 > this.array.length-1) swap = i*2;
                else this.array[i*2] === Math.max(this.array[i*2], this.array[i*2+1]) ? swap = i*2 : swap = i*2+1;
                if(this.array[i] < this.array[swap]){
                    let temp = this.array[i];
                    this.array[i] = this.array[swap];
                    this.array[swap] = temp;
                    i = swap;
                } else break;
             }
        }

        return ans;
    }

    get(index){
        return this.array[index];
    }

    length(){
        return this.array.length-1;
    }
}
