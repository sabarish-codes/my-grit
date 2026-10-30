class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const M = grid.length;
        const N = grid[0].length;
        const D = [[0,-1], [-1,0], [0,1], [1,0]];
        const INF = 2147483647;
        const queue: number[][] = [];
        for(let i=0; i<M; i++){
            for(let j=0; j<N; j++){
                if(grid[i][j] === 0) queue.push([i, j])
            }
        }
        bfs();

        function bfs() {
            for(const [r,c] of queue){
                for(const [dr,dc] of D){
                    const nr = r+dr;
                    const nc = c+dc;
                    if(nr<0 || nc<0 || nr>=M || nc>=N) continue;
                    if(grid[nr][nc] !== INF) continue;
                    grid[nr][nc] = 1+grid[r][c];
                    queue.push([nr, nc]);
                }
            }
        }
    }
}
/*
time - O(mn)
space - O(mn)

Solved successfully and then improved with help
Nami - 1
Luffy - 0, did Law's job instead of his
Law - 1
Zoro - 1, did a great job
Robin - 1
Monkey D Luffy - 0, not satisfied yet he did

Takeaway:
-> Always mark visited at push not at pop.
-> BFS in unweighted graph guarantees the queue is based on distance in non decreasing order.
    So, if a value arrived with 4, another value less than 4 cannot arrive after it.
*/
