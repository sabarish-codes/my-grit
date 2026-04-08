function checkInclusion(s1: string, s2: string): boolean {
    
    if(s1.length > s2.length) return false;

    const freq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
    const windowSize = s1.length;
    for(let i=0; i<s1.length; i++){
        freq[s1.charCodeAt(i)-97]++;
        windowFreq[s2.charCodeAt(i)-97]++;
    }
    
    let matches = 0;
    for(let i=0; i<26; i++){
        if(freq[i] === windowFreq[i])
            matches++;
    }
    if(matches === 26) return true;

    for(let i=windowSize; i<s2.length; i++){
        const outIdx = s2.charCodeAt(i-windowSize)-97;
        const inIdx = s2.charCodeAt(i)-97;

        if(freq[outIdx] === windowFreq[outIdx]) matches--;
        windowFreq[outIdx]--;
        if(freq[outIdx] === windowFreq[outIdx]) matches++;

        if(freq[inIdx] === windowFreq[inIdx]) matches--;
        windowFreq[inIdx]++;
        if(freq[inIdx] === windowFreq[inIdx]) matches++;

        if(matches === 26) return true;
    }

    return false;
};

/*
Time complexity - O(s2.length)
Space complexity - O(1)
*/