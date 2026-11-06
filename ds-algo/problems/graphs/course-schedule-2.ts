function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const pre = Array.from({length: numCourses}, () => [] as number[])
    for(const [course, prerequisite] of prerequisites) pre[course].push(prerequisite);
    const path = new Set<number>();
    const visited = new Set<number>();
    for(let i=0; i<numCourses; i++){
        if(!dfs(i)) return [];
    }
    return [...visited];

    function dfs(i: number): boolean {
        if(visited.has(i)) return true;
        path.add(i);
        for(const p of pre[i]){
            if(path.has(p) || !dfs(p)) return false;
        }
        path.delete(i);
        visited.add(i);
        return true;
    }
};
