class TimeMap {

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let curr = this.keyStore.get(key);
        if(curr === undefined){
            this.keyStore.set(key, [[value, timestamp]]);
        } else{
            curr.push([value, timestamp]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let curr = this.keyStore.get(key);
        if(curr === undefined){
            return '';
        } else{
            if(timestamp < curr.timeStamp) return '';
            let L = 0;
            let R = curr.length-1;
            while(L < R){
                let mid = Math.floor((R + L + 1)/2);
                if(curr[mid][1] > timestamp) R = mid-1;
                if(curr[mid][1] < timestamp) L = mid;
                if(curr[mid][1] === timestamp) return curr[mid][0];
           }
            if(L === R && curr[L][1] <= timestamp) return curr[L][0];
            else return '';
        }
    }
    
}
