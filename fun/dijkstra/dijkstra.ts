import Graph from "./graph";

interface NodeInfo {
    prevNode: string | null,
    distance: number
}

function dijkstra(graph: Graph, source: string, destination: string) {

    const nodes: string[] = graph.getNodes();

    const visited = new Set<string>();

    const tracker = new Map<string, NodeInfo>();
    
    for(const node of nodes){
        tracker.set(node, {prevNode: null, distance: Infinity})
    }
    tracker.set(source, {prevNode: null, distance: 0});

    const getNextUnvisited = () => {
        let lowestDistance = Infinity;
        let nextNode = null;
        for(const [node, nodeInfo] of tracker){
            if(visited.has(node)){
                continue;
            }
            if(nodeInfo.distance < lowestDistance){
                lowestDistance = nodeInfo.distance;
                nextNode = node;
            }
        }
        return nextNode;
    }

    while(true){
        const current = getNextUnvisited();
        if(current === null){
            break;
        }
        visited.add(current);

        const neighbours = graph.getNeighbours(current);
        for(const n of neighbours){
            const oldDistance = tracker.get(n.to)!.distance;
            const newDistance = tracker.get(current)!.distance + n.weight;
            if(newDistance < oldDistance){
                tracker.set(n.to, {prevNode: current, distance: newDistance});
            }
        }
    }

    if(tracker.get(destination)?.distance === Infinity){
        return [{node: source, distance: 0}];
    }

    const pathInfo: {node: string, distance: number}[] = [{node: destination, distance: tracker.get(destination)!.distance}]
    while(true){
        const lastNode = pathInfo[pathInfo.length-1].node;
        const nodeInfo = tracker.get(lastNode)!;
        const prevNode = nodeInfo.prevNode;
        if(prevNode === null){
            break;
        }
        const distance = tracker.get(prevNode)!.distance;
        pathInfo.push({node: prevNode, distance});
    }

    return pathInfo.reverse();
}


const g = new Graph();

g.addEdge('A', 'B', 2);
g.addEdge('A', 'C', 4);
g.addEdge('B', 'C', 1);
g.addEdge('B', 'D', 7);
g.addEdge('C', 'E', 3);
g.addEdge('E', 'D', 2);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 5);
g.addEdge('F', 'G', 2);
g.addEdge('E', 'G', 6);
g.addEdge('C', 'G', 20);
const result = dijkstra(g, 'A', 'G');
console.log(result);

