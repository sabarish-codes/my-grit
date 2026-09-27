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
        if(!map.has(current)){
            map.set(current, new _Node(current.val));
        }
        const copy = map.get(current)!;
        if(!map.has(current.next)){
            map.set(current.next, new _Node(current.next!.val));
        }
        copy.next = map.get(current.next)!;
        if(!map.has(current.random)){
            map.set(current.random, new _Node(current.random!.val));
        }
        copy.random = map.get(current.random)!;
        current = current.next;
    }
    return map.get(head)!;
};


/*
1. Using hashmap in 2 passes

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
*/