function longestSubarray(arr: number[], k: number) {
    
    let result = 0;
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        const difference = sum-k;
        if(map.has(difference)){
            const length = i - map.get(difference);
            result = Math.max(result, length);
        }
        if(!map.has(sum)){
            map.set(sum, i);
        }
    }
    return result;
}

