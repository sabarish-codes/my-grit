

function hasCycle(head: ListNode | null): boolean {
    
    if(!head) return false;
    let slow: ListNode | null = head, fast = head.next;
    while(slow && fast){
        if(slow === fast){
            return true;
        }
        slow = slow.next;
        fast = fast.next?.next ?? null;
    }
    return false;
};

/*
I observed the 2 cases:
    -> If cycle exists: null is not reachable
    -> If cycle don't existst: null is reachable
    So, I need a condition to stop in cycle detection
    then i remebered slow,fast pointer method

Time - O(n)
Space - O(1)
*/