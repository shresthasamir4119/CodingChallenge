function largestPrimeFactor(n: number): number {
    let largestFactor = 1;

    // Remove factors of 2
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Try odd factors from 3 to sqrt(n)
    let factor = 3;
    while (factor * factor <= n) {
        while (n % factor === 0) {
            largestFactor = factor;
            n /= factor;
        }
        factor += 2;  // Only check odd numbers
    }

    // If n is still greater than 2, then n itself is prime
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

console.log(largestPrimeFactor(13195));  // Output: 29

console.log(largestPrimeFactor(600851475143));  // Output: 6857
