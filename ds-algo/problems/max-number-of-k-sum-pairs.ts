function maxOperations(nums: number[], k: number): number {

    const map = new Map<number, number>();
    let count = 0;
    nums.forEach((element) => {
        const difference = k-element;
        if(map.has(difference)){
            count++;
            const freq = map.get(difference) || 0; // added || 0 , just to get rid of typescript undefined error
            if(freq === 1) map.delete(difference);
            else map.set(difference, freq-1);
        }
        else{
            map.set(element, (map.get(element) || 0)+1);
        }
    })
    return count;
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - 15m
*/