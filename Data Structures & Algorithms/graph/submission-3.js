class Node {
    constructor(val){
        this.val = val;
        this.edges = new Map();
    }

    getEdges(){
        return this.edges;
    }

    addEdge(node){
        this.edges.set(node.val, node);
    }

    getEdge(val){
        return this.edges.get(val);
    }

    removeEdge(val){
        if(this.edges.get(val) === undefined){
            return false;
        } else{ 
            this.edges.delete(val);
            return true;
        }
    }
}

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
        let source = this.nodes.get(src);
        if(source === undefined){
            this.nodes.set(src, new Node(src));
            source = this.nodes.get(src);
        }
        let dest = this.nodes.get(dst);
        if(dest === undefined){
            this.nodes.set(dst, new Node(dst));
            dest = this.nodes.get(dst);
        }
        if(source.getEdge(dst) === undefined) source.addEdge(dest);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        let source = this.nodes.get(src);
        let dest = this.nodes.get(dst);
        if(source === undefined || dest === undefined) return false;
        return source.removeEdge(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst, visited = new Set()) {
        if(visited.has(src)) return false;
        if(src === dst) return true;
        let source = this.nodes.get(src);
        let edges = source.getEdges();
        if(source === undefined || edges.size === 0 || this.nodes.get(dst) === undefined) return false;

        visited.add(src);

        let hasPath = false;

        edges.forEach((edge) =>{
            hasPath = hasPath || this.hasPath(edge.val, dst, visited);
        })

        return hasPath;
    }
}
