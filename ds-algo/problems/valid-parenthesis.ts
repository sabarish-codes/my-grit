function isValid(s: string): boolean {
    
    if(s.length%2) return false;

    type Closing = ')' | ']' | '}';
    type Opening = '(' | '[' | '{';

    const pair: Record<Closing, Opening> = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack: Opening[] = [];

    for(const c of s){
        if(c in pair){
            if(pair[c as Closing] !== stack.pop()) return false;
        }
        else
            stack.push(c as Opening);
    }
    return stack.length === 0;
};

/*
Time complexity - O(n)
Space complexity - O(n)
*/