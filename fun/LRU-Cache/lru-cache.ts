import { LRUNode } from "./lru-node";

class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, LRUNode<K, V>>;
  private dummyHead: LRUNode<K, V>;
  private dummyTail: LRUNode<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<K, LRUNode<K, V>>();
    this.dummyHead = new LRUNode<K, V>();
    this.dummyTail = new LRUNode<K, V>();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  private removeNode(node: LRUNode<K, V>): LRUNode<K, V> | null {
    if (!node) return null;
    if (!this.cache.size || node === this.dummyHead || node === this.dummyTail) return null;
    if(node.prev) node.prev!.next = node.next;
    if(node.next) node.next!.prev = node.prev;
    node.prev = null;
    node.next = null;
    return node;
  }

  private addNode(node: LRUNode<K, V> | null) {
    if (!node) return;
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    if(this.dummyHead.next) this.dummyHead.next!.prev = node;
    this.dummyHead.next = node;
  }

  get(key: K): V | null {
    if (!this.cache.has(key)) return null;
    const node = this.removeNode(this.cache.get(key)!);
    this.addNode(node);
    return node!.value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      const node = this.removeNode(this.cache.get(key)!)!;
      node.value = value;
      this.addNode(node);
      return;
    }

    const newNode = new LRUNode(key, value);
    this.addNode(newNode);
    this.cache.set(key, newNode);

    if (this.cache.size>0 && this.cache.size > this.capacity) {
      const lastNode = this.dummyTail.prev!;
      const node = this.removeNode(lastNode)!;
      this.cache.delete(node.key!);
    }
  }
}

function main() {
  const l = new LRUCache<number, number>(3);
  l.put(1, 1);
  l.put(2, 2);
  l.put(3, 3);
  console.log(l.get(1));
  console.log(l.get(2));
  console.log(l.get(3));
  console.log(l.get(4));
  l.put(4, 4);
  console.log(l.get(4));
  console.log(l.get(1));
}

main();
