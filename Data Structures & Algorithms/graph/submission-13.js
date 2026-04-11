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
        let nodeQueue = new Queue();
        if(this.nodes.get(src) === undefined || this.nodes.size === 0 || this.nodes.get(dst) === undefined) return false;

        nodeQueue.enqueue(src);
        visited.add(src);

        while(nodeQueue.size() > 0){
            let queueLength = nodeQueue.size();
            for(let i = 0; i < queueLength; i++){
                let curr = nodeQueue.dequeue();
                if(curr === dst) return true;
                let currList = this.nodes.get(curr);
                currList.forEach((node) =>{
                    if(!visited.has(node)){
                        nodeQueue.enqueue(node);
                        visited.add(node);
                    }
                })

            }
        }

        return false;
    }
}
