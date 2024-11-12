function findSingleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num;  // XOR each number with result
    }
    return result;  // The remaining number is the one that appears once
}

// Example
const NRE = [1, 1, 2, 3, 3, 4, 4];
console.log(findSingleNumber(NRE));  // Output: 2
