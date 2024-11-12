"use strict";
function mergeAlternately(word1, word2) {
    let i = 0, j = 0;
    let result = [];
    while (i < word1.length && j < word2.length) {
        result.push(word1[i]);
        result.push(word2[j]);
        i++;
        j++;
    }
    if (i < word1.length) {
        result.push(word1.slice(i));
    }
    if (j < word2.length) {
        result.push(word2.slice(j));
    }
    return result.join('');
}
console.log(mergeAlternately("Hello", "World")); // Output: "HWelolrld"
console.log(mergeAlternately("A", "BCD")); // Output: "ABCD"
