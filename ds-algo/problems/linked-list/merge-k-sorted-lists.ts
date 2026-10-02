import {ListNode} from './list-node'

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    if(!lists.length) return null;

    const heap = new MyMinHeap();
    for(const list of lists){
        if(list) heap.add(list);
    }
    const dummy = new ListNode();
    let current: ListNode | null = dummy;
    while(heap.size() > 0){
        const node = heap.remove()!;
        if(node && node.next) heap.add(node.next);
        current.next = node;
        current = current.next;
    }
    return dummy.next;
};

class MyMinHeap {
    heap: ListNode[];

    constructor(){
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    add(node: ListNode){
        this.heap.push(node);
        this.bubbleUp(this.heap.length-1);
    }

    bubbleUp(idx: number){
        let child = idx;
        while(child > 0){
            let parent = Math.floor((child-1) / 2);
            if(this.heap[child].val < this.heap[parent].val){
                [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
                child = parent;
            }
            else break;
        }
    }

    remove(): ListNode | null {
        if(!this.heap.length) return null;

        const root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop();
        this.bubbleDown();
        return root;
    }

    bubbleDown(){
        if(!this.heap.length) return;
        let parent = 0;

        while(parent < this.heap.length){

            let leftChild = (2*parent) + 1;
            let rightChild = (2*parent) + 2;
            const leftChildExists = leftChild < this.heap.length;
            const rightChildExists = rightChild < this.heap.length;

            if(!leftChildExists && !rightChildExists){
                break;
            }
            if(leftChildExists && rightChildExists){
                const minChild = this.heap[leftChild].val<this.heap[rightChild].val ? leftChild : rightChild;
                if(this.heap[parent].val > this.heap[minChild].val){
                    [this.heap[parent], this.heap[minChild]] = [this.heap[minChild], this.heap[parent]];
                    parent = minChild;
                }
                else break;
            }
            if(leftChildExists && !rightChildExists){
                if(this.heap[parent].val > this.heap[leftChild].val){
                    [this.heap[parent], this.heap[leftChild]] = [this.heap[leftChild], this.heap[parent]];
                    parent = leftChild;
                }
                else break;
            }
            if(!leftChildExists && rightChildExists){
                if(this.heap[parent].val > this.heap[rightChild].val){
                    [this.heap[parent], this.heap[rightChild]] = [this.heap[rightChild], this.heap[parent]];
                    parent = rightChild;
                }
                else break;
            }
        }
    }
}

/*
time - O(n log k)
space - O(k)
k - number of lists
*/