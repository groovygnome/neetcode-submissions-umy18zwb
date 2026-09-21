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
        if(node === null) return null;
        console.log(node);
        return this.cloneHelper(node);
    }

    cloneHelper(curr, path = {}){
        if(path[curr.val]) return path[curr.val];
        let neighbors = [];

        path[curr.val] = new Node(curr.val, neighbors);

        for(let neighbor of curr.neighbors){
            neighbors.push(this.cloneHelper(neighbor, path));
        }

        return path[curr.val];
    }
}
