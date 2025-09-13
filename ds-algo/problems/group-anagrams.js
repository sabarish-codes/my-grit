/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {

    const map = new Map(); // create a hashmap to store key-value pairs

    strs.forEach((str) => {
        const sortedStr = str.split('').sort().join(''); // all anagrams have same key, Eg: 'acb' => 'abc'

        if(map.has(sortedStr)) // if map already contains the key (sortedString) then add the current string 
            map.get(sortedStr).push(str);
        else
            map.set(sortedStr, [str]);
    })
    return [...map.values()];
    // return Array.from(map.values()) 
    // both works, map.values() return an iterator object, so we use spread operator or Array.from()
    // both keeps calling .next() until done: true
}
/*
Time complexity - O(n * mlogm)
Space complexity - O(n * m)
    where n-number of strings, m-avg length of strings
*/