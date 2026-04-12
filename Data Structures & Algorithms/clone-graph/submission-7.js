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

        while(nodeQueue.size() > 0){
            let queueLength = nodeQueue.size();
            for(let i = 0; i < queueLength; i++){
                let curr = nodeQueue.dequeue();
                if(!adjMap.get(curr.val)){
                    adjMap.set(curr.val, new Node(curr.val))
                }
                let newNeighbors = [];
                for(let j = 0; j < curr.neighbors.length; j++){
                    if(!adjMap.get(curr.neighbors[j].val)){
                        adjMap.set(curr.neighbors[j].val, new Node(-1))
                    }
                    let newNeighbor = adjMap.get(curr.neighbors[j].val)
                    newNeighbors.push(newNeighbor);
                    if(newNeighbor.val === -1){
                        nodeQueue.enqueue(curr.neighbors[j]);
                    }
                    newNeighbor.val = curr.neighbors[j].val;
                }
                adjMap.get(curr.val).neighbors = newNeighbors;

            }
        }

        return adjMap.get(node.val);
    }
}
