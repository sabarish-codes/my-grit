class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let components = 0;
        const visited = new Array<boolean>(n).fill(false);
        const adj = Array.from({length: n}, () => [] as number[]);
        for(const [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        for(let i=0; i<n; i++){
            if(!visited[i]){
                dfs(i);
                components++;
            }
        }
        return components;



        function dfs(i: number, parent: number = -1) {
            if(visited[i]) return;
            visited[i] = true;
            for(const n of adj[i]){
                if(n === parent) continue;
                dfs(n, i);
            }
        }
    }
}
