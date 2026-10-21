function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap<number>();
    for(const n of nums){
        heap.insert(n);
        if(heap.size() > k) heap.extractRoot();
    }
    return heap.extractRoot();
};
/*
time - O(n logk)
space - O(k)
*/