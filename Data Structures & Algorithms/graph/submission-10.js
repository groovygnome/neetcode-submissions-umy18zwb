class Graph {
    constructor() {
        this.nodes = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!this.nodes.get(src)){
            this.nodes.set(src, new Set());
        }
        if(!this.nodes.get(dst)){
            this.nodes.set(dst, new Set());
        }
        this.nodes.get(src).add(dst);
        console.log(this.nodes);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if(!this.nodes.get(src) || !this.nodes.get(dst)){
            return false;
        }
        return this.nodes.get(src).delete(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {

        let visited = new Set();
        let queue = [];
        console.log(this.nodes.get(dst));
        if(this.nodes.get(src) === undefined || this.nodes.size === 0 || this.nodes.get(dst) === undefined) return false;

        queue.push(src);
        visited.add(src);

        while(queue.length > 0){
            let queueLength = queue.length;
            for(let i = 0; i < queueLength; i++){
                let curr = queue.shift();
                if(curr === dst) return true;
                let currList = this.nodes.get(curr);
                currList.forEach((node) =>{
                    if(!visited.has(node)){
                        queue.push(node);
                        visited.add(node);
                    }
                })

            }
        }

        return false;
    }
}
