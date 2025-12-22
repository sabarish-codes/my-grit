function uniqueOccurrences(arr: number[]): boolean {
    const frequencyMap = new Map<number, number>();
    arr.forEach(n => frequencyMap.set(n, (frequencyMap.get(n) || 0) + 1));
    const frequencySet = new Set<number>();
    for(const f of frequencyMap.values()){
        if(frequencySet.has(f)) return false;
        frequencySet.add(f);
    }
    return true;
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 5m

Note:
    -> This is better than just comparing map.size === set.size i think
    -> because it always have to add all elements in set but here as soon as condition fails returns
*/