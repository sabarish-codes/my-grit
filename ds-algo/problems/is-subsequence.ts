function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0, tPointer = 0;
    while(sPointer<s.length && tPointer<t.length){
        if(s[sPointer] === t[tPointer]){
            sPointer++;
            tPointer++;
        }
        else tPointer++;
    }
    return sPointer===s.length ? true : false;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - around 2m
*/