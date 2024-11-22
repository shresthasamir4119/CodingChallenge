function isAnagram(s: string, t: string): boolean {
    // If lengths differ, they can't be anagrams
    if (s.length !== t.length) {
      return false;
    }
  
    // Create a map to count character occurrences
    const charCount: { [key: string]: number } = {};
  
    // Count characters in the first string
    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Check characters in the second string
    for (const char of t) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    // Verify all counts are zero
    return Object.keys(charCount).every(key => charCount[key] === 0);
  }
  
  // Example usage
  console.log(isAnagram("anagram", "nagaram")); // Output: true
  console.log(isAnagram("rat", "car"));         // Output: false
  