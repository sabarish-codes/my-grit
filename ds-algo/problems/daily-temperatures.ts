function dailyTemperatures(temperatures: number[]): number[] {
    
    const stack: {temperature: number, index: number}[] = [];

    for(let i=temperatures.length-1; i>=0; i--){
        const currentTemperature = temperatures[i];
        while(stack.length && currentTemperature>=stack[stack.length-1].temperature){
            stack.pop();
        }
        const daysToWait = stack.length===0 ? 0 : stack[stack.length-1].index-i;
        stack.push({temperature: currentTemperature, index: i});
        temperatures[i] = daysToWait;
    }

    return temperatures;
};

/*
Time complexity - O(n)
Space complexity - O(n)
*/