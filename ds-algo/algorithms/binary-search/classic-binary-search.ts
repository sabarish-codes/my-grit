
function binarySearch(nums: number[], target: number): number {

    let low = 0, high = nums.length-1;

    while(low <= high){
        const mid = low + Math.floor((high-low)/2);
        if(nums[mid] === target){
            return mid;
        }
        else if (nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

/*
Key points: 
    -> Avoid mid = (high+low) / 2 to avoid integer overflow
    -> use low <= high in while loop to avoid single element cases
    -> off-by-one on elimination , on using low=mid or high=mid may cause infinite loops
*/