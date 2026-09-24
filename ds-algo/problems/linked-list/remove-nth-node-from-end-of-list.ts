import {ListNode} from './list-node';
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    
    const dummy = new ListNode(undefined, head);
    let slow: ListNode | null = dummy, 
        fast: ListNode | null = dummy;
    for(let i=0; i<n; i++){
        fast = fast!.next;
    }
    while(fast && fast.next){
        slow = slow!.next;
        fast = fast.next;
    }
    slow!.next = slow!.next!.next;
    return dummy.next;
};

/*
time - O(n)
space - O(1)
*/