function threeSum(nums: number[]): number[][] {
    
    const triplets: number[][] = [];

    nums.sort((a, b) => a-b);

    for(let i=0; i<nums.length-2; i++){

        if(i && nums[i]===nums[i-1]) continue; // to skip duplicate values

        const target = -nums[i];
        let j = i+1, k = nums.length-1;
        while(j < k){
            const sum = nums[j] + nums[k];
            if(sum === target){
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j<k && nums[j]===nums[j-1]){ // to skip duplicate values
                    j++;
                }
                while(j<k && nums[k]===nums[k+1]){ // to skip duplicate values
                    k--;
                }
            }
            else if(sum < target)
                j++;
            else 
                k--;
        }
    }

    return triplets;
};

/*
Time complexity - O(n^2)
Space complexity - O(n^2) -> total possible triplets
*/