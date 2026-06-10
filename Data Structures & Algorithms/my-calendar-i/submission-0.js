class MyCalendar {
    constructor(L = 0, R = 0) {
        this.left = null;
        this.right = null;
        this.L = L;
        this.R = R;
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
        if(this.L === 0 && this.R === 0){
            this.left = new MyCalendar(0, 0);
            this.right = new MyCalendar(0, 0);
            this.L = startTime;
            this.R = endTime;
            return true;
        }

        if(startTime >= this.R){
            return this.right.book(startTime, endTime);
        }else if(endTime <= this.L){
            return this.left.book(startTime, endTime);
        } else{
            return false;
        }
        
    }
}
