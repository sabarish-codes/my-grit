function characterReplacement(s: string, k: number): number {
    let result = 0;
    const freqArray = new Array(26).fill(0);
    let maxFreq = 0;
    let left = 0;

    for(let right=0; right<s.length; right++){
        const index = s.charCodeAt(right) - 65;
        freqArray[index]++;
        maxFreq = Math.max(maxFreq, freqArray[index]);

        let length = right-left+1;
        let windowBreakCondition = length-maxFreq > k;

        while(windowBreakCondition){
            const leftCharIndex = s.charCodeAt(left) - 65;
            freqArray[leftCharIndex]--;
            left++;
            length = right-left+1;
            windowBreakCondition = length-maxFreq > k;
        }
        result = Math.max(result, length);
    }
    return result;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/