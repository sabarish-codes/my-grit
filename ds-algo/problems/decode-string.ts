function decodeString(s: string): string {
    const stack: [number, string][] = [];
    let currentString: string = '';
    let currentMultiplier: number = 0;
    for(const char of s){
        if(char === '['){
            stack.push([currentMultiplier, currentString]);
            currentString = '';
            currentMultiplier = 0;
        }
        else if(char === ']'){
            const [prevMultiplier, prevString]: [number, string] = stack.pop() || [0, '']; //just to skip typescript error undefined
            currentString = prevString + currentString.repeat(prevMultiplier);
        }
        else if(!isNaN(Number(char)))
            currentMultiplier = currentMultiplier*10 + Number(char);
        else
            currentString += char;
    }
    return currentString;
};
/*
Time complexity - O(n*k)
Space complexity - O(n)
Time taken - more than 3hrs to reach this solution, figured out naive solution in 2hrs
*/