/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        let adjMap = new Map();

        let nodeQueue = new Queue();
        nodeQueue.enqueue(node);
        let visited = new Set();

        while(nodeQueue.size() > 0){
            let queueLength = nodeQueue.size();
            for(let i = 0; i < queueLength; i++){
                let curr = nodeQueue.dequeue();
                visited.add(curr);
                if(!adjMap.get(curr.val)){
                    adjMap.set(curr.val, new Node(curr.val))
                }
                let newNeighbors = [];
                for(let j = 0; j < curr.neighbors.length; j++){
                    if(!adjMap.get(curr.neighbors[j].val)){
                        adjMap.set(curr.neighbors[j].val, new Node(curr.neighbors[j].val))
                    }
                    let newNeighbor = adjMap.get(curr.neighbors[j].val)
                    newNeighbors.push(newNeighbor);
                    if(!visited.has(curr.neighbors[j])){
                        nodeQueue.enqueue(curr.neighbors[j]);
                    }
                }
                visited.add(curr);
                adjMap.get(curr.val).neighbors = newNeighbors;

            }
        }

        return adjMap.get(node.val);
    }
}
