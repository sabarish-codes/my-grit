import {ListNode} from './list-node';

function partition(head: ListNode | null, x: number): ListNode | null {
    if(!head || !head.next) return head;
    
    const lesserNumbersDummyHead = new ListNode(-Infinity);
    const greaterNumbersDummyHead = new ListNode(-Infinity);
    let lesserCurrent = lesserNumbersDummyHead;
    let greaterCurrent = greaterNumbersDummyHead;
    let current: ListNode | null = head;
    while(current){
        if(current.val < x){
            lesserCurrent.next = current;
            lesserCurrent = lesserCurrent.next;
        }
        else{
            greaterCurrent.next = current;
            greaterCurrent = greaterCurrent.next;
        }
        current = current.next;
    }
    lesserCurrent.next = greaterNumbersDummyHead.next;
    greaterCurrent.next = null;
    return lesserNumbersDummyHead.next;
};
/*
linear time, constant space
*/