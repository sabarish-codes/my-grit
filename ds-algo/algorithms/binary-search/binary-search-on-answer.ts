// Answer lies in monotonic feasibility space
// Threshold or continuos range of values and not on arrays

// finding lowest possible answer
function lowest(feasible: (n: number) => boolean, maxLimit: number): number {
    let low = 1, high = maxLimit;
    while(low < high){
        const mid = low + Math.floor((high-low)/2);
        if(feasible(mid))
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}

// finding highest possible answer
function highest(feasible: (n: number) => boolean, maxLimit: number): number {
    let low = 1, high = maxLimit;
    while(low < high){
        const mid = low + Math.ceil((high-low)/2); // mid = low + Math.floor((high-low+1)/2)
        if(feasible(mid))
            low = mid;
        else
            high = mid - 1;
    }
    return high;
}

/*
Key points: 
    -> In js/ts we have to explicitly use floor/ceil division
    -> This bias in division depending on floor or ceil is crucial to avoid infinite loops
    -> In lowest, we have to use floor because when high=mid this floor bias avoid infinite loop
    -> In highest, we have to use ceil or mid = low + (high-low+1)/2 to avoid infinite loop when low=mid
    -> Also in highest, dont use low=mid+1 because we don't know feasibilty of mid+1
    -> A subtle bug not in algorithm but in arithmetic operation a machine does
*/