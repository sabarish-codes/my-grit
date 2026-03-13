function longestSubarrayDivK(arr: number[], k: number) {
    // your code here
    let result = 0;
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        const mod = ((sum%k)+k)%k;
        if(map.has(mod)){
            const length = i - map.get(mod);
            result = Math.max(result, length);
        }
        else{
            map.set(mod, i);
        }
    }
    return result;
}