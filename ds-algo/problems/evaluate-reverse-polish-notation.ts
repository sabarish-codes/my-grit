function evalRPN(tokens: string[]): number {
    
    const stack: number[] = [];
    const operators = '+-*/';

    for(const t of tokens){
        if(operators.indexOf(t) === -1){
            stack.push(Number(t));
            continue;
        }
        const rightOperand = stack.pop()!;
        const leftOperand = stack.pop()!;
        switch(t){
            case '+':
                stack.push(leftOperand + rightOperand);
                break;
            case '-':
                stack.push(leftOperand - rightOperand);
                break;
            case '*':
                stack.push(leftOperand * rightOperand);
                break;
            case '/':
                stack.push(Math.trunc(leftOperand / rightOperand));
                break;
        }
    }
    return stack.pop()!;
};