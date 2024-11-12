"use strict";
function evaluatePrefix(expression) {
    // Split the expression into tokens
    const tokens = expression.trim().split(/\s+/);
    // Stack to hold operands
    const stack = [];
    // Process the tokens in reverse order
    for (let i = tokens.length - 1; i >= 0; i--) {
        const token = tokens[i];
        // If the token is an operator
        if (['+', '-', '*', '/'].includes(token)) {
            if (stack.length < 2) {
                return null; // Invalid expression, not enough operands
            }
            // Pop two operands from the stack
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            // Apply the operator and push the result back to the stack
            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    if (operand2 === 0) {
                        return null; // Division by zero
                    }
                    result = operand1 / operand2;
                    break;
                default:
                    return null; // Unknown operator
            }
            stack.push(result);
        }
        else {
            // If the token is a number, try to convert it to an integer
            const number = parseInt(token, 10);
            // If the token is not a valid number, return null
            if (isNaN(number)) {
                return null;
            }
            stack.push(number);
        }
    }
    // At the end, there should be exactly one value left in the stack
    if (stack.length !== 1) {
        return null; // Invalid expression, too many or too few values
    }
    // Return the final result
    return stack.pop();
}
// Example usage:
console.log(evaluatePrefix("+ 5 3")); // Should return 8
console.log(evaluatePrefix("* + 2 3 4")); // Should return 20
console.log(evaluatePrefix("- 10 / 20 4")); // Should return 5
console.log(evaluatePrefix("/ + 1 1 - 5 2")); // Should return 1
console.log(evaluatePrefix("+ 5")); // Should return null (invalid)
