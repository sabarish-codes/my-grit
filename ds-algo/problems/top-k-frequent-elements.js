/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const map = new Map();
    nums.forEach(n => map.set(n, (map.get(n) || 0) + 1) );

    function MinHeap(){
        this.data = [];
    }
    MinHeap.prototype.push = function(x){
        this.data.push(x);
        this.bubbleup(this.data.length-1);
    }
    MinHeap.prototype.bubbleup = function(i){
        const a = this.data;
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(a[p][1] <= a[i][1])
                break;
            [a[p], a[i]] = [a[i], a[p]];
            i = p;
        }
    }
    MinHeap.prototype.pop = function(){
        const a = this.data;
        if(a.length === 0) return undefined;
        if(a.length === 1) return a.pop();
        const top = a[0];
        a[0] = a.pop();
        this.bubbledown(0);
        return top;
    }
    MinHeap.prototype.bubbledown = function(i){
        const a = this.data;
        const n = a.length;
        while(true){
            const l = (2*i)+1;
            const r = (2*i)+2;
            let largest = i;
            if(l<n && a[l][1]<a[largest][1])
                largest = l
            if(r<n && a[r][1]<a[largest][1])
                largest = r;
            if(largest === i)
                break;
            [a[i], a[largest]] = [a[largest], a[i]];
            i = largest;
        }
    }
    MinHeap.prototype.size = function(){
        return this.data.length;
    }

    const heap = new MinHeap();
    for(const [n, count] of map){
        heap.push([n, count]);
        if(heap.size() > k)
            heap.pop();
    }
        

    let result = [];
    while(heap.size() > 0)
        result.push(heap.pop()[0])

    return result;
};

/*
Time complexity - O(n log k)
Space complexity - O(n)
*/