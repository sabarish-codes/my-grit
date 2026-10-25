class MedianFinder {
    private low: MaxHeap<number>;
    private high: MinHeap<number>;

    constructor() {
        this.low = new MaxHeap<number>();
        this.high = new MinHeap<number>();
    }

    addNum(num: number): void {
        if(this.low.size()===0 || num<=this.low.root()) this.low.insert(num);
        else this.high.insert(num);

        // check size difference -> high <= low <= high+1
        if(this.low.size() > 1+this.high.size()) this.high.insert(this.low.extractRoot());
        else if(this.high.size() > this.low.size()) this.low.insert(this.high.extractRoot());
    }

    findMedian(): number {
        if(this.low.size() > this.high.size()) return this.low.root();
        return (this.low.root() + this.high.root()) / 2;
    }
}

/*
class MedianFinder {

    private median: number;
    private maxHeapMinSide: MaxHeap<number>;
    private minHeapMaxSide: MinHeap<number>;

    constructor() {
        this.median = -Infinity;
        this.maxHeapMinSide = new MaxHeap<number>();
        this.minHeapMaxSide = new MinHeap<number>();
    }

    addNum(num: number): void {
        if(this.median === -Infinity){
            this.median = num;
            return;
        }
        if(num < this.median) this.maxHeapMinSide.insert(num);
        else this.minHeapMaxSide.insert(num);

        const difference = this.maxHeapMinSide.size() - this.minHeapMaxSide.size();
        if(Math.abs(difference) < 2) return;

        if(difference < 0){
            this.maxHeapMinSide.insert(this.median);
            this.median = this.minHeapMaxSide.extractRoot();
        }
        else{
            this.minHeapMaxSide.insert(this.median);
            this.median = this.maxHeapMinSide.extractRoot();
        }
    }

    findMedian(): number {
        const difference = this.maxHeapMinSide.size() - this.minHeapMaxSide.size();
        if(difference === 0)
            return this.median;
        else if(difference === -1)
            return (this.median + this.minHeapMaxSide.root()) / 2;
        else if(difference === 1)
            return (this.median + this.maxHeapMinSide.root()) / 2;
    }
}
*/
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */