class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        console.log(this.heapify(points));
        let ans = [];
        while(k > 0){
            ans.push(this.popHeap(points));
            k--;
        }

        return ans;
    }

    heapify(points){
        points.push(points[0]);
        points[0] = [0,0];

        let curr = Math.floor(points.length/2);
        while(curr != 0){
            let i = curr;
            let leftIndex = i*2;
            let rightIndex = leftIndex+1;
            let mIndex = leftIndex;
            if(rightIndex < points.length && this.distance(points[rightIndex]) < this.distance(points[leftIndex])) mIndex = rightIndex;
            while(mIndex < points.length && this.distance(points[i]) > this.distance(points[mIndex])){
                let temp = points[i];
                points[i] = points[mIndex];
                points[mIndex] = temp;

                i = mIndex;
                leftIndex = i*2;
                rightIndex = leftIndex+1;
                if(rightIndex < points.length && this.distance(points[rightIndex]) < this.distance(points[leftIndex])) mIndex = rightIndex;
            }
            curr--;
        }
        return points;
    }

    pushHeap(points, val){

    }

    popHeap(points){
        if(points.length === 1){
            return -1;
        }

        if(points.length === 2){
            return points.pop();
        }

        let ans = points[1];
        points[1] = points[points.length-1];
        points.pop();

        let i = 1
        let leftIndex = i*2;
        let rightIndex = leftIndex+1;
        let mIndex = leftIndex;
        if(points[rightIndex] && this.distance(points[rightIndex]) < this.distance(points[leftIndex])) mIndex = rightIndex;
        
        while(mIndex < points.length && this.distance(points[i]) > this.distance(points[mIndex])){
            let temp = points[i];
            points[i] = points[mIndex];
            points[mIndex] = temp;

            i = mIndex;
            leftIndex = i*2;
            rightIndex = leftIndex+1;
            if(rightIndex < points.length && this.distance(points[rightIndex]) < this.distance(points[leftIndex])) mIndex = rightIndex;
        }
        return ans;
    }

    distance(coords){
        return Math.sqrt((coords[0] - 0)**2 + (coords[1] - 0)**2);
    }
}
