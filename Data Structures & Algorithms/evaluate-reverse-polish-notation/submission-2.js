class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i < tokens.length; i++){
            let parsedInt = parseInt(tokens[i]);
            if(!isNaN(parsedInt)){
                stack.push(parsedInt);
            } else{
                let num2 = stack.pop();
                let num1 = stack.pop();
                if(num1 === undefined || num2 === undefined) return null;
                if(tokens[i] === '+'){
                    stack.push((num1 + num2));
                } else if(tokens[i] === '-'){
                    stack.push((num1 - num2));
                } else if(tokens[i] === '*'){
                    stack.push((num1 * num2));
                } else if(tokens[i] === '/'){
                    let newNum = num1 / num2;
                    if(newNum >= 0){
                        stack.push(Math.floor(newNum));
                    } else if(newNum < 0){
                        stack.push(Math.ceil(newNum));
                    }
                } 
            }
            console.log(stack);
        }
        return stack[0];
    }
}
