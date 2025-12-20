function pivotIndex(nums: number[]): number {
    const totalSum: number = nums.reduce((acc, n) => acc += n, 0);
    let leftSum: number = 0, rightSum: number;
    for(let i=0; i<nums.length; i++){
        rightSum = totalSum - leftSum - nums[i];
        if(leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
}; 
/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - around 10m
*/