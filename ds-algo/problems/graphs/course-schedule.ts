function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Map<number, number[]>();
    for(const [course, pre] of prerequisites){
        if(!graph.has(course)) graph.set(course, []);
        graph.get(course)!.push(pre);
    }
    const visited = new Set<number>();
    const path = new Set<number>();
    for(const node of graph.keys()){
        if(!dfs(node)) return false;
    }
    return true;

    function dfs(node: number): boolean {
        if(visited.has(node)) return true;
        if(path.has(node)) return false;
        path.add(node);
        const neighbors = graph.get(node);
        for(const n of neighbors || []){
            if(!dfs(n)) return false;
        }
        path.delete(node);
        visited.add(node);
        return true;
    }
};

// time - O(v+e)
// space - O(v+e)

/*
Nami - 1, did good job
Luffy - 0
Law - 1
Zoro - 1, did good job
Robin - 1
Monkey D Luffy - 0

Takeaway:
  -> To detect cycle in a graph 3 states are needed for a node
  -> visited, visiting/current path, not visited

*/
