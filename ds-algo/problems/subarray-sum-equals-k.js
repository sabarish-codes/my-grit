/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {

    let count = 0;
    let map = new Map(); // hashmap to store sum: frequency of that sum in array
    let sum = 0;
    map.set(0,1); // sum 0:1 , 0 is present once before starting

    nums.forEach((num) => {
        sum += num;
        const rem = sum-k;

        if(map.has(rem)){
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0)+1);
        // if sum already present get the value and add 1, if not set 1 (0+1)
    })
    return count;
}
/*
Time complexity - O(n)
Space complexity - O(n)
Approach: Instead of iterating each sum[right]-sum[left] and check=k, just if we use hashmap we can see if sum[right]-k exists in hashmap(sum[left]). This is done in O(1) which reduces the extra O(n).
*/


/*
Approach : Prefix sum and subtract sum[right] - sum[left] for each size like a window and check
    Time complexity - O(n^2)
    Space complexity - O(n)

const subarraySum = (nums, k) => {

    let count = 0;
    let prefixSum = [];
    prefixSum.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        const sum = prefixSum[i - 1] + nums[i];
        prefixSum.push(sum);
    }

    let sum;
    for (let size = 1; size <= nums.length; size++) {

        // checking the first element for each size here, no need to subtract in inner for loop
        if (prefixSum[size - 1] === k) {
            count++;
        }

        for (start = size; start < nums.length; start++) {
            sum = prefixSum[start] - prefixSum[start - size];
            if (sum === k)
                count++;
        }
    }
    return count;
}
*/