function minWindow(s: string, t: string): string {
    
    if(s.length < t.length) return '';
    if(s === t) return s;

    const charToIndex = (c: string) => {
        if(c>='A' && c<='Z') return c.charCodeAt(0)-65;
        if(c>='a' && c<='z') return c.charCodeAt(0)-97+26
    }

    const requiredFreq = new Array(52).fill(0);
    let remainingCharRequired = 0;
    for(const c of t){
        if(!requiredFreq[charToIndex(c)!]) remainingCharRequired++;
        requiredFreq[charToIndex(c)!]++;
    }

    let bestWindow = [-1, -1];
    let min = s.length;
    let left = 0;
    const windowFreq = new Array(52).fill(0);

    for(let right=0; right<s.length; right++){
        const c = s[right];
        const idx = charToIndex(c)!;

        if(!requiredFreq[idx]) continue; // skipping characters not present in t

        windowFreq[idx]++;

        if(windowFreq[idx] === requiredFreq[idx]) remainingCharRequired--; 

        while(!remainingCharRequired){
            while(!requiredFreq[charToIndex(s[left])!]) left++; // skipping characters not present in t

            const lIdx = charToIndex(s[left])!;
            const len = right-left;
            if(len < min){
                min = len;
                bestWindow = [left, right+1];
            }
            windowFreq[lIdx]--;
            if(windowFreq[lIdx] < requiredFreq[lIdx]) remainingCharRequired++;
            left++;
        }
    }
    return s.slice(bestWindow[0], bestWindow[1]);
};

/*
Time complexity - O(n+m)
Space complexity - O(1)
*/