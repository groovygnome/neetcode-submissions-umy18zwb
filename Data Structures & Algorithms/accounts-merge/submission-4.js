class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        let parents = new Map();
        let emails = accounts.map((account) => new Set([account[0]]));

        for (let i = 0; i < accounts.length; i++) {
            parents.set(i, i);
            for (let j = 1; j < accounts[i].length; j++) {
                if (parents.get(accounts[i][j]) === undefined) {
                    parents.set(accounts[i][j], i);
                } else {
                    let p = this.find(accounts[i][j], parents);
                    if (p != i) parents.set(p, i);
                }
            }
        }


        let answers = new Map();

        for (let i = 0; i < accounts.length; i++) {
            answers.set(i, new Set([accounts[i][0]]));
        }

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                let user = this.find(accounts[i][j], parents);
                answers.set(user, answers.get(user).add(accounts[i][j]));
            }
            answers.set(i, answers.get(i).values().toArray());
        }

        return (answers.values().toArray().filter((account) => account.length > 1));
    }

    find(curr, parents) {
        while (curr != parents.get(curr)) {
            parents.set(curr, parents.get(parents.get(curr)));
            curr = parents.get(curr);
        }

        return curr;
    }
}
