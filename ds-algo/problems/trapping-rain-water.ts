function trap(height: number[]): number {
    
    let water = 0;
    let left = 1, right = height.length-2;
    let leftMax = height[0], rightMax = height[height.length-1];
    while(left <= right){
        if(leftMax <= rightMax){
            leftMax = Math.max(leftMax, height[left]);
            water += (leftMax-height[left]);
            left++;
        }
        else{
            rightMax = Math.max(rightMax, height[right]);
            water += (rightMax - height[right]);
            right--;
        }
    }
    return water;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/

/*
function trap(height: number[]): number {
    
    let water = 0;
    const n = height.length;

    const prefix = new Array(n);
    const suffix = new Array(n);
    let prefixMax = height[0], suffixMax = height[n-1];
    for(let i=0; i<n; i++){
        prefixMax = Math.max(prefixMax, height[i]);
        prefix[i] = prefixMax;
        suffixMax = Math.max(suffixMax, height[n-1-i]);
        suffix[n-1-i] = suffixMax;
    }

    for(let i=1; i<n-1; i++){
        const waterExists = (height[i]<prefix[i-1]) && (height[i]<suffix[i+1]);
        if(waterExists){
            const min = Math.min(prefix[i-1], suffix[i+1]);
            water += min-height[i];
        }
    }

    return water;
};
*/