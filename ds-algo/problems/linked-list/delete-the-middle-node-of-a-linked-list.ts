
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head || !head.next) // to handle null and single node list
        return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    while(fast?.next?.next){
        fast = fast.next.next;
        slow = slow?.next!;
    }
    slow.next = slow?.next?.next! ?? null;
    return head;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 25m
*/