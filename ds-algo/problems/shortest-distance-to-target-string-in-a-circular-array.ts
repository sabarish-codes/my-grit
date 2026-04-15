function closestTarget(words: string[], target: string, startIndex: number): number {
    
    if(words[startIndex] === target) return 0;
    const n = words.length;
    let nextIndex = (startIndex+1)%n;
    let nextStep = 1;
    let prevIndex = (startIndex-1+n)%n;
    let prevStep = 1;
    while(nextStep <= Math.floor(n/2)){ // making one side covers n/2 and other side cover other n/2
        if(words[nextIndex] === target) return nextStep;
        if(words[prevIndex] === target) return prevStep;
        nextIndex = (nextIndex+1)%n;
        nextStep++;
        prevIndex = (prevIndex-1+n)%n;
        prevStep++;
    }
    return -1;
};

/*
Time complexity - O(n)
Space complexity - O(1)
*/