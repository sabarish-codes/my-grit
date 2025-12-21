function maxArea(height: number[]): number {
    let left: number = 0, right: number = height.length-1;
    let max: number = 0;
    while(left < right){
        // breadth of container = right-left
        // height of container = minimum of height[left], height[right]
        // area of water = breadth * height
        const area = (right-left) * Math.min(height[left], height[right]);
        max = Math.max(area, max);
        if(height[left] < height[right]) left++;
        else right--;
    }
    return max;
};
/*
Time complexity - O(n)
Space complexity - O(1)
*/