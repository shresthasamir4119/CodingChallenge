function maxProfit(prices: number[]): number {
    let minPrice = Infinity;  // The lowest price encountered so far
    let maxProfit = 0;  // The maximum profit we can achieve
    
    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if we find a lower price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        // Calculate potential profit if we sell at current price
        const potentialProfit = prices[i] - minPrice;
        
        // Update maxProfit if the current potential profit is greater
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
    }
    
    return maxProfit;  // Return the maximum profit
}
