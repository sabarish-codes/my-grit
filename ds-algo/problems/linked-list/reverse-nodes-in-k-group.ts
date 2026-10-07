import { ListNode } from "./list-node";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    
    if(!head || k===1) return head;

    const dummy = new ListNode(-Infinity, head);
    let prev = dummy;
    let tail = prev.next;

    while(tail){
        if(!reverse(prev, k)){
            reverse(prev, k);
            break;
        }
        prev = tail;
        tail = prev.next;
    }

    return dummy.next;

    function reverse(prev: ListNode, k: number): boolean {
        let tail = prev.next!;
        let count = 1;
        while(count<k && tail.next){
            const temp = tail.next;
            tail.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
            count++;
        }
        return count === k;
    }
};