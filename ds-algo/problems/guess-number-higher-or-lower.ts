/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let low: number = 1, high: number = n;
    let result: number = 0;
    while(low <= high){
        const mid = Math.floor((low+high) / 2);
        const result = guess(mid);
        if(result === 0) return mid;
        else if(result === -1) high = mid-1;
        else low = mid+1;
    }
    return 0; // just to remove ts errors
};

function guess(n: number): number{
    return 1
}

/*
Time complexity - O(log n)
Space complexity - O(1)
Time taken - 10m

Craziest or wildest version
function guessNumber(n: number): number {
    let result: number;
    let low: number = 1;
    let high: number = n*2;
    do{
        n = Math.floor((high+low)/2);
        result = guess(n)
        result === -1 ? high = n : low = n;
    }while(result !== 0)
    return n;
};
*/