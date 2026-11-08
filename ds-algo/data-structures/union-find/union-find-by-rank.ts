class UnionFindByRank {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size + 1 }, (_, i) => i);
    this.rank = Array.from({ length: size + 1 }, () => 0);
  }

  find(i: number): number {
    if (this.parent[i] === i) return i;
    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  union(u: number, v: number) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) return;

    if (this.rank[rootU] > this.rank[rootV])
      this.parent[rootV] = rootU;
    else if (this.rank[rootU] < this.rank[rootV])
      this.parent[rootU] = rootV;
    else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
      }
  }

  isConnected(u: number, v: number): boolean {
    return this.find(u) === this.find(v);
  }
}

function main() {
  const uf = new UnionFindByRank(5);
  uf.union(1, 2);
  uf.union(1, 5);
  console.log(uf.isConnected(1, 2));
  console.log(uf.isConnected(1, 4));
  console.log(uf.isConnected(2, 5));
}

main();
