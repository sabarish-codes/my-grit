/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

    const map = new Map(); // create a new map object to store {value: index}

    map.set(nums[0], 0); // add the first element in map {value: 0}

    for(let i=1; i<nums.length; i++){
        const difference = target-nums[i]; 

        // if the target-currentElement exists in map then we found the pair, or add in map
        if(map.has(difference)){
            return [map.get(difference), i];
        }
        map.set(nums[i], i);
    }
}
/*
Time complexity - O(n)
Space complexity - O(n)
*/