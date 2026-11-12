import { ListNode } from './list-node';

function isPalindrome(head: ListNode | null): boolean {
    if(!head) return false;
    const middleNode = findMiddle(head);
    let head2 = reverse(middleNode.next);
    middleNode.next = null;
    while(head && head2){
        if(head.val !== head2.val) return false;
        head = head.next;
        head2 = head2.next;
    }
    return true;

    function findMiddle(node: ListNode): ListNode {
        let slow: ListNode = node, fast = node.next;
        while(fast && fast.next){
            slow = slow.next!;
            fast = fast.next.next;
        }
        return slow;
    }

    function reverse(node: ListNode | null): ListNode | null {
        let prev = null, curr = node;
        while(curr){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

};