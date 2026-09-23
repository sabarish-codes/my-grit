import { ListNode } from "./list-node";
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(!list1 && !list2) return null;
    if(!list1) return list2;
    if(!list2) return list1;

    const head = new ListNode();
    let current = head;
    while(list1 && list2){
        if(list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;

    return head.next;
};

/*
Time - O(n+m)
Space - O(1)
*/