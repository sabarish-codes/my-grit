function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = new Array(n);
    answer[0] = 1;
    for(let i=1; i<n; i++)
        answer[i] = answer[i-1] * nums[i-1];
    let suffixProduct: number = 1;
    for(let i=n-1; i>=0; i--){
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    return answer;
};

/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 10m

Note:
    -> To initialize array: const a = new Array(length).fill(default value)
    -> Eg: const a = new Array(5).fill(0)
*/