
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

function goodNodes(root: TreeNode | null): number {
    const stack: {node: TreeNode, max: number}[] = [{node: root!, max: root?.val!}];
    let lastVisited: TreeNode | null | undefined = undefined;
    let goodNodes: number = 0;

    while(stack.length){
        const {node: top, max: currentMax} = stack[stack.length-1];

        if(top.left && top.left!==lastVisited && top.right!==lastVisited){
            const max: number = Math.max(currentMax, top.left.val);
            stack.push({node: top.left, max})
        }
        else if(top.right && top.right!==lastVisited){
            const max: number = Math.max(currentMax, top.right.val);
            stack.push({node: top.right, max});
        }
        else{
            if(top.val === currentMax){
                goodNodes++;
            }
            lastVisited = stack.pop()!.node
        }
    }
    return goodNodes;
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 15m
*/