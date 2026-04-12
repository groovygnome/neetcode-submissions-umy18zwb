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
        let adjArray = [0];

        let nodeQueue = new Queue();
        nodeQueue.enqueue(node);
        let visited = new Set();

        while(nodeQueue.size() > 0){
            let queueLength = nodeQueue.size();
            for(let i = 0; i < queueLength; i++){
                let curr = nodeQueue.dequeue();
                visited.add(curr);
                if(curr.val > adjArray.length-1){
                    for(let k = adjArray.length-1; k < curr.val; k++){
                        adjArray.push(new Node(k+1));
                    }
                }
                let newNeighbors = [];
                for(let j = 0; j < curr.neighbors.length; j++){
                    if(curr.neighbors[j].val > adjArray.length-1){
                        for(let k = adjArray.length-1; k < curr.neighbors[j].val; k++){
                            adjArray.push(new Node(k+1));
                        }
                    }
                    let newNeighbor = adjArray[curr.neighbors[j].val]
                    newNeighbors.push(newNeighbor);
                    if(!visited.has(curr.neighbors[j])){
                        nodeQueue.enqueue(curr.neighbors[j]);
                    }
                }
                visited.add(curr);
                adjArray[curr.val].neighbors = newNeighbors;

            }
        }

        return adjArray[1];
    }
}
