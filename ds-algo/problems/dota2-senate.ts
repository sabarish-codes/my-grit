function predictPartyVictory(senate: string): string {
    const rQueue: number[] = [];
    const dQueue: number[] = [];
    for(let i=0; i<senate.length; i++){
        if(senate[i] === 'R')
            rQueue.push(i);
        else
            dQueue.push(i);
    }
    let rPointer: number = 0, dPointer: number = 0;
    while(rPointer<rQueue.length && dPointer<dQueue.length){
        const r = rQueue[rPointer];
        const d = dQueue[dPointer];
        if(r < d)
            rQueue.push(r + senate.length);
        else
            dQueue.push(d + senate.length);
        rPointer++;
        dPointer++;
    }
    return rPointer>=rQueue.length ? 'Dire' : 'Radiant';
};

/*function predictPartyVictory(senate: string): string {
    let array: string[] = senate.split('');
    let dCount: number = 0, rCount: number = 0;
    let n: number = array.length;
    let prevRoundN: number = n;
    do{
        let index: number = -1;
        for(let i=0; i<n; i++){
            const c = array[i];
            if(c === 'D'){
                if(rCount === 0){
                    array[++index] = c;
                    dCount++;
                }
                else if(rCount > 0){
                    rCount--;
                }
            }
            if(c === 'R'){
                if(dCount === 0){
                    array[++index] = c;
                    rCount++;
                }
                else if(dCount > 0){
                    dCount--;
                }
            }
        }
        prevRoundN = n;
        n = ++index;
    }while(n !== prevRoundN)
    return array[0]==='R' ? 'Radiant' : 'Dire';
};

Approach: Global/Macro system pressure wave dynamics
    Time complexity - Amortized O(n) - runs only constant times no matter what input is but theoretically O(n^2)
                      which is never possible
    Space complexity - O(n)
    Time taken - more than 3hrs (3 days), this is unique creative system thinking solution

Approach: Two queues
    Time complexity - O(n)
    Space complexity - O(n)

But in realtime or testcases runtime mine is almost always faster, because it is not simulating each local step,
just considering global level changes and invariant.
*/