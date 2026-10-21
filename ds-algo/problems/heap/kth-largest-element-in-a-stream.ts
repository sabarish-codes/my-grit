class KthLargest {
    private minheap: MinHeap<number>;
    private capacity: number;

    constructor(k: number, nums: number[]) {
        this.minheap = new MinHeap<number>();
        this.capacity = k;
        for(const n of nums){
            this.minheap.insert(n);
            if(this.minheap.size() > this.capacity) this.minheap.extractRoot();
        }
    }

    add(val: number): number {
        this.minheap.insert(val);
        if(this.minheap.size() > this.capacity) this.minheap.extractRoot();
        return this.minheap.root()!;
    }
}
/*
time - O(n logk)
space - O(k)
*/

class MinHeap<T extends number> {
    private heap: T[];
    
    constructor() {
        this.heap = [];
    }

    size(): number {
        return this.heap.length;
    }

    root(): T | undefined {
        return this.heap[0] ?? undefined;
    }

    insert(val: T) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractRoot(): T | undefined {
        if(this.heap.length <= 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root;
    }

    private swap(idx1: number, idx2: number) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    private heapifyUp(){
        let childIdx = this.heap.length-1;
        while(childIdx > 0){
            const parentIdx = Math.floor((childIdx-1) / 2);
            if(this.heap[parentIdx] <= this.heap[childIdx]) break;
            this.swap(childIdx, parentIdx);
            childIdx = parentIdx;
        }
    }

    private heapifyDown() {
        let parentIdx = 0;
        while(true){
            const leftChildIdx = (2*parentIdx) + 1;
            const rightChildIdx = (2*parentIdx) + 2;
            const leftChildExists = leftChildIdx < this.heap.length;
            const rightChildExists = rightChildIdx < this.heap.length;

            let smallest = parentIdx;
            if(leftChildExists && this.heap[leftChildIdx]<this.heap[smallest])
                smallest = leftChildIdx;
            if(rightChildExists && this.heap[rightChildIdx]<this.heap[smallest])
                smallest = rightChildIdx;
            if(smallest === parentIdx) break;
            this.swap(smallest, parentIdx);
            parentIdx = smallest;
        }
    }
}