function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    let dp1 = cost[0];  // Represents the cost to reach the first step
    let dp2 = cost[1];  // Represents the cost to reach the second step
    
    for (let i = 2; i < n; i++) {
        // Calculate the minimum cost to reach the current step
        let currentCost = Math.min(dp1, dp2) + cost[i];
        dp1 = dp2;  // Update dp1 to be the cost of the second last step
        dp2 = currentCost;  // Update dp2 to be the cost of the last step
    }
    
    // Return the minimum of the cost to reach the last or second last step
    return Math.min(dp1, dp2);
}
