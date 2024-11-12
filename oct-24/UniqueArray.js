"use strict";
function findUnique(arr) {
    const frequencyMap = new Map();
    arr.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    return arr.filter(num => frequencyMap.get(num) === 1);
}
const input = [4, 3, 2, 4, 1, 3, 5, 6, 5];
const output = findUnique(input);
console.log(output); // Output: [2, 1, 6]
