export class LRUNode<K, V> {
  key: K | null;
  value: V | null;
  prev: LRUNode<K, V> | null;
  next: LRUNode<K, V> | null;

  constructor(key?: K, value?: V, prev?: LRUNode<K, V>, next?: LRUNode<K, V>) {
    this.key = key===undefined ? null : key;
    this.value = value === undefined ? null : value;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}
