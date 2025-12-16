function maxVowels(s: string, k: number): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0, maxVowelsCount = Number.MIN_VALUE;
    // first window 
    for(let i=0; i<k; i++){
        if(vowels.indexOf(s[i]) !== -1) vowelsCount++;
    }
    maxVowelsCount = vowelsCount;
    for(let i=k; i<s.length; i++){
        if(vowels.indexOf(s[i]) !== -1) vowelsCount++;
        if(vowels.indexOf(s[i-k]) !== -1) vowelsCount--;
        maxVowelsCount = vowelsCount>maxVowelsCount ? vowelsCount : maxVowelsCount;
    }
    return maxVowelsCount;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 4m 11s

Note:
    -> indexOf() is faster than includes(), huge difference
    -> although it may depend on the browsers, in chrome indexOf is mostly faster
*/