
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let prev: ListNode | null = head;
    let current: ListNode | null = head.next;
    let temp: ListNode | null;  // used to store the next node
    prev.next = null;   // since current prev or head will be last node, making it point to null
    while(current){
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 14m 55s
*/