function hammingWeight(n: number): number {
    let setBits = 0;
    
    while(n){
        if(n & 1) setBits++;
        n >>>= 1;
    }

    return setBits;
};

/*
Time complexity - O(1) // runs only 31 times
Space complexity - O(1)
*/