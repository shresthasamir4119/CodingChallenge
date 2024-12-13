function findFirstUniqueChar(str: string): string | number {
  const charFrequency: { [char: string]: number } = {};

  // Count the occurrences of each character in the string
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character that appears exactly once
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // If no unique character exists, return -1
  return -1;
}

const input1 = "swiss";
console.log(findFirstUniqueChar(input1)); // Should return 'w'

const input2 = "aabbcc";
console.log(findFirstUniqueChar(input2)); // Should return -1
