function maxAreaOfIsland(grid: number[][]): number {
    let max = 0
    const ROWS = grid.length;
    const COLS = grid[0].length;

    for(let i=0; i<ROWS; i++){
        for(let j=0; j<COLS; j++){
            if(grid[i][j] === 1){
                max = Math.max(max, dfs(i, j));
            }
        }
    }

    function dfs(row: number, col: number): number {
        if(row<0 || row>ROWS-1 || col<0 || col>COLS-1 || grid[row][col]===0){
            return 0;
        }
        grid[row][col] = 0;
        return 1 + dfs(row, col-1) + dfs(row-1, col) + dfs(row, col+1) + dfs(row+1, col);
    }

    return max;
};

// time - O(m*n), space - O(m*n)
/*
function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIRS = [[0, -1], [-1, 0], [0, 1], [1, 0]];

    for(let i=0; i<ROWS; i++){
        for(let j=0; j<COLS; j++){
            if(grid[i][j] === 1){
                bfs(i, j);
            }
        }
    }

    function bfs(row: number, col: number) {
        let area = 1;
        grid[row][col] = 0;
        const queue = [[row, col]];
        for(const [crow, ccol] of queue){
            for(const [drow, dcol] of DIRS){
                const nrow = crow + drow;
                const ncol = ccol + dcol;
                if(nrow>=0 && nrow<ROWS && ncol>=0 && ncol<COLS && grid[nrow][ncol]===1){
                    grid[nrow][ncol] = 0;
                    queue.push([nrow, ncol]);
                    area++;
                }
            }
        }
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
};
*/