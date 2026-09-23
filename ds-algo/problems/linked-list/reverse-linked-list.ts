import { ListNode } from "./list-node";
function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;

    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    while(current){
        const temp: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/