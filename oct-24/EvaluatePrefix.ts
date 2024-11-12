function evaluatePrefix(expression: string): number | null {
    const tokens = expression.trim().split(/\s+/);
  
    const stack: number[] = [];
  
    // Process the tokens in reverse order
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
  
      if (['+', '-', '*', '/'].includes(token)) {
        if (stack.length < 2) {
          return null;
        }
  
        const operand1 = stack.pop()!;
        const operand2 = stack.pop()!;
  
        let result: number;
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
            return null;
        }
        stack.push(result);
      } else {
        const number = parseInt(token, 10);
  
        if (isNaN(number)) {
          return null;
        }
  
        stack.push(number);
      }
    }

    if (stack.length !== 1) {
      return null;
    }
  
    return stack.pop()!;
  }
  
  console.log(evaluatePrefix("+ 5 3"));      // Should return 8
  console.log(evaluatePrefix("* + 2 3 4"));  // Should return 20
  console.log(evaluatePrefix("- 10 / 20 4"));// Should return 5
  console.log(evaluatePrefix("/ + 1 1 - 5 2"));// Should return 1 but returns 0.667 which should be the answer
  console.log(evaluatePrefix("+ 5"));        // Should return null (invalid)
  