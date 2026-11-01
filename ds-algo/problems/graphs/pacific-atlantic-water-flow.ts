function pacificAtlantic(heights: number[][]): number[][] {
    const result: number[][] = [];
    const M = heights.length;
    const N = heights[0].length;
    for(let i=0; i<M; i++){
        for(let j=0; j<N; j++){
            if(isPacific(i, j) && isAtlantic(i, j)) result.push([i, j]);
        }
    }
    return result;

    function isPacific(r: number, c: number, h: number = 100001, visited: Set<number> = new Set<number>()): boolean {
        if(r<0 || c<0 || r>=M || c>=N) return false;
        const height = heights[r][c];
        if(height > h) return false;
        const key = (r*N)+c;
        if(visited.has(key)) return false;
        visited.add(key);
        if(r===0 || c===0) return true;
        return isPacific(r, c-1, height, visited) ||
               isPacific(r-1, c, height, visited) ||
               isPacific(r, c+1, height, visited) ||
               isPacific(r+1, c, height, visited);
    }

    function isAtlantic(r: number, c: number, h: number = 100001, visited: Set<number> = new Set<number>()): boolean {
        if(r<0 || c<0 || r>=M || c>=N) return false;
        const height = heights[r][c];
        if(height > h) return false;
        const key = (r*N)+c;
        if(visited.has(key)) return false;
        visited.add(key);
        if(r===M-1 || c===N-1) return true;
        return isAtlantic(r, c-1, height, visited) ||
               isAtlantic(r-1, c, height, visited) ||
               isAtlantic(r, c+1, height, visited) ||
               isAtlantic(r+1, c, height, visited);
    }
};
