class _Node {
    val: number;
    next: _Node | null = null;
    random: _Node | null = null;

    constructor(value: number = 0){
        this.val = value;
    }
}

function copyRandomList(head: _Node | null): _Node | null {

    if(!head) return null;

    const map = new Map<_Node | null, _Node | null>();
    map.set(null, null);

    let current: _Node | null = head;
    while(current){
        map.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;
    while(current){
        const copy = map.get(current)!;
        copy.next = map.get(current.next!) ?? null;
        copy.random = map.get(current.random!) ?? null;
        current = current.next;
    }
    return map.get(head)!;
    
};