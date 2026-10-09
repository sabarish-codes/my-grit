import {ListNode} from './list-node'

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const dummy = new ListNode(-Infinity);
    let tail = dummy;
    let curr: ListNode | null = head;
    while(curr){
        if(!curr.next || curr.val!==curr.next.val){ // No next node (last node) or distinct node
            tail.next = curr;
            tail = tail.next;
            curr = curr.next;
        }
        else{
            const duplicateValue = curr.val;
            while(curr && curr.val===duplicateValue) curr = curr.next;
        }
    }
    tail.next = null;
    return dummy.next;
};

/*
linear time, constant space
*/