import { ListNode } from "./list-node";

function pairSum(head: ListNode | null): number {
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow!.next;
        fast = fast.next.next;
    }
    slow = reverse(slow!);
    let current = head;
    let max = -Infinity;
    while(slow){
        max = Math.max(max, current!.val + slow.val);
        slow = slow.next;
        current = current!.next;
    }
    return max;

    function reverse(head: ListNode): ListNode {
        let prev = null;
        while(head){
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next!;
        }
        return prev!!;
    }
};

/*
linear time, constant space
*/