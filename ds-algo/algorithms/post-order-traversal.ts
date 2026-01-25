class TreeNode{
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null){
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function recursion(root: TreeNode | null): void {
    if(!root) return;
    recursion(root.left);
    recursion(root.right);
    console.log(root.val);
}

function stackWithVisited(root: TreeNode | null): void {
    if(!root) return;
    const stack: TreeNode[] = [root];
    const visited = new Set<TreeNode>();
    let top: number = 0;
    while(stack.length){
        top = stack.length-1;
        const node: TreeNode = stack[top];
        if(node.left && !visited.has(node.left)){
            stack.push(node.left);
            visited.add(node.left);
            continue;
        }
        if(node.right && !visited.has(node.right)){
            stack.push(node.right);
            visited.add(node.right);
            continue;
        }
        console.log(stack.pop()?.val);
    }
}


function stackWithManualRecursion(root: TreeNode | null): void {
    if(!root) return;
    interface frame{
        node: TreeNode,
        state: 'Enter' | 'AfterLeft' | 'AfterRight'
    }
    const stack: frame[] = [];
    stack.push({node: one, state: 'Enter'});
    
    while(stack.length){
        const {node, state}: frame = stack.pop()!;
        switch(state){
            case 'Enter':
                stack.push({node: node, state: 'AfterLeft'});
                if(node.left){
                    stack.push({node: node.left, state: 'Enter'})
                }
                break;
            case 'AfterLeft':
                stack.push({node: node, state: 'AfterRight'});
                if(node.right){
                    stack.push({node: node.right, state: 'Enter'});
                }
                break;
            default:
                console.log(node.val);
        }
    }
}

function stackWithLastVisited(root: TreeNode | null): void {
    if(!root) return;
    const stack: TreeNode[] = [];
    let lastVisited: TreeNode | null = null;
    stack.push(root);
    while(stack.length){
        const top = stack[stack.length-1];
        if(top.left && lastVisited!==top.left && lastVisited!==top.right){
            stack.push(top.left);
        }
        else if(top.right && lastVisited!==top.right){
            stack.push(top.right);
        }
        else{
            console.log(top.val);
            lastVisited = top;
            stack.pop();
        }
    }
}

const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);
const two = new TreeNode(2, four, five);
const three = new TreeNode(3, six, seven);
const one = new TreeNode(1, two, three);

console.time('Recursion')
recursion(one);
console.timeEnd('Recursion');

console.time('Visited');
stackWithVisited(one);
console.timeEnd('Visited');

console.time('Manual recursion');
stackWithManualRecursion(one);
console.timeEnd('Manual recursion');

console.time('Last visited pointer');
stackWithLastVisited(one);
console.timeEnd('Last visited pointer');

/*
Last visited pointer - 1X
Manual recursion - 2X
Visited set - 3x
Recursion - 10X
*/