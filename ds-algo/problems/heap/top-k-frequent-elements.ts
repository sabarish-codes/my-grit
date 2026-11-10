function topKFrequent(nums: number[], k: number): number[] {
    type heapObject = {n: number, freq: number}
    const map = new Map<number, number>();
    const heap = new MinHeap<heapObject>((i: heapObject) => i.freq);
    for(const n of nums) map.set(n, (map.get(n) ?? 0) + 1);
    for(const [key, value] of map.entries()){
        heap.insert({n: key, freq: value});
        if(heap.size() > k) heap.extractRoot();
    }
    const result: number[] = [];
    while(heap.size()) result.push(heap.extractRoot().n);
    return result;
};
/*
time - O(n logk)
space - O(n)
*/
