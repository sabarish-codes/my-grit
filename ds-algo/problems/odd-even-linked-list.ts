
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;

    const evenHead: ListNode | null = head.next;
    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;
    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead

    return head;
}; 

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 20m 51s

Simple code:
function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const evenHead: ListNode | null = head.next;
    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;
    while(true){
        if(even.next === null){
            odd.next = evenHead;
            break;
        }
        odd.next = even.next;
        odd = odd.next;
        
        if(odd.next === null){
            even.next = null;
            odd.next = evenHead;
            break;
        }
        even.next = odd.next;
        even = even.next;
    }
    return head;
}; 
*/