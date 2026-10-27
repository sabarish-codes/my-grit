function orangesRotting(grid: number[][]): number {
    let minutes = 0;
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIRS = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    let queue: number[][] = [];
    let fresh = 0;

    for(let i=0; i<ROWS; i++){
        for(let j=0; j<COLS; j++){
            if(grid[i][j] === 1) fresh++;
            else if(grid[i][j] === 2) queue.push([i, j]);
        }
    }

    if(!fresh) return minutes;

    while(queue.length){
        const nextQueue = [];
        for(const [crow, ccol] of queue){
            for(const [drow, dcol] of DIRS){
                const row = crow + drow;
                const col = ccol + dcol;
                if(row<0 || row>=ROWS || col<0 || col>=COLS || grid[row][col]===0) continue;
                else if(grid[row][col] === 1){
                    fresh--;
                    grid[row][col] = 2;
                    nextQueue.push([row, col]);
                }
            }
        }
        queue = nextQueue;
        if(nextQueue.length) minutes++;
    }
    return fresh ? -1 : minutes;
};

//time - O(n*m) space - O(n*m)