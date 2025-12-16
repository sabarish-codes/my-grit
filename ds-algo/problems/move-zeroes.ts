/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0, index = 0;
    while(i < nums.length){
        if(nums[i] !== 0){
            let temp = nums[i];
            nums[i] = 0;
            nums[index] = temp;
            index++;
        }
        i++;
    }
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 29m 31s
*/