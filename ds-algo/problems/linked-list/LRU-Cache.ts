class LRUCache {

    capacity: number;
    dummyHead: LRUNode;
    dummyTail: LRUNode;
    map: Map<number, LRUNode>;
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.dummyHead = new LRUNode();
        this.dummyTail = new LRUNode();
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
        this.map = new Map<number, LRUNode>();
    }

    private removeNode(node: LRUNode): LRUNode | null{
        if(node===this.dummyHead || node===this.dummyTail) return null;
        const prevNode = node.prev!;
        const nextNode = node.next!;
        if(prevNode) prevNode.next = nextNode;
        if(nextNode) nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
        return node;
    }

    private addNode(node: LRUNode): void {
        const firstNode = this.dummyHead.next!;
        node.prev = this.dummyHead;
        node.next = firstNode;
        this.dummyHead.next = node;
        firstNode.prev = node;
    }

    get(key: number): number {
        if(!this.map.has(key)){
            return -1;
        }
        const node = this.removeNode(this.map.get(key)!);
        this.addNode(node!);
        return node!.value;
    }

    put(key: number, value: number): void {

        // already exists
        if(this.map.has(key)){
            const node = this.removeNode(this.map.get(key)!);
            node!.value = value;
            this.addNode(node!);
            return;
        }

        const newNode = new LRUNode(key, value);
        this.addNode(newNode);
        this.map.set(key, newNode);

        // exceeds capacity
        if(this.map.size && this.map.size > this.capacity){
            const lastNode = this.dummyTail.prev!;
            this.map.delete(lastNode.key);
            this.removeNode(lastNode);
        }
    }
}

class LRUNode {
    key: number;
    value: number;
    prev: LRUNode | null = null;
    next: LRUNode | null = null;
    constructor(key: number = 0, value: number = 0){
        this.key = key;
        this.value = value;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */