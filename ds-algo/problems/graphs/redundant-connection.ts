function findRedundantConnection(edges: number[][]): number[] {
    const u = new UnionFind(edges.length);
    for(const [a,b] of edges){
        if(!u.union(a,b)) return [a,b];
    }
    return [];
};

/*
time - O(E alpha(V))
space - O(n)
 Each edge is processed once. Each union or find operation runs in near-constant amortized time due to path compression and union by size. Overall, O(E α(V)) time, where α is the inverse Ackermann function, effectively constant for practical input sizes.
*/


class UnionFind {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = Array.from({length: n+1}, (_, i) => i);
        this.size = Array.from({length: n+1}, () => 1);
    }

    find(i: number): number {
        if(i === this.parent[i]) return i;
        return this.parent[i] = this.find(this.parent[i]);
    }

    union(u: number, v: number): boolean {
        let rootU = this.find(u);
        let rootV = this.find(v);

        if(rootU === rootV) return false;
        if(this.size[rootU] < this.size[rootV]) [rootU, rootV] = [rootV, rootU];

        this.parent[rootV] = rootU;
        this.size[rootU] += this.size[rootV];
        return true;
    }

    isConnected(u: number, v: number): boolean {
        return this.find(u) === this.find(v);
    }
}
