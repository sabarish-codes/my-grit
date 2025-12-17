function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandies: number = Math.max(...candies);
    const result: boolean[] = [];
    candies.forEach(c => result.push((c + extraCandies) >= maxCandies))
    return result;
};

/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 2m

Note:
    -> use Math.max() to find max in an array
*/