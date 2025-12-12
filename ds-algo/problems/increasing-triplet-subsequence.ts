function increasingTriplet(nums: number[]): boolean {
    
    if(nums.length < 3) return false;

    let firstElement = nums[0];
    let secondElement = null;
    for(let i=0; i<nums.length; i++){

        //if current element < first element, change the first element
        if(nums[i] < firstElement) firstElement = nums[i];

        //if current element > firste element but < second element, change second element
        if(nums[i]>firstElement && (secondElement===null || nums[i]<secondElement))
            secondElement = nums[i];

        //if current element > second element mean we found the triplet 
        if(secondElement!==null && nums[i]>secondElement) return true;
    }
    return false;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 24m 52s
*/