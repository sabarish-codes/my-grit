function longestSubarray(nums: number[]): number {
    let left: number = 0, right: number = 0;
    let longest: number = 0;
    let k: number = 1;
    while(right < nums.length){
        if(nums[right] === 0){
            if(k > 0) k--;
            else{
                while(nums[left] === 1) left++;
                left++;
            }
        }
        longest = Math.max(longest, right-left);
        right++;
    }
    return longest;
};
/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 10m 12s
*/