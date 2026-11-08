class UnionFindBySize {
  private parent: number[];
  private size: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.size = Array.from({ length: n + 1 }, () => 1);
  }

  find(i: number): number {
    if (this.parent[i] === i) return i;
    this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }

  union(u: number, v: number) {
    let rootU: number = this.find(u);
    let rootV: number = this.find(v);

    if (rootU === rootV) return;

    if (this.size[rootU] < this.size[rootV]) [[rootU, rootV]] = [[rootV, rootU]]

    this.parent[rootV] = rootU;
    this.size[rootU] += this.size[rootV];
  }

  isConnected(u: number, v: number): boolean {
    return this.find(u) === this.find(v);
  }

  componentSizeOf(i: number): number {
    return this.size[this.find(i)];
  }
}
