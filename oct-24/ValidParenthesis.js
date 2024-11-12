"use strict";
function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) { //checking for last stack element in the bracketmap
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
const s1 = "()";
console.log(isValid(s1));
const s2 = "()[]{}";
console.log(isValid(s2));
const s3 = "(]";
console.log(isValid(s3));
const s4 = "([])";
console.log(isValid(s4));
