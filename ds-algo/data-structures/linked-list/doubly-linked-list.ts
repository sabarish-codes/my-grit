import {ListNode} from './list-node';

class DoublyLinkedList<T> {

    // sentinel nodes to avoid null checks
    private dummyHead: ListNode<T>;
    private dummyTail: ListNode<T>;
    private size: number = 0;

    constructor(){
        this.dummyHead = new ListNode<T>(null as any);
        this.dummyTail = new ListNode<T>(null as any);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    public getLength(): number {
        return this.size;
    }

    public pushFront(value: T): ListNode<T> {
        const newNode = new ListNode<T>(value);
        const firstRealNode = this.dummyHead.next!;

        newNode.next = firstRealNode;
        newNode.prev = this.dummyHead;
        this.dummyHead.next = newNode;
        firstRealNode.prev = newNode;

        this.size++;
        return newNode;
    }

    public pushBack(value: T): ListNode<T> {
        const newNode = new ListNode<T>(value);
        const lastRealNode = this.dummyTail.prev!;

        newNode.next = this.dummyTail;
        newNode.prev = lastRealNode;
        this.dummyTail.prev = newNode;
        lastRealNode.next = newNode;

        this.size++;
        return newNode;
    }

    // O(1), removes a known node pointer in-place without searching
    public removeNode(node: ListNode<T>): void {
        if(node===this.dummyHead || node===this.dummyTail){
            return;
        }
        const prevNode = node.prev!;
        const nextNode = node.next!;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        node.next = null;
        node.prev = null;
        this.size--;
        return;
    }

    public popFront(): T | null {
        if(this.size === 0) return null;

        const firstRealNode = this.dummyHead.next!;
        const value = firstRealNode.value;
        this.removeNode(firstRealNode);
        return value;
    }

    public popBack(): T | null {
        if(this.size === 0) return null;

        const lastRealNode = this.dummyTail.prev!;
        const value = lastRealNode.value;
        this.removeNode(lastRealNode);
        return value;
    }

    public find(value: T): ListNode<T> | null {
        let current = this.dummyHead.next;
        while(current && current!==this.dummyTail){
            if(value === current.value){
                return current;
            }
            current = current.next;
        }
        return null;
    }

    public toArray(): T[] {
        const list: T[] = [];
        let current = this.dummyHead.next;
        while(current && current!==this.dummyTail){
            list.push(current.value);
            current = current.next;
        }
        return list;
    }
}

const list = new DoublyLinkedList<number>();
list.pushBack(10);
list.pushBack(20);
list.pushFront(5);               // List: [5, 10, 20]
const target = list.find(10);
if (target) list.removeNode(target); // List: [5, 20]
console.log(list.toArray());