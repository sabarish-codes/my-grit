function lastStoneWeight(stones: number[]): number {
    const heap = new MaxHeap<number>();
    for(const s of stones) heap.insert(s);
    while(heap.size() > 1){
        const x = heap.extractRoot();
        const y = heap.extractRoot();
        heap.insert(x-y); 
    }
    return heap.extractRoot();
};
/*
time - O(n logn)
space - O(n)
*/