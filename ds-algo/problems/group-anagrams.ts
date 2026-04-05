function groupAnagrams(strs: string[]): string[][] {
    
    const anagrams = new Map<string, string[]>(); // key - stringified frequency array, value - strings

    for(const str of strs){
        const frequencyArray = new Array(26).fill(0);
        for(const char of str){
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            frequencyArray[index]++;
        }
        const key = frequencyArray.join();
        if(anagrams.has(key)) anagrams.get(key)!.push(str);
        else anagrams.set(key, [str]);
    }

    return [...anagrams.values()];
};
/*
Time complexity - (n * m)
Space complexity - O(n * m)
*/

/*
function groupAnagrams(strs: string[]): string[][] {
    
    const anagrams = new Map<string, string[]>();
    
    strs.forEach((str) => {
        const sortedStr = str.split('').sort().join('');

        if(anagrams.has(sortedStr)) anagrams.get(sortedStr).push(str);
        else                        anagrams.set(sortedStr, [str]);
    })

    return [...anagrams.values()];
};
*/