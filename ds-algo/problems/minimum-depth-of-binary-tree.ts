
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
 

function minDepth(root: TreeNode | null): number {
    if(!root) return 0;

    let minDepth: number = Number.MAX_SAFE_INTEGER;
    const stack: {node: TreeNode, depth: number}[] = [{node: root, depth: 1}];

    while(stack.length){
        const {node, depth}: {node: TreeNode, depth: number} = stack.pop()!;
        if(depth >= minDepth){ // pruning to avoid nodes with greater depth
            continue;
        }
        if(!node.left && !node.right){
            minDepth = Math.min(minDepth, depth);
            continue;
        }
        if(node.left) stack.push({node: node.left, depth: depth+1});
        if(node.right) stack.push({node: node.right, depth: depth+1});
    }
    return minDepth;
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - 15m to complete this problem, not to reach this optimal level

Note:
    -> Until level is needed, always prefer DFS but with manual stack due to risk of stack overflow error
    -> undefined > 0 returns false, undefined is treated as NaN, any comparison with Nan is treated as false
       except !==
*/