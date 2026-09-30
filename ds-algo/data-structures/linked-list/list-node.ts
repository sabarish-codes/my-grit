class ListNode<T> {
    public value: T;
    public prev: ListNode<T> | null = null;
    public next: ListNode<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
}