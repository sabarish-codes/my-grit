class MinHeap{

    heap: number[];

    constructor(){
        this.heap = [];
    }

    push(value: number){
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp(){
        const h = this.heap;
        let index = h.length-1;
        while(true){
            const parentIndex = Math.floor((index+1)/2)-1;

            if(h[parentIndex] < h[index]){ // heap property satisfied, so break the loop
                break;
            }

            // swap the current element and parent element
            [h[parentIndex], h[index]] = [h[index], h[parentIndex]];
            index = parentIndex;
        }
    }

    pop(){
        const h = this.heap;
        if(!h.length) return undefined;
        
        const root = h[0];
        h[0] = h[h.length-1];
        h.pop();
        this.bubbleDown();
        return root;
    }

    bubbleDown(){
        const h = this.heap;
        let index = 0;

        while(true){

            const leftChildIndex = (2*index) + 1;
            const rightChildIndex = (2*index) + 2;

            const leftChildExists = leftChildIndex < h.length;
            const rightChildExists = rightChildIndex < h.length;

            if(!leftChildExists && !rightChildExists){
                break;
            }
            else if(leftChildExists && !rightChildExists){
                if(h[index] > h[leftChildIndex]){
                    [h[index], h[leftChildIndex]] = [h[leftChildIndex], h[index]];
                    index = leftChildIndex;
                }
                else break;
            }
            else if(!leftChildExists && rightChildExists){
                if(h[index] > h[rightChildIndex]){
                    [h[index], h[rightChildIndex]] = [h[rightChildIndex], h[index]];
                    index = rightChildIndex;
                }
                else break;
            }
            else{ //both child exists
                const min = h[leftChildIndex]<h[rightChildIndex] ? leftChildIndex : rightChildIndex;
                if(h[index] > h[min]){
                    [h[index], h[min]] = [h[min], h[index]];
                    index = min;
                }
                else break;
            }
        }
    }
}