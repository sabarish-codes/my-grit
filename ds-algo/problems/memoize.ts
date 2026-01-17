type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
    const cache = new Map<string, number>();

    return function(...args) {
        const key: string = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key)!;
        }    
        const value: number = fn(...args);
        cache.set(key, value);
        return value;
    }
}

/*
Time complexity - O(n) for stringify and determined by fn
Space complexity - O(m) unique arguements or function call stored in cache
*/


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */