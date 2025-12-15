function findMaxAverage(nums: number[], k: number): number {
    let sum = 0, maxAverage = Number.MIN_VALUE;
    //upto k, first window
    for(let i=0; i<k; i++)
        sum += nums[i];
    maxAverage = sum/k;
    for(let i=k; i<nums.length; i++){
        sum += nums[i]; //add the current element
        sum -= nums[i-k] //subtract the first element of window
        const average = sum/k; //current window average value
        maxAverage = average>maxAverage ? average : maxAverage;
    }
    return maxAverage;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 23m 59s
*/