class TreeNode {
    constructor(key, val, left = null, right = null){
        this.key = key;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        this.root = this.insertHelper(key, val);
    }

    insertHelper(key, val, root = this.root){
        if(!root) root = new TreeNode(key, val);

        if(key < root.key){
            root.left = this.insertHelper(key, val, root.left);
        } else if(key > root.key){
            root.right = this.insertHelper(key, val, root.right);
        } else if(key === root.key){
            root.key = key;
            root.val = val;
        }

        return root;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if(!this.root) return -1;
        let curr = this.root;
        while(curr){
            if(key < curr.key){
                curr = curr.left;
            }
            else if(key > curr.key){
                curr = curr.right;
            }
            else if(key === curr.key){
                return curr.val;
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if(!this.root) return -1;
        let curr = this.root;
        while(curr.left){
            curr = curr.left;
        }
        return curr.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        if(!this.root) return -1;
        let curr = this.root;
        while(curr.right){
            curr = curr.right;
        }
        return curr.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        if(!this.root) return null;
        this.root = this.removeHelper(key);
    }

    removeHelper(key, root = this.root){
        if(!root) return null;

        if(root.key === key){
            if(root.left && root.right){
                let succ = this.findSucc(root);
                let succVal = succ.val;
                let succKey = succ.key;
                root.right = this.removeHelper(succKey, root.right);
                root.key = succKey;
                root.val = succVal;
            } else if(!root.left && root.right){
                root = root.right;
            } else if(root.left && !root.right){
                root = root.left;
            } else if(!root.left && !root.right){
                root = null;
            }
        } else if(key < root.key){
            root.left = this.removeHelper(key, root.left);
        } else if(key > root.key){
            root.right = this.removeHelper(key, root.right);
        }

        return root;

    }

    findSucc(root){
        let succ = root.right;

        while(succ.left){
            succ = succ.left;
        }

        return succ;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(root = this.root, answer = []) {
        if(!root) return [];

        this.getInorderKeys(root.left, answer);
        answer.push(root.key);
        this.getInorderKeys(root.right, answer);

        return answer;
    }
}
