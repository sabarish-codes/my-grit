import { ListNode } from "./list-node";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let current: ListNode | null = head;
    while(current){
        let next: ListNode | null = current.next;
        while(next && next.val===current.val) next = next.next;
        current.next = next;
        current = current.next;
    }
    return head;
};