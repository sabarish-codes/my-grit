import {ListNode} from './list-node'

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode): void {
    node.val = node.next!.val;
    node.next = node.next!.next;
};
/*
constant time, constant space
*/