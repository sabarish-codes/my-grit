function lengthOfLongestSubstring(s: string): number {
    
    const stringLength = s.length;
    if(stringLength < 2) return stringLength;

    let longestSubstring = 1;
    const indexArray = new Array(128); //character-index

    let left = 0;
    indexArray[s[left].charCodeAt(0)] = 0;
    for(let right=1; right<stringLength; right++){
        const index = s[right].charCodeAt(0);
        while(indexArray[index] >= left){
            left = indexArray[index] + 1;
        }
        indexArray[index] = right;
        longestSubstring = Math.max(longestSubstring, right-left+1);
    }

    return longestSubstring;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/