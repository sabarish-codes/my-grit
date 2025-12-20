function longestOnes(nums: number[], k: number): number {
    
    let maxCount: number = 0;
    let left: number = 0, right: number = 0;
    while(right < nums.length){
        if(nums[right] === 0){
            if(k > 0) k--;
            else{
                // shift the left after the first 0 index, just cross the first 0
                // so that always atmost k zeros exist in window
                while(nums[left] === 1) left++;
                left++;
            }
        }
        maxCount = Math.max(maxCount, right-left+1);
        right++;
    }
    return maxCount;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - more than 120m , this question told straight to my face i am dumb
*/