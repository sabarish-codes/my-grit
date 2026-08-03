interface Edge {
    to: string,
    weight: number
}

export default class Graph {
    private adjacencyList = new Map<string, Edge[]>();

    addNode(node: string): void {
        if(typeof node !== 'string' || node.trim() === ''){
            throw new Error(`addNode invalid node: "${node}"`);
        }
        if(!this.adjacencyList.has(node)){
            this.adjacencyList.set(node, [])
        }
    }

    addEdge(from: string, to: string, weight: number): void {
        if(typeof weight !== 'number' || Number.isNaN(weight) || weight < 0){
            throw new Error(`addEdge invalid weight: "${weight}`);
        }
        this.addNode(from);
        this.addNode(to);
        this.adjacencyList.get(from)!.push({to, weight});
    }

    getNeighbours(node: string): Edge[] {
        return this.adjacencyList.get(node) ?? [];
    }

    getNodes(): string[] {
        return [...this.adjacencyList.keys()];
    }
}