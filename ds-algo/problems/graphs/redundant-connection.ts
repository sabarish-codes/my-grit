function findRedundantConnection(edges: number[][]): number[] {
    const graph = Array.from({length: edges.length+1}, () => [] as number[]);
    for(const [a, b] of edges){
        graph[a].push(b);
        graph[b].push(a);
        if(cycle(a)) return [a, b];
    }
    return [];

    function cycle(node: number, parent: number = 0, path = new Set<number>(), visited = new Set<number>()): boolean {
        if(visited.has(node)) return false;
        path.add(node);
        for(const n of graph[node]){
            if(n === parent) continue;
            if(path.has(n)) return true;
            if(cycle(n, node, path, visited)) return true;
        }
        path.delete(node);
        visited.add(node);
        return false;
    }
};
