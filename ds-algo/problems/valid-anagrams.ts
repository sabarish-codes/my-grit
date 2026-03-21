function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length){
        return false;
    }
    
    const frequencyArray: number[] = new Array(26).fill(0); 
    const aUnicodeValue = 'a'.charCodeAt(0);

    for(let i=0; i<s.length; i++){
        const sIndex = s[i].charCodeAt(0) - aUnicodeValue;
        const tIndex = t[i].charCodeAt(0) - aUnicodeValue;
        frequencyArray[sIndex]++;
        frequencyArray[tIndex]--;
    }
    
    for(let i=0; i<26; i++){
        if(frequencyArray[i] !== 0){
            return false;
        }
    }

    return true;
};

/*
Time complexity - O(n)
Space complexity - O(1)

Note: This pattern is called Honey-Bunny pattern
      -> whenever we need to compare 2 things, just increment with 1 and 
         decrement with other 1. If result is 0 then they are equal.
*/