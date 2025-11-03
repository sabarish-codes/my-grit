/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    function MaxHeap(){
        this.data = [];
    }

    MaxHeap.prototype._up = function(i){
        const a = this.data;
        while(i > 0){
            const p = Math.floor((i-1)/2);
            if(a[p] >= a[i])
                break;
            [a[p], a[i]] = [a[i], a[p]];
            i = p;
        }
    }

    MaxHeap.prototype._down = function(i){
        const a = this.data;
        const n = a.length;
        while(true){
            const l = (2*i) + 1;
            const r = (2*i) + 2;
            let largest = i;
            if(l<n && a[l]>a[largest])
                largest = l;
            if(r<n && a[r]>a[largest])
                largest = r;
            if(largest === i)
                break;
            [a[largest], a[i]] = [a[i], a[largest]];
            i = largest;
        }
    }

    MaxHeap.prototype.push = function(x){
        this.data.push(x);
        this._up(this.data.length-1);
    }

    MaxHeap.prototype.pop = function(){
        const a = this.data;
        if(a.length === 0) return undefined;
        if(a.length === 1) return a.pop();
        const max = a[0];
        a[0] = a.pop();
        this._down(0);
        return max;
    }

    const heap = new MaxHeap();
    nums.forEach(n => heap.push(n));
    let result;
    for(let i=0; i<k; i++)
        result = heap.pop();

    return result;
};