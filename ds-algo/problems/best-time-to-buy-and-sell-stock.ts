function maxProfit(prices: number[]): number {
    
    let maxProfit = 0;
    let minPriceTillToday = prices[0];
    
    for(const price of prices){
        if(price < minPriceTillToday){
            minPriceTillToday = price;
        }
        maxProfit = Math.max(maxProfit, price-minPriceTillToday);
    }

    return maxProfit;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/