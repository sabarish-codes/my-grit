/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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