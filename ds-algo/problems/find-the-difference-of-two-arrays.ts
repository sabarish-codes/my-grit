function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);
    const list1: number[] = [], list2: number[] = [];
    set1.forEach(n => !set2.has(n) ? list1.push(n) : null);
    set2.forEach(n => !set1.has(n) ? list2.push(n) : null);
    return [list1, list2];
};
/*
Time complexity - O(n+m)
Space complexity - O(n+m)
Time taken - 15m
*/