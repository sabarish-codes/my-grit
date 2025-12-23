function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false;
    const arr1: number[] = new Array(26).fill(0);
    const arr2: number[] = new Array(26).fill(0);
    for(let i=0; i<word1.length; i++){
        arr1[word1[i].charCodeAt(0) - 97]++;
        arr2[word2[i].charCodeAt(0) - 97]++;
    }
    // checking all char in word1 also exists in word2, if not then they are not close
    for(let i=0; i<26; i++){
        if(arr1[i]===0 && arr2[i]!==0) return false;
        if(arr1[i]!==0 && arr2[i]===0) return false;
    }
    // checking the frequency counts of letters should be equal, letter need not to
    // for example, abbcccdd - [1,2,3,2] & aaabbcdd - [3,2,1,2]
    // the frequency values should exactly match, then only transform operation can be done to make them close
    arr1.sort((a, b) => a-b);
    arr2.sort((a, b) => a-b);
    for(let i=0; i<26; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
};
/*
Time complexity - O(n), sorting is (26 log26) so it simplifies to O(1)
Space complexity - O(1)
Time taken - 1hr

Note: 
    -> to get Unicode value - string.charCodeAt(0)
    -> to convert unicode values to a string - String.fromCharCode(3, 4);
*/