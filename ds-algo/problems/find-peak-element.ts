function findPeakElement(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length-1;
    while(low <= high){
        const mid: number = low + Math.floor((high-low)/2);
        const leftOk: boolean = mid===0 || nums[mid]>nums[mid-1];
        const rightOk: boolean = mid===nums.length-1 || nums[mid]>nums[mid+1];
        if(leftOk && rightOk)
            return mid;
        else if(leftOk)
            low = mid+1;
        else
            high = mid-1;
    }
    return -1;
};

/*
Time complexity - O(log n)
Space complexity - O(1)
Time taken - 17m 3s
*/