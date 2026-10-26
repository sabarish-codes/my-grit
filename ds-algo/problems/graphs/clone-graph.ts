class _Node {
    val: number
    neighbors: _Node[]
 
    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}



function cloneGraph(node: _Node | null): _Node | null {
	const map = new Map<number, _Node>();

    function clone(node: _Node | null): _Node | null {
        if(!node) return null;
        if(!map.has(node.val)) map.set(node.val, new _Node(node.val));
        const copy = map.get(node.val)!;
        for(const n of node.neighbors){
            if(!map.has(n.val)){
                clone(n);
            }
            copy.neighbors.push(map.get(n.val)!);
        }
        return copy;
    }

    return clone(node);
};

// time - O(V+E), space - O(V)

/*
function cloneGraph(node: _Node | null): _Node | null {
	if(!node) return null;

    const map = new Map<number, _Node>();
    map.set(node.val, new _Node(node.val));
    const queue = [node];

    for(let i=0; i<queue.length; i++){
        const current = queue[i];
        if(!map.has(current.val)) map.set(current.val, new _Node(current.val));
        const clone = map.get(current.val);

        for(const n of current.neighbors){
            if(!map.has(n.val)){
                map.set(n.val, new _Node(n.val));
                queue.push(n);
            }
            clone.neighbors.push(map.get(n.val));
        }
    }
    return map.get(node.val);
};
*/