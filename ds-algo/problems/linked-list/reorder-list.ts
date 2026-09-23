import {ListNode} from './list-node'
function reorderList(head: ListNode | null): void {
    if(!head || !head.next) return;

    const middleNode = findMiddle(head);
    let list2 = reverseList(middleNode.next);
    middleNode!.next = null;
    mergeList(head, list2);
    
};

function findMiddle(head: ListNode): ListNode {
    let slow = head,
        fast = head.next;
    while(fast && fast.next){
        slow = slow.next!;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList(head: ListNode | null): ListNode | null{
    let prev: ListNode | null = null,
        current: ListNode | null = head;
    while(current){
        const temp: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}

function mergeList(list1: ListNode | null, list2: ListNode | null) {
    let current = new ListNode();
    while(list1 && list2){
        current.next = list1;
        list1 = list1.next;
        current = current.next;

        current.next = list2;
        list2 = list2.next;
        current = current.next;
    }
    current.next = list1 || list2;
}

/*
time - O(n)
space - O(1)
*/