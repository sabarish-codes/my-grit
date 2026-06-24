function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    
    const m = nums1.length, n = nums2.length;
    const k = Math.floor((m+n+1) / 2);
    let low = 0, high = m;

    while(low <= high){
        const i = low + Math.floor((high-low) / 2);
        const j = k-i;

        const left1 = i>0 ? nums1[i-1] : -Infinity;
        const right1 = i<m ? nums1[i] : Infinity;
        const left2 = j>0 ? nums2[j-1] : -Infinity;
        const right2 = j<n ? nums2[j] : Infinity;

        if(left1 > right2)
            high = i-1;
        else if(left2 > right1)
            low = i+1;
        else{
            if((m+n)%2 === 1)
                return Math.max(left1, left2);
            else
                return ((Math.max(left1, left2) + Math.min(right1, right2)) / 2);
        }
    }
    return -1;
};

/*
Time complexity - log(min(m, n))
Space complexity - O(1)

Notes:
    -> half_length/k = m+n+1 / 2, because to handle odd number and always left partition contain odd number of elements
    -> Elements on left = half_len or k (k smallest element in both arrays)
    -> i, j belong to the right partition side and i acts as mid for array1, using i we derive j
    -> Start high = m, not m-1 because special edge where all elements in array1 belong to left partition, so to handle it make high=m
*/
