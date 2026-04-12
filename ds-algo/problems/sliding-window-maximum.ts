function maxSlidingWindow(nums: number[], k: number): number[] {
    
    const result = [];
    const deque = [nums[0]];
    let left = 0, right;
    for(right=1; right<k; right++){
        while(deque.length && nums[right]>deque.at(-1)!)
            deque.pop();
        deque.push(nums[right]);
    }
    result.push(deque[0]);
    if(deque[0] === nums[left]) deque.shift();
    left++;

    for(right=k; right<nums.length; right++){
        while(deque.length && nums[right]>deque.at(-1)!)
            deque.pop();
        deque.push(nums[right]);
        result.push(deque[0]);
        if(deque[0] === nums[left]) deque.shift();
        left++;
    }

    return result;
};

/*
Time complexity - O(n)
Space complexity - O(n)

Note:
    I got confused why can't we use heap? Not feasible because in heap once the left element expires, its hard to find
    the element inside heap, delete it and then rearrange. So go with monotonice deque where there is an expiry of old 
    elements.

Heap: use when you need the global max/min from an unordered set (supports arbitrary insert/remove).
Deque: use when elements leave the window in fixed left-to-right order (sliding window).
Heap = global priority, Deque = window max/min.
If old elements expire predictably → Deque, otherwise → Heap.
*/
