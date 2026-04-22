function largestRectangleArea(heights: number[]): number {
    
    let maxArea = 0;
    const stack: [number, number][] = []; // [height, index]

    for(let i=0; i<heights.length; i++){
        const currentHeight = heights[i];
        while(stack.length && currentHeight<stack[stack.length-1][0]){
            const last = stack.pop();
            const leftBoundary = stack.length===0 ? -1 : stack[stack.length-1][1];
            const area = last![0] * (i - leftBoundary - 1);
            maxArea = Math.max(maxArea, area);
        }
        stack.push([currentHeight, i]);
    }
    while(stack.length){
        const last = stack.pop();
        const leftBoundary = stack.length===0 ? -1 : stack[stack.length-1][1];
        const area = last![0] * (heights.length - leftBoundary - 1);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

/*
Time complexity - O(n)
Space complexity - O(n)
Note : 
    -> This problem was a aha moment for me. It thought me to we doesn't need to compute or take action
       whenever data arrives, we need to compute based on events or conditions when its lifecycle is done or
       we found a invalid state.
*/

/*
function largestRectangleArea(heights: number[]): number {
    
    let max = 0;
    const left = new Array<number>(heights.length);

    let stack: {height: number, index: number}[] = [];
    for(let i=0; i<heights.length; i++){
        const currentHeight = heights[i];
        while(stack.length && currentHeight<=stack.at(-1).height)
            stack.pop();
        left[i] = stack.length===0 ? -1 : stack.at(-1).index;
        stack.push({height: currentHeight, index: i});
    }
    stack = [];
    for(let i=heights.length-1; i>=0; i--){
        const currentHeight = heights[i];
        while(stack.length && currentHeight<=stack.at(-1).height)
            stack.pop();
        const rightIndex = stack.length===0 ? heights.length : stack.at(-1).index;
        stack.push({height: currentHeight, index: i})

        const area = heights[i] * (rightIndex - left[i] - 1);
        max = Math.max(max, area);
    }

    return max;
};
*/