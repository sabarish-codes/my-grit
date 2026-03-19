function maxProfit(prices: number[]): number {
    let overallProfit = 0;
    for(let i=1; i<prices.length; i++){
        const todayProfit = prices[i]-prices[i-1];
        if(todayProfit > 0){
            overallProfit += todayProfit;
        }
    }
    return overallProfit;
};

/*
Time complexity - O(n) linear
Space complexity - O(1) constant
*/