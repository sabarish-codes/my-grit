function kClosest(points: number[][], k: number): number[][] {
    
    type heapObject = {
        distance: number,
        point: number[]
    };

    const getDistance = (item: heapObject): number => item.distance;
    const heap = new MaxHeap<heapObject>(getDistance);
    
    for(const p of points){
        const distance = (p[0] ** 2) + (p[1] ** 2);
        heap.insert({distance, point: p});
        if(heap.size() > k) heap.extractRoot();
    }
    const result: number[][] = [];
    while(heap.size()) result.push(heap.extractRoot().point);
    return result;
};

/*
time - O(n logk)
space - O(k)

Sorting method: O(n logn), O(n) - Fast when n is small
function kClosest(points: number[][], k: number): number[][] {
    points.sort((p1, p2) => {
        return (p1[0]**2 + p1[1]**2) - (p2[0]**2 + p2[1]**2);
    })
    return points.slice(0, k);
};
*/