// Bounds - to find first occurrence, last occurrence, count of all occurrences, etc

function lowerBound(nums: number[], target: number){
    let low = 0;
    let high = nums.length - 1;
    while(low < high){
        const mid = low + Math.floor((high-low) / 2);
        if(nums[mid] >= target)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}

function upperBound(nums: number[], target: number){
    let low = 0;
    let high = nums.length - 1;
    while(low < high){
        const mid = low + Math.ceil((high-low) / 2);
        if(nums[mid] <= target)
            low = mid;
        else
            high = mid - 1;
    }
    return high;
}

function countOccurrences(nums: number[], target: number){
    const firstOccurrence = lowerBound(nums, target);
    if(nums[firstOccurrence] !== target){ // target doesn't exist in nums
        return 0;
    }
    const lastOccurrence = upperBound(nums, target);
    const count = lastOccurrence - firstOccurrence + 1;
    return count;
}

function exactMatch(nums: number[], target: number){
    const index = lowerBound(nums, target); // It returns the index if present or the insert position if absent
    if(nums[index] !== target){
        return -1;
    }
    return index;
}

/*
Note:
    To handle empty arrays [] and undefined , have a guard before the logic
    if(!nums || !nums.length) return -1;
    Add undefined type to nums like - nums: number[] | undefined
*/