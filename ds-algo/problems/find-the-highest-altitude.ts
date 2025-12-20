function largestAltitude(gain: number[]): number {
    let highestAltitude: number = 0;
    gain.reduce((acc, current) => {
        acc += current;
        highestAltitude = Math.max(highestAltitude, acc);
        return acc;
    }, 0);
    return highestAltitude;
};
/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 2m
*/