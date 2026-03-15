// Array contains only positive numbers

function subarraysWithSumLessThanK(nums: number[], k: number){
    let count = 0;
    let windowSum = 0;
    let left = 0;
    for(let right=0; right<nums.length; right++){
        windowSum += nums[right];
        while(windowSum >= k){
            windowSum -= nums[left];
            left++;
        }
        count += right-left+1;
    }
    return count;
}