function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const m: number = potions.length;
    potions.sort((a, b) => a-b);
    return spells.map((s) => {
        let low = 0, high = m-1;
        while(low <= high){
            const mid = low + Math.floor((high-low)/2);
            if(s*potions[mid] >= success)
                high = mid-1;
            else
                low = mid+1;
        }
        return m-low;
    });
};
/*
Time complexity - O(nlogm + mlogm)
Space complexity - O(m) auxiliary space taken Array.prototype.sort()
Time taken - 20m

Note:
    -> Ig limit upto 10^5, mean time complexity O(nlogn)
*/