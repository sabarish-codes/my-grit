function numIslands(grid: string[][]): number {
    
    let islands = 0;
    const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    for(let i=0; i<ROWS; i++){
        for(let j=0; j<COLS; j++){
            if(grid[i][j]==='1'){
                bfs(i, j);
                islands++;
            }
        }
    }
    return islands;

    function bfs(row: number, col: number) {
        grid[row][col] = '0';
        const queue: number[][] = [[row, col]];
        let i = 0;
        while(i < queue.length){
            const [crow, ccol] = queue[i++];
            for(const [drow, dcol] of directions){
                const nrow = crow + drow;
                const ncol = ccol + dcol;
                if(nrow>=0 && nrow<ROWS && ncol>=0 && ncol<COLS && grid[nrow][ncol]==='1'){
                    grid[nrow][ncol] = '0';
                    queue.push([nrow, ncol]);
                }
            }
        }
    }
};
/*
time - O(m*n)
space - O(m*n)
*/