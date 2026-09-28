import {ListNode} from './list-node';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    const head1 = l1, head2 = l2;
    let prev = null;
    let flag = false;
    let carry = 0;
    while(l1 || l2){
        const operand1 = l1 ? l1.val : 0;
        const operand2 = l2 ? l2.val : 0;
        const sum = operand1 + operand2 + carry;
        const rem = sum%10;
        carry = Math.floor(sum/10);

        if(l1){
            l1.val = rem;
            prev = l1;
            flag = true;
        }
        if(l2){
            l2.val = rem;
            prev = l2;
            flag = false;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(carry){
        prev!.next = new ListNode(carry);
    }
    return flag ? head1 : head2;
};

/*
time - linear, space - constant
*/