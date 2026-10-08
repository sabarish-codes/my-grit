import { ListNode } from "./list-node";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head || !head.next || !k) return head;

    let count = 1;
    let current = head;
    while(current.next){
        current = current.next;
        count++;
    }

    k = k%count;
    if(k === 0) return head;

    current.next = head; // making it circular list
    let tail = head;
    for(let i=0; i<count-k-1; i++) tail = tail.next!;

    const newHead = tail.next;
    tail.next = null; // cutting the circular ring

    return newHead;
};

/*
linear time, constant space
First attempt i solved optimally using two pointers, i didnt come up with circular ring.
*/