class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++){
            let c = tokens[i];
            if(c === '+') stack.push(stack.pop() + stack.pop());
            else if(c === '-') stack.push((-1*stack.pop()) + stack.pop());
            else if(c === '*') stack.push(stack.pop() * stack.pop());
            else if(c === '/') {
                let q = (1/stack.pop()) * stack.pop();
                if(q >= 0) stack.push(Math.floor(q));
                else stack.push(Math.ceil(q));
            }
            else stack.push(Number(c));
        }

        return stack[0];
    }
}
