import { ListNode } from "./list-node";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    
    if(!head || left===right) return head;

    const dummy = new ListNode(-Infinity, head);

    let anchor: ListNode = dummy;
    for(let i=0; i<left-1; i++) anchor = anchor.next!;

    const tail: ListNode = anchor.next!;
    let prev: ListNode | null = anchor;
    let curr: ListNode | null = tail;

    for(let i=0; i<right-left+1; i++){
        const next: ListNode | null = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;
    }

    anchor.next = prev;
    tail.next = curr;

    return dummy.next;

};