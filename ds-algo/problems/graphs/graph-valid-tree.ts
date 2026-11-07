class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const visited = new Array(n).fill(false);
        const graph = Array.from({length: n}, () => [] as number[]);
        for(const [a,b] of edges){
            graph[a].push(b);
            graph[b].push(a);
        }
        if(cycle(0)) return false;
        for(let i=0; i<n; i++){
            if(!visited[i]) return false;
        }
        return true;

        function cycle(i: number, parent: number = -1): boolean {
            if(visited[i]) return true;
            visited[i] = true;
            for(const n of graph[i]){
                if(n === parent) continue;
                if(cycle(n, i)) return true;
            }
            return false;
        }
    }
}
