
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    let depth: number = 0;
    const queue: TreeNode[] = [root];
    while(queue.length){
        const size: number = queue.length;
        for(let i=0; i<size; i++){
            const node: TreeNode = queue.shift()!;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        depth++;
    }
    return depth;
};

/*
Time complexity - O(n)
Space complexity - O(max depth of tree), average case - logN, worst case (skewed tree) - N
Time taken - 5m 58s

Invariants:
    DFS - Call stack size = current path length from root to current node.
    BFS - Queue always holds all nodes of the current level being processed.

Follow ups:
What is the time and space complexity of your solution?
Can you solve it iteratively using BFS?
Can you solve it iteratively using DFS with a stack?
What happens if the tree is extremely deep? Will your recursion overflow?
What’s the difference between height and depth in a binary tree?
If the tree is balanced, what is the space complexity?
If the tree is skewed (like a linked list), what is the space complexity?
How would you compute the minimum depth of the tree?
Can this be written as a tail-recursive function? Why or why not?
If the binary tree is stored as an array, how do you find child nodes?
Can you find the diameter of the tree? (Longest path between any two nodes)

Approaches : 
function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    const leftDepth: number = maxDepth(root.left);
    const rightDepth: number = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth)+1;
}; O(n), O(depth of tree)

function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    let depth: number = 0;
    let queue: TreeNode[] = [root];
    let tempQueue: TreeNode[] = [];
    while(queue && queue.length){
        const element: TreeNode = queue.shift();
        if(element.left) tempQueue.push(element.left);
        if(element.right) tempQueue.push(element.right);
        if(!queue.length){
            depth++;
            queue = tempQueue;
            tempQueue = [];
        }
    }
    return depth;
}; O(n), O(n)

function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }
    let depth: number = 0;
    const queue: TreeNode[] = [root];
    while(queue.length){
        const size: number = queue.length;
        for(let i=0; i<size; i++){
            const node: TreeNode = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        depth++;
    }
    return depth;
}; O(n), O(n)

*/