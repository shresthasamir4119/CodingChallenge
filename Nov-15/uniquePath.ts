function paths(m: number, n: number): number {
    // Initialize a 2D array dp with 1s
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(1));
  
    // Populate the dp array
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  
    // Return the value in the bottom-right corner
    return dp[m - 1][n - 1];
  }
  
  // Example usage
  console.log(paths(3, 7));  // Output: 28
  console.log(paths(3, 2));  // Output: 3
  