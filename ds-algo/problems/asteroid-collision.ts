function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];
    let i: number = 0;
    while(i < asteroids.length){
        let n = stack.length;
        const top = stack[n-1];
        const current = asteroids[i];

        if(current>0 || top<0 || !top) stack.push(current)    // push condition
        else if(top === -current) stack.pop();                // collision - when top and current are equal values but opposite direction          
        else{                                                 // collision - when top < absolute value of current     
            stack[n-1] = top>(-current) ? top : current;
            while(n>1 && stack[n-2]>0 && stack[n-1]<0){
                if(stack[n-2] > -(stack[n-1])) stack.pop();
                else if(stack[n-2] === -(stack[n-1])){
                    stack.pop();
                    stack.pop();
                }
                else {
                    stack.pop();
                    stack[stack.length-1] = current;
                }
                n = stack.length;
            }
        }
        
        i++;
    }
    return stack;
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - 43m

Note: 
    -> undefined > 0 returns false

Senior codes:
for (const curr of asteroids) {
    let alive = true;

    while (alive && stack.length > 0 && stackTop > 0 && curr < 0) {
        if (stackTop === -curr) {
            stack.pop();
            alive = false;  // Only marking!
        } else if (stackTop < -curr) {
            stack.pop();
        } else {
            alive = false;  // Only marking!
        }
    }

    if (alive) {           // Decision happens HERE
        stack.push(curr);
    }
}

function asteroidCollision(a: number[]): number[] {
    const stack: number[] = [];

    for (const curr of a) {
        let alive = true;

        while (alive && curr < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];

            if (top < -curr) {
                stack.pop();
                continue;
            }

            if (top === -curr) {
                stack.pop();
            }

            alive = false;
        }

        if (alive) {
            stack.push(curr);
        }
    }

    return stack;
}
*/