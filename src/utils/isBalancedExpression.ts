function isBalancedExpression(expression: string): boolean {
    const stack: string[] = [];
    const parentheses: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of expression) {
        if (parentheses[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const lastOpenedParentheses = stack.pop();
            if (!lastOpenedParentheses || parentheses[lastOpenedParentheses] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

export default isBalancedExpression;