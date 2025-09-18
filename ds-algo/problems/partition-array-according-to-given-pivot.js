/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {

    const result = Array(nums.length).fill(0);
    let smallerIndex = 0, greaterIndex = nums.length-1;
    
    for(let i=0,j=nums.length-1; i<nums.length; i++,j--){
        if(nums[i] < pivot){
            result[smallerIndex++] = nums[i];
        }
        if(nums[j] > pivot){
            result[greaterIndex--] = nums[j];
        }
    }

    while(smallerIndex <= greaterIndex){  // remaining elements is the pivot itself
        result[smallerIndex++] = pivot;
    }
    return result;
}

/*
Time complexity - O(n)
Space complexity - O(n)
*/