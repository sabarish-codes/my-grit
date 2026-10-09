import { ListNode } from "./list-node";

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums);
    const dummy = new ListNode(-Infinity);
    let pointer = dummy;
    let current = head;
    while(current){
        if(!set.has(current.val)){
            pointer.next = current;
            pointer = current;
        }
        current = current.next;
    }
    pointer.next = null;
    return dummy.next;
};

/*
time - O(n+m)
space - O(m)
*/