/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const M = board.length;
    const N = board[0].length;

    function dfs(r: number, c: number) {
        if(r<0 || r>=M || c<0 || c>=N || board[r][c]==='X' || board[r][c]==='#') return;
        board[r][c] = '#';
        dfs(r, c-1);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r+1, c);
    }
    for(let i=0; i<M; i++){
        dfs(i, 0);
        dfs(i, N-1);
    }
    for(let i=0; i<N; i++){
        dfs(0, i);
        dfs(M-1, i);
    }
    for(let i=0; i<M; i++){
        for(let j=0; j<N; j++){
            if(board[i][j] === 'O') board[i][j] = 'X';
            else if(board[i][j] === '#') board[i][j] = 'O';
        }
    }
};

/*
time - O(mn)
space - O(mn)
*/
