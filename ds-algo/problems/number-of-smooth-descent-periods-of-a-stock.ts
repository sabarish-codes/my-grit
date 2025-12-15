function getDescentPeriods(prices: number[]): number {
    let count = prices.length;
    let prev = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i-1]-prices[i] === 1)
            prev++;
        else
            prev = 0;
        if(prev > 1)
            count += prev;
        else if(prev === 1)
            count++;
    }
    return count;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - around 8m

i have no idea that my solution is dynamic programming or not, at this point i dont know dp
*/