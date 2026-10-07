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

/*
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    
    if(!head || left===right) return head;

    // Just traverse and repeatedly insert node after prev (anchor)

    const dummy = new ListNode(-Infinity, head);
    let prev: ListNode = dummy;
    for(let i=0; i<left-1; i++) prev = prev.next;

    let current: ListNode = prev.next;
    let temp: ListNode | null = current.next;
    for(let i=0; i<right-left; i++){
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
        temp = current.next;
    }

    return dummy.next;
};
*/