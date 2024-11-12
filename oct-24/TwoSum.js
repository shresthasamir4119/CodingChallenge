"use strict";
function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}
// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
