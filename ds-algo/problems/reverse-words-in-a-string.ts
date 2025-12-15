function reverseWords(s: string): string {
    const array = s.trim().split(/\s+/);
    let strings = [];
    for(let i=array.length-1; i>=0; i--)
        strings.push(array[i]);
    return strings.join(' ');
};

/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - 7m

Note: 
    -> \s mean whitespace, tab, newline, verticaltab, carriage return, formfeed
    -> + mean 1 or more occurences
    -> /\s+/ regex pattern
*/