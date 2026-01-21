function shuffle(nums: number[], n: number): number[] {
    for(let i=0; i<n; i++){
        nums[i] = nums[i] | (nums[i+n]<<10);
    }
    for(let i=n-1; i>=0; i--){
        const x: number = nums[i]&1023;
        const y: number = nums[i]>>10;
        nums[(2*i)+1] = y;
        nums[2*i] = x;
    }
    return nums;
};
/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - more than 2 hours to reach this, from first i was trying to solve in O(1) space

Note:
    -> The technique used here is called BIT MASKING
    -> In total 32 bits required for an integer, the first 10 bits from left is used to store number
       in constraint it is given range is upto 1000, so only 10 bits is enough,
       in remaining bits we safely store the expected number (higher bits)
*/