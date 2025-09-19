/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {

    const map = new Map();
    map.set(nums[0], 0); // key is array element, value is index of element

    for(let i=1; i<nums.length; i++){
        if( map.has(nums[i]) && (Math.abs(map.get(nums[i]) - i) <= k) )
            return true;
        else
            map.set(nums[i], i);
    }
    return false;
};

/*
Time complexity - O(n)
Space complexity - O(n)
*/