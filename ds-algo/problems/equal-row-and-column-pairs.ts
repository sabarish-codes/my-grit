function equalPairs(grid: number[][]): number {
    const cols: number = grid[0].length;
    const rows: number = grid.length;
    const map = new Map<string, number>();
    for(let i=0; i<cols; i++){
        let col: number[] = [];
        for(let j=0; j<rows; j++)
            col.push(grid[j][i]);
        const key = JSON.stringify(col);
        map.set(key, (map.get(key) || 0) + 1);
    }
    let pairs: number = 0;
    for(const rows of grid){
        const key = JSON.stringify(rows);
        if(map.has(key)) pairs += map.get(key);
    }
    return pairs;
};
/*
Time complexity - O(n^2)
Space complexity - O(n^2)
Time taken - 20m 20s

Note:
    -> hashmaps compare with reference for non primitive keys
    -> so even for same arrays it map.has() returns false
    -> thats why i used JSON.stringify()
*/